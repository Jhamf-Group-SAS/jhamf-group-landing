import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { PLANS, ADDONS, PLAN_FEATURES_PDF, fmt, type PlanKey } from "./CotizadorData";

// Carga una imagen de /public como base64 para usarla en jsPDF
const loadImageAsBase64 = (src: string): Promise<string> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext("2d")!.drawImage(img, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = reject;
    img.src = src;
  });

export const generatePDF = async (
  selectedPlan: PlanKey,
  selectedAddons: Record<string, { addon: typeof ADDONS[0], qty: number }>,
  formData: { nombre: string; empresa: string; nit: string; email: string; tel: string; ciudad: string; sector: string; vigencia: string }
) => {
  const plan = PLANS[selectedPlan];
  const addonEntries = Object.values(selectedAddons);
  const addonTotal = addonEntries.reduce((s, a) => s + (a.addon.price * a.qty), 0);
  const total = plan.price + addonTotal;

  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const W = 210, margin = 18;

  const today = new Date();
  const dateStr = today.toLocaleDateString("es-CO", { day: "2-digit", month: "long", year: "numeric" });
  const cotiNum = "JHF-" + today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + String(today.getDate()).padStart(2, "0") + "-" + String(Math.floor(Math.random() * 9000) + 1000);

  // Cargar logo
  let logoBase64: string | null = null;
  try {
    logoBase64 = await loadImageAsBase64("/jhamf-logo-white.png");
  } catch {
    // Si no carga el logo, continúa sin él
  }

  // Background
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, W, 297, "F");

  // Top Bar cyan
  doc.setFillColor(0, 184, 217);
  doc.rect(0, 0, W, 28, "F");

  // Logo en la barra superior (blanco sobre cyan) — izquierda
  if (logoBase64) {
    doc.addImage(logoBase64, "PNG", margin, 7, 44, 14);
  } else {
    doc.setTextColor(255, 255, 255); doc.setFontSize(13); doc.setFont("helvetica", "bold");
    doc.text("JHAMF GROUP", margin, 18);
  }

  // N° COTIZACIÓN — derecha de la barra cyan
  doc.setTextColor(255, 255, 255); doc.setFontSize(6.5); doc.setFont("helvetica", "bold");
  doc.text("N° COTIZACIÓN", W - margin - 2, 10, { align: "right" });
  doc.setFontSize(9);
  doc.text(cotiNum, W - margin - 2, 18, { align: "right" });
  doc.setFontSize(6.5); doc.setFont("helvetica", "normal");
  doc.text(dateStr, W - margin - 2, 24, { align: "right" });

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
      body: addonEntries.map(a => [a.addon.name + (a.addon.isQty ? ` (x${a.qty})` : ""), a.addon.period, fmt(a.addon.price * a.qty)]),
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
  // Verificar espacio: si totals + condiciones + footer no caben, nueva página
  const condH = 38; // Condiciones comerciales height
  const footerY = 282;
  const neededSpace = boxH + 10 + condH + 10 + 15; // totals + gap + condiciones + gap + footer
  if (y + neededSpace > footerY) {
    doc.addPage();
    y = 20;
  }

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
  const condBoxH = 28;
  doc.setFillColor(248, 250, 253);
  doc.roundedRect(margin, y, W - margin * 2, condBoxH, 4, 4, "F");
  doc.setDrawColor(200, 210, 225); doc.roundedRect(margin, y, W - margin * 2, condBoxH, 4, 4, "S");
  doc.setTextColor(pr, pg, pb); doc.setFontSize(7); doc.setFont("helvetica", "bold");
  doc.text("CONDICIONES COMERCIALES", margin + 6, y + 8);
  doc.setTextColor(60, 70, 90); doc.setFontSize(7); doc.setFont("helvetica", "normal");
  doc.text([
    "• Esta cotización tiene vigencia de " + (formData.vigencia || "30") + " días hábiles a partir de la fecha de emisión.",
    "• Los precios expresados no incluyen IVA (19%). Las tarifas pueden ajustarse según negociación.",
    "• La implementación inicia una vez se formalice el contrato y se realice el primer pago.",
    "• Jhamf Group S.A.S se reserva el derecho de ajustar precios con previo aviso de 30 días.",
  ], margin + 6, y + 15, { lineHeightFactor: 1.6 } as any);

  // Footer — siempre al fondo de la última página
  const pageH = doc.internal.pageSize.getHeight();
  doc.setFillColor(0, 184, 217);
  doc.rect(0, pageH - 18, W, 18, "F");

  // Línea 1: ISO badge (izquierda) | contacto (centro) | N° cotización (derecha)
  doc.setTextColor(255, 255, 255); doc.setFontSize(7.5); doc.setFont("helvetica", "bold");
  doc.text("✦ ISO 9001:2015 CERTIFIED · COMPECER", margin, pageH - 10);
  doc.text("Jhamf Group S.A.S · Jamundí, Valle · +57 302 238 8714 · www.jhamf.com", W / 2, pageH - 10, { align: "center" });
  doc.text(cotiNum, W - margin, pageH - 10, { align: "right" });

  // Línea 2: copyright
  doc.setFont("helvetica", "normal"); doc.setFontSize(6); doc.setTextColor(0, 60, 80);
  doc.text("© 2025 Jhamf Group SAS · Todos los derechos reservados", W / 2, pageH - 4, { align: "center" });

  doc.save("Cotizacion_ValoraSuite_" + (formData.empresa || "Cliente").replace(/\s+/g, "_") + "_" + cotiNum + ".pdf");
};
