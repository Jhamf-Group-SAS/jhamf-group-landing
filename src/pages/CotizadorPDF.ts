import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { PLANS, ADDONS, PLAN_FEATURES_PDF, fmt, type PlanKey } from "./CotizadorData";

export const generatePDF = (
  selectedPlan: PlanKey,
  selectedAddons: Record<string, typeof ADDONS[0]>,
  formData: { nombre: string; empresa: string; nit: string; email: string; tel: string; ciudad: string; sector: string; vigencia: string }
) => {
  const plan = PLANS[selectedPlan];
  const addonEntries = Object.values(selectedAddons);
  const addonTotal = addonEntries.reduce((s, a) => s + a.price, 0);
  const total = plan.price + addonTotal;

  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const W = 210, margin = 18;

  const today = new Date();
  const dateStr = today.toLocaleDateString("es-CO", { day: "2-digit", month: "long", year: "numeric" });
  const cotiNum = "JHF-" + today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + String(today.getDate()).padStart(2, "0") + "-" + String(Math.floor(Math.random() * 9000) + 1000);

  // Background
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, W, 297, "F");

  // Top Bar cyan
  doc.setFillColor(0, 184, 217);
  doc.rect(0, 0, W, 28, "F");

  // ISO badge
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(W - margin - 46, 7, 46, 14, 3, 3, "F");
  doc.setTextColor(0, 120, 160); doc.setFontSize(7); doc.setFont("helvetica", "bold");
  doc.text("ISO 9001:2015 CERTIFIED", W - margin - 23, 13, { align: "center" });
  doc.setTextColor(40, 40, 40); doc.setFontSize(6); doc.setFont("helvetica", "normal");
  doc.text("COMPECER · jhamf.com", W - margin - 23, 18, { align: "center" });

  // Title Block
  doc.setFillColor(245, 247, 250);
  doc.rect(0, 28, W, 32, "F");
  doc.setDrawColor(220, 225, 235); doc.setLineWidth(0.3);
  doc.line(0, 60, W, 60);

  doc.setTextColor(0, 184, 217); doc.setFontSize(8); doc.setFont("helvetica", "bold");
  doc.text("COTIZACIÓN COMERCIAL", margin, 40);
  doc.setTextColor(30, 40, 60); doc.setFontSize(17); doc.setFont("helvetica", "bold");
  doc.text("Valora Suite — Plataforma Omnicanal con IA", margin, 50);
  doc.setFontSize(8); doc.setFont("helvetica", "normal"); doc.setTextColor(100, 110, 130);
  doc.text("Portafolio Comercial 2025 · Jhamf Group S.A.S", margin, 57);

  const [pr, pg, pb] = plan.planColors;
  doc.setFillColor(pr, pg, pb);
  doc.roundedRect(W - margin - 50, 31, 50, 22, 3, 3, "F");
  doc.setTextColor(255, 255, 255); doc.setFontSize(7); doc.setFont("helvetica", "bold");
  doc.text("N° COTIZACIÓN", W - margin - 25, 39, { align: "center" });
  doc.setFontSize(8);
  doc.text(cotiNum, W - margin - 25, 46, { align: "center" });
  doc.setFontSize(6.5); doc.setFont("helvetica", "normal");
  doc.text(dateStr, W - margin - 25, 51, { align: "center" });

  let y = 68;

  // Client Info Box
  doc.setFillColor(248, 250, 253);
  doc.roundedRect(margin, y, W - margin * 2, 42, 4, 4, "F");
  doc.setDrawColor(200, 210, 225); doc.setLineWidth(0.4);
  doc.roundedRect(margin, y, W - margin * 2, 42, 4, 4, "S");
  doc.setFillColor(pr, pg, pb);
  doc.roundedRect(margin, y, 4, 42, 2, 2, "F");

  doc.setTextColor(pr, pg, pb); doc.setFontSize(7); doc.setFont("helvetica", "bold");
  doc.text("DATOS DEL CLIENTE", margin + 8, y + 8);

  const fields = [
    ["Nombre", formData.nombre || "(Sin nombre)"], ["Empresa", formData.empresa || "(Sin empresa)"],
    ["NIT / CC", formData.nit || "—"], ["Email", formData.email || "—"],
    ["Teléfono", formData.tel || "—"], ["Ciudad", formData.ciudad || "—"],
    ["Sector", formData.sector || "—"], ["Vigencia", (formData.vigencia || "30") + " días hábiles"],
  ];
  fields.forEach(([label, val], i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const fx = margin + 8 + col * 87, fy = y + 18 + row * 7;
    doc.setTextColor(130, 140, 160); doc.setFontSize(6.5); doc.setFont("helvetica", "bold");
    doc.text(label + ":", fx, fy);
    doc.setTextColor(30, 40, 60); doc.setFont("helvetica", "normal");
    doc.text(String(val), fx + 22, fy);
  });
  y += 50;

  // Plan Selected Box
  doc.setFillColor(pr, pg, pb);
  doc.roundedRect(margin, y, W - margin * 2, 26, 4, 4, "F");
  doc.setTextColor(255, 255, 255); doc.setFontSize(8); doc.setFont("helvetica", "bold");
  doc.text("PLAN CONTRATADO", margin + 6, y + 9);
  doc.setFontSize(15);
  doc.text(plan.name + " — " + plan.subtitle, margin + 6, y + 19);
  doc.setFontSize(7); doc.setFont("helvetica", "normal");
  doc.text(plan.tag, margin + 6, y + 24.5);
  doc.setFontSize(13); doc.setFont("helvetica", "bold");
  doc.text(fmt(plan.price) + "/mes", W - margin - 4, y + 17, { align: "right" });
  y += 33;

  // Features Table
  autoTable(doc, {
    startY: y,
    head: [["Característica", "Detalle"]],
    body: PLAN_FEATURES_PDF[selectedPlan],
    theme: "grid",
    headStyles: { fillColor: [pr, pg, pb], textColor: [255, 255, 255], fontSize: 8, fontStyle: "bold", halign: "left" },
    bodyStyles: { fillColor: [255, 255, 255], textColor: [40, 50, 70], fontSize: 8, lineColor: [220, 225, 235] },
    alternateRowStyles: { fillColor: [248, 250, 253] },
    columnStyles: { 0: { fontStyle: "bold", cellWidth: 80 }, 1: { cellWidth: "auto" } },
    margin: { left: margin, right: margin },
  });
  y = (doc as any).lastAutoTable.finalY + 8;

  // Add-ons Table
  if (addonEntries.length > 0) {
    doc.setFillColor(245, 247, 250);
    doc.roundedRect(margin, y, W - margin * 2, 8, 2, 2, "F");
    doc.setDrawColor(200, 210, 225); doc.roundedRect(margin, y, W - margin * 2, 8, 2, 2, "S");
    doc.setTextColor(pr, pg, pb); doc.setFontSize(7); doc.setFont("helvetica", "bold");
    doc.text("ADD-ONS SELECCIONADOS", margin + 6, y + 5.5);
    y += 10;
    autoTable(doc, {
      startY: y,
      head: [["Add-on", "Modalidad", "Precio"]],
      body: addonEntries.map(a => [a.name, a.period, fmt(a.price)]),
      theme: "grid",
      headStyles: { fillColor: [245, 247, 250], textColor: [pr, pg, pb], fontSize: 7.5, fontStyle: "bold" },
      bodyStyles: { fillColor: [255, 255, 255], textColor: [40, 50, 70], fontSize: 8, lineColor: [220, 225, 235] },
      columnStyles: { 2: { halign: "right" } },
      margin: { left: margin, right: margin },
    });
    y = (doc as any).lastAutoTable.finalY + 8;
  }

  // Totals
  const boxH = addonEntries.length > 0 ? 38 : 28;
  doc.setFillColor(248, 250, 253);
  doc.roundedRect(W / 2, y, W / 2 - margin, boxH, 4, 4, "F");
  doc.setDrawColor(pr, pg, pb); doc.setLineWidth(0.6);
  doc.roundedRect(W / 2, y, W / 2 - margin, boxH, 4, 4, "S");
  let ty = y + 10;
  doc.setTextColor(100, 110, 130); doc.setFontSize(7.5); doc.setFont("helvetica", "normal");
  doc.text("Plan " + plan.name, W / 2 + 6, ty);
  doc.setTextColor(30, 40, 60); doc.setFont("helvetica", "bold");
  doc.text(fmt(plan.price), W - margin - 4, ty, { align: "right" });
  ty += 7;
  if (addonEntries.length > 0) {
    doc.setTextColor(100, 110, 130); doc.setFont("helvetica", "normal"); doc.setFontSize(7.5);
    doc.text("Add-ons", W / 2 + 6, ty);
    doc.setTextColor(30, 40, 60); doc.setFont("helvetica", "bold");
    doc.text(fmt(addonTotal), W - margin - 4, ty, { align: "right" });
    ty += 7;
    doc.setDrawColor(200, 210, 225); doc.line(W / 2 + 4, ty - 3, W - margin - 4, ty - 3);
  }
  doc.setTextColor(pr, pg, pb); doc.setFontSize(9); doc.setFont("helvetica", "bold");
  doc.text("TOTAL MENSUAL", W / 2 + 6, ty + 3);
  doc.setFontSize(13);
  doc.text(fmt(total), W - margin - 4, ty + 3, { align: "right" });
  doc.setTextColor(120, 130, 150); doc.setFontSize(7); doc.setFont("helvetica", "normal");
  doc.text("+ IVA según aplique", W - margin - 4, ty + 9, { align: "right" });

  y = y + boxH + 10;

  // Conditions
  doc.setFillColor(248, 250, 253);
  doc.roundedRect(margin, y, W - margin * 2, 28, 4, 4, "F");
  doc.setDrawColor(200, 210, 225); doc.roundedRect(margin, y, W - margin * 2, 28, 4, 4, "S");
  doc.setTextColor(pr, pg, pb); doc.setFontSize(7); doc.setFont("helvetica", "bold");
  doc.text("CONDICIONES COMERCIALES", margin + 6, y + 8);
  doc.setTextColor(60, 70, 90); doc.setFontSize(7); doc.setFont("helvetica", "normal");
  doc.text([
    "• Esta cotización tiene vigencia de " + (formData.vigencia || "30") + " días hábiles a partir de la fecha de emisión.",
    "• Los precios expresados no incluyen IVA (19%). Las tarifas pueden ajustarse según negociación.",
    "• La implementación inicia una vez se formalice el contrato y se realice el primer pago.",
    "• Jhamf Group S.A.S se reserva el derecho de ajustar precios con previo aviso de 30 días.",
  ], margin + 6, y + 15, { lineHeightFactor: 1.6 } as any);

  // Footer
  doc.setFillColor(0, 184, 217);
  doc.rect(0, 282, W, 15, "F");
  doc.setTextColor(0, 0, 0); doc.setFontSize(7.5); doc.setFont("helvetica", "bold");
  doc.text("Jhamf Group S.A.S — ISO 9001:2015 Certified · Jamundí, Valle · +57 302 238 8714 · www.jhamf.com", W / 2, 289, { align: "center" });
  doc.setFont("helvetica", "normal"); doc.setFontSize(6.5);
  doc.text("© 2025 Jhamf Group SAS · " + cotiNum, W / 2, 294, { align: "center" });

  doc.save("Cotizacion_ValoraSuite_" + (formData.empresa || "Cliente").replace(/\s+/g, "_") + "_" + cotiNum + ".pdf");
};
