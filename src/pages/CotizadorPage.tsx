import React, { useState } from "react";
import { Check, Info, FileText, Send, Phone, MapPin, Mail, Building, User, Calendar, Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { generatePDF } from "./CotizadorPDF";
import { PLANS, ADDONS, fmt, type PlanKey } from "./CotizadorData";

export default function CotizadorPage() {
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>("growth");
  const [selectedAddons, setSelectedAddons] = useState<Record<string, typeof ADDONS[0]>>({});
  const [formData, setFormData] = useState({ nombre: "", empresa: "", nit: "", email: "", tel: "", ciudad: "", sector: "", vigencia: "30" });

  const toggleAddon = (addon: typeof ADDONS[0]) => {
    setSelectedAddons(prev => {
      const next = { ...prev };
      if (next[addon.id]) delete next[addon.id];
      else next[addon.id] = addon;
      return next;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const plan = PLANS[selectedPlan];
  const addonEntries = Object.values(selectedAddons);
  const addonTotal = addonEntries.reduce((s, a) => s + a.price, 0);
  const total = plan.price + addonTotal;

  const handleWhatsApp = () => {
    if (!formData.empresa) {
      alert(t("quoter.errors.empresa_required", "Por favor ingresa el nombre de la empresa."));
      return;
    }
    const msg = encodeURIComponent(
      `Hola Jhamf Group!\n\nEstoy interesado en el *${plan.name}* (${plan.subtitle}) para *${formData.empresa}*.\n\nTotal estimado: *${fmt(total)}/mes*\n${addonEntries.length ? "\nAdd-ons: " + addonEntries.map(a => a.name).join(", ") : ""}\n\nQuedo atento para continuar con la propuesta.\n\n_${formData.nombre}_`
    );
    window.open("https://wa.me/573022388714?text=" + msg, "_blank");
  };

  const InputField = ({ icon: Icon, label, name, type = "text", required = false, placeholder = "" }: any) => (
    <div className="space-y-1">
      <label htmlFor={name} className="text-xs font-mono tracking-widest text-neutral-400 uppercase">{label} {required && "*"}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-4 w-4 text-neutral-500" />
        </div>
        <input
          type={type} id={name} name={name} required={required} placeholder={placeholder}
          value={(formData as any)[name]} onChange={handleInputChange}
          className="block w-full pl-10 pr-3 py-3 bg-neutral-900 border border-neutral-800 rounded-sm focus:border-white focus:ring-1 focus:ring-white transition-colors text-white placeholder-neutral-600 font-sans"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 font-sans selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <header className="mb-12 border-b border-neutral-800 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-2 w-2 bg-white animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">{t("quoter.eyebrow", "OMNICANALIDAD IA")}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 uppercase">
            {t("quoter.title", "Configurador")} <br className="hidden md:block"/> <span className="text-neutral-500">{t("quoter.subtitle", "Valora Suite")}</span>
          </h1>
          <p className="text-neutral-400 max-w-2xl text-lg">{t("quoter.description", "Diseña el entorno de atención perfecto para tu operación.")}</p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="xl:col-span-8 space-y-16">
            
            <section aria-labelledby="plans-heading">
              <h2 id="plans-heading" className="text-xl font-bold mb-6 flex items-center gap-2 uppercase tracking-wide">
                <span className="text-neutral-500">01.</span> {t("quoter.sections.plans", "Selecciona un Plan")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(Object.entries(PLANS) as [PlanKey, typeof PLANS[PlanKey]][]).map(([key, p]) => {
                  const isSelected = selectedPlan === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedPlan(key)}
                      role="radio"
                      aria-checked={isSelected}
                      className={`relative text-left p-6 flex flex-col h-full border transition-all duration-300 ${isSelected ? "border-white bg-neutral-900 shadow-[0_0_30px_rgba(255,255,255,0.05)]" : "border-neutral-800 bg-black hover:border-neutral-600"}`}
                    >
                      {p.badge && (
                        <span className="absolute -top-3 left-6 px-3 py-1 bg-white text-black text-xs font-bold tracking-widest uppercase">
                          {t(`quoter.badges.${p.badge.toLowerCase()}`, p.badge)}
                        </span>
                      )}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold uppercase tracking-tight">{p.name}</h3>
                        <p className="text-sm text-neutral-400 mt-1 h-10">{p.subtitle}</p>
                      </div>
                      <div className="mb-6">
                        <span className="text-3xl font-bold">{fmt(p.price)}</span>
                        <span className="text-neutral-500 text-sm">/mes</span>
                      </div>
                      <ul className="space-y-3 mb-8 flex-grow">
                        {p.features.slice(0, 5).map((feat, i) => (
                          <li key={i} className="flex items-start text-sm text-neutral-300">
                            <Check className={`h-4 w-4 mr-3 shrink-0 ${isSelected ? "text-white" : "text-neutral-600"}`} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      <div className={`mt-auto py-3 text-center border text-sm font-bold uppercase tracking-wider transition-colors ${isSelected ? "bg-white text-black border-white" : "bg-transparent text-white border-neutral-700"}`}>
                        {isSelected ? t("quoter.actions.selected", "Seleccionado") : t("quoter.actions.select", "Elegir Plan")}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section aria-labelledby="addons-heading">
              <h2 id="addons-heading" className="text-xl font-bold mb-6 flex items-center gap-2 uppercase tracking-wide">
                <span className="text-neutral-500">02.</span> {t("quoter.sections.addons", "Potenciadores (Opcional)")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ADDONS.map(addon => {
                  const isSelected = !!selectedAddons[addon.id];
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon)}
                      role="switch"
                      aria-checked={isSelected}
                      className={`p-5 text-left border flex flex-col justify-between transition-colors ${isSelected ? "border-white bg-neutral-900" : "border-neutral-800 bg-black hover:border-neutral-700"}`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-lg">{addon.name}</h3>
                        <div className={`p-1.5 rounded-full ${isSelected ? "bg-white text-black" : "bg-neutral-800 text-neutral-400"}`}>
                          {isSelected ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </div>
                      </div>
                      <p className="text-sm text-neutral-400 mb-4 flex-grow">{addon.desc}</p>
                      <div className="text-sm">
                        <span className="font-bold text-white">{fmt(addon.price)}</span>
                        <span className="text-neutral-500">{addon.period}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section aria-labelledby="form-heading">
              <h2 id="form-heading" className="text-xl font-bold mb-6 flex items-center gap-2 uppercase tracking-wide">
                <span className="text-neutral-500">03.</span> {t("quoter.sections.client", "Datos Comerciales")}
              </h2>
              <div className="bg-neutral-950 border border-neutral-800 p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField icon={Building} label={t("quoter.form.company", "Empresa")} name="empresa" required />
                  <InputField icon={User} label={t("quoter.form.name", "Nombre de Contacto")} name="nombre" required />
                  <InputField icon={FileText} label={t("quoter.form.nit", "NIT / Documento")} name="nit" />
                  <InputField icon={Mail} label={t("quoter.form.email", "Correo Electrónico")} name="email" type="email" />
                  <InputField icon={Phone} label={t("quoter.form.phone", "Teléfono")} name="tel" type="tel" />
                  <InputField icon={MapPin} label={t("quoter.form.city", "Ciudad")} name="ciudad" />
                  <div className="space-y-1">
                    <label htmlFor="sector" className="text-xs font-mono tracking-widest text-neutral-400 uppercase">{t("quoter.form.sector", "Sector")}</label>
                    <select id="sector" name="sector" value={formData.sector} onChange={handleInputChange} className="block w-full px-3 py-3 bg-neutral-900 border border-neutral-800 rounded-sm focus:border-white focus:ring-1 focus:ring-white transition-colors text-white">
                      <option value="">{t("quoter.form.sector_placeholder", "Selecciona un sector")}</option>
                      <option value="Salud">{t("quoter.form.sectors.health", "Salud")}</option>
                      <option value="Inmobiliario">{t("quoter.form.sectors.realestate", "Inmobiliario")}</option>
                      <option value="Retail">{t("quoter.form.sectors.retail", "Retail / Comercio")}</option>
                      <option value="Servicios">{t("quoter.form.sectors.services", "Servicios")}</option>
                      <option value="Otro">{t("quoter.form.sectors.other", "Otro")}</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="vigencia" className="text-xs font-mono tracking-widest text-neutral-400 uppercase">{t("quoter.form.validity", "Vigencia (Días)")}</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Calendar className="h-4 w-4 text-neutral-500" /></div>
                      <input type="number" id="vigencia" name="vigencia" value={formData.vigencia} onChange={handleInputChange} className="block w-full pl-10 pr-3 py-3 bg-neutral-900 border border-neutral-800 rounded-sm focus:border-white text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="xl:col-span-4 relative order-first xl:order-last mb-8 xl:mb-0">
            <div className="sticky top-24 bg-neutral-950 border border-neutral-800 p-6 sm:p-8 flex flex-col shadow-2xl">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
                <Info className="h-5 w-5 text-neutral-400" /> {t("quoter.summary.title", "Resumen de Cotización")}
              </h3>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex justify-between items-start pb-4 border-b border-neutral-800">
                  <div>
                    <p className="text-sm text-neutral-400 uppercase tracking-wider">{t("quoter.summary.plan", "Plan")}</p>
                    <p className="font-bold text-lg">{plan.name}</p>
                  </div>
                  <p className="font-mono text-lg">{fmt(plan.price)}</p>
                </div>

                {addonEntries.length > 0 && (
                  <div className="pb-4 border-b border-neutral-800">
                    <p className="text-sm text-neutral-400 uppercase tracking-wider mb-3">{t("quoter.summary.addons", "Add-ons")}</p>
                    <ul className="space-y-2">
                      {addonEntries.map(a => (
                        <li key={a.id} className="flex justify-between items-center text-sm">
                          <span className="text-neutral-300">{a.name}</span>
                          <span className="font-mono">{fmt(a.price)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 flex justify-between items-end">
                  <div>
                    <p className="text-sm text-neutral-400 uppercase tracking-wider">{t("quoter.summary.monthly", "Total Mensual")}</p>
                    <p className="text-xs text-neutral-500 mt-1">{t("quoter.summary.taxes", "No incluye IVA")}</p>
                  </div>
                  <p className="text-3xl font-bold font-mono tracking-tighter">{fmt(total)}</p>
                </div>
              </div>

              <div className="space-y-3 mt-auto">
                <button
                  onClick={() => generatePDF(selectedPlan, selectedAddons, formData)}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 transition-colors uppercase tracking-widest text-sm font-bold"
                >
                  <FileText className="h-4 w-4" /> {t("quoter.actions.pdf", "Descargar PDF")}
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-white text-black hover:bg-neutral-200 transition-colors uppercase tracking-widest text-sm font-bold"
                >
                  <Send className="h-4 w-4" /> {t("quoter.actions.whatsapp", "Enviar a Asesor")}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
