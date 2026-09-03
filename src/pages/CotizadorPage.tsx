import React, { useState } from "react";
import { Check, Info, FileText, Send, Phone, MapPin, Mail, Building, User, Calendar, Plus, Minus, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { generatePDF } from "./CotizadorPDF";
import { PLANS, ADDONS, fmt, type PlanKey } from "./CotizadorData";

const COUNTRY_CODES = [
  { code: "+57",  flag: "🇨🇴", label: "CO" },
  { code: "+1",   flag: "🇺🇸", label: "US" },
  { code: "+52",  flag: "🇲🇽", label: "MX" },
  { code: "+54",  flag: "🇦🇷", label: "AR" },
  { code: "+56",  flag: "🇨🇱", label: "CL" },
  { code: "+51",  flag: "🇵🇪", label: "PE" },
  { code: "+58",  flag: "🇻🇪", label: "VE" },
  { code: "+593", flag: "🇪🇨", label: "EC" },
  { code: "+34",  flag: "🇪🇸", label: "ES" },
];

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const isValidPhone = (v: string) => /^[0-9]{6,15}$/.test(v.replace(/[\s\-().]/g, ""));

// ─── InputField fuera del componente padre ────────────────────────────────────
// IMPORTANTE: si InputField se define DENTRO de CotizadorPage, React genera una
// nueva referencia de componente en cada render → desmonta/monta el <input> →
// el campo pierde foco con cada tecla pulsada.
const InputField = ({
  icon: Icon,
  label,
  name,
  type = "text",
  required = false,
  placeholder = "",
  value,
  onChange,
  error,
  inputMode,
}: {
  icon: React.ElementType;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) => (
  <div className={`space-y-1 ${error ? "animate-shake" : ""}`}>
    <label htmlFor={name} className="text-xs font-mono tracking-widest text-navy dark:text-neutral-400 uppercase">
      {label} {required && <span className="text-red-500 dark:text-red-400">*</span>}
    </label>
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className={`h-4 w-4 transition-colors duration-200 ${error ? "text-red-500 dark:text-red-400" : "text-neutral-400 dark:text-neutral-500 group-focus-within:text-electric dark:group-focus-within:text-electric"}`} />
      </div>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        inputMode={inputMode}
        className={`block w-full pl-10 pr-3 py-3 bg-white dark:bg-neutral-900 border rounded-sm focus:outline-none focus:ring-2 focus:ring-electric/20 transition-all duration-200 text-navy dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 font-sans ${
          error
            ? "border-red-400 focus:border-red-500 dark:border-red-500 dark:focus:border-red-400"
            : "border-neutral-300 focus:border-electric dark:border-neutral-800 dark:focus:border-electric"
        }`}
      />
    </div>
    {error && (
      <p className="flex items-center gap-1 text-xs text-red-500 dark:text-red-400 mt-1 animate-fade-in-up" style={{ animationDuration: '250ms' }}>
        <AlertCircle className="h-3 w-3 shrink-0" /> {error}
      </p>
    )}
  </div>
);

export default function CotizadorPage() {
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>("growth");
  const [selectedAddons, setSelectedAddons] = useState<Record<string, { addon: typeof ADDONS[0], qty: number }>>({});
  const [formData, setFormData] = useState({ nombre: "", empresa: "", nit: "", email: "", tel: "", ciudad: "", sector: "", vigencia: "30" });
  const [countryCode, setCountryCode] = useState("+57");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const toggleAddon = (addon: typeof ADDONS[0]) => {
    if (addon.isQty) return;
    setSelectedAddons(prev => {
      const next = { ...prev };
      if (next[addon.id]) delete next[addon.id];
      else next[addon.id] = { addon, qty: 1 };
      return next;
    });
  };

  const updateQty = (addon: typeof ADDONS[0], delta: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedAddons(prev => {
      const next = { ...prev };
      const currentQty = next[addon.id]?.qty || 0;
      const rawQty = Math.max(0, currentQty + delta);
      const newQty = addon.maxQty !== undefined ? Math.min(rawQty, addon.maxQty) : rawQty;
      if (newQty === 0) delete next[addon.id];
      else next[addon.id] = { addon, qty: newQty };
      return next;
    });
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const sanitized = name === "nit" ? value.replace(/\D/g, "") : value;
    setFormData(prev => ({ ...prev, [name]: sanitized }));
    if (submitted) validateField(name, sanitized);
  };

  const validateField = (name: string, value: string) => {
    setErrors(prev => {
      const next = { ...prev };
      if (name === "email") {
        if (!value.trim()) next.email = "El correo es obligatorio";
        else if (!isValidEmail(value)) next.email = "Ingresa un correo válido (ej: nombre@empresa.com)";
        else delete next.email;
      } else if (name === "tel") {
        if (!value.trim()) next.tel = "El teléfono es obligatorio";
        else if (!isValidPhone(value)) next.tel = "Solo números, mínimo 6 dígitos";
        else delete next.tel;
      } else if (["empresa", "nombre", "nit", "ciudad"].includes(name)) {
        if (!value.trim()) next[name] = "Este campo es obligatorio";
        else delete next[name];
      } else if (name === "sector") {
        if (!value) next.sector = "Selecciona un sector";
        else delete next.sector;
      }
      return next;
    });
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.empresa.trim()) newErrors.empresa = "Este campo es obligatorio";
    if (!formData.nombre.trim())  newErrors.nombre  = "Este campo es obligatorio";
    if (!formData.nit.trim())     newErrors.nit     = "Este campo es obligatorio";
    if (!formData.ciudad.trim())  newErrors.ciudad  = "Este campo es obligatorio";
    if (!formData.sector)         newErrors.sector  = "Selecciona un sector";
    if (!formData.email.trim())          newErrors.email = "El correo es obligatorio";
    else if (!isValidEmail(formData.email)) newErrors.email = "Ingresa un correo válido (ej: nombre@empresa.com)";
    if (!formData.tel.trim())            newErrors.tel = "El teléfono es obligatorio";
    else if (!isValidPhone(formData.tel))   newErrors.tel = "Solo números, mínimo 6 dígitos";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const plan = PLANS[selectedPlan];
  const addonEntries = Object.values(selectedAddons);
  const addonTotal = addonEntries.reduce((s, a) => s + (a.addon.price * a.qty), 0);
  const total = plan.price + addonTotal;

  const handleWhatsApp = () => {
    setSubmitted(true);
    if (!validate()) {
      document.getElementById("form-heading")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const fullPhone = countryCode + " " + formData.tel;
    const msg = encodeURIComponent(
      `Hola Jhamf Group!\n\nEstoy interesado en el *${plan.name}* (${plan.subtitle}) para *${formData.empresa}*.\n\nTotal estimado: *${fmt(total)}/mes*\n${addonEntries.length ? "\nAdd-ons: " + addonEntries.map(a => `${a.addon.name}${a.addon.isQty ? ` (x${a.qty})` : ''}`).join(", ") : ""}\n\nQuedo atento para continuar con la propuesta.\n\n_${formData.nombre}_ | ${fullPhone}`
    );
    window.open("https://wa.me/573022388714?text=" + msg, "_blank");
  };


  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-void dark:text-white pt-24 pb-20 font-sans selection:bg-electric selection:text-white dark:selection:bg-electric dark:selection:text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <header className="mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-8 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-2 w-2 bg-electric dark:bg-electric animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-navy dark:text-neutral-400 uppercase">{t("quoter.eyebrow", "OMNICANALIDAD IA")}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 uppercase text-navy dark:text-white">
            {t("quoter.title", "Cotizador")} <br className="hidden md:block"/> <span className="text-electric">{t("quoter.subtitle", "Valora Suite")}</span>
          </h1>
          <p className="text-navy dark:text-neutral-400 max-w-2xl text-lg">{t("quoter.description", "Diseña el entorno de atención perfecto para tu operación.")}</p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="xl:col-span-8 space-y-16">
            
            <section aria-labelledby="plans-heading" className="animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
              <h2 id="plans-heading" className="text-xl font-bold mb-6 flex items-center gap-2 uppercase tracking-wide text-navy dark:text-white">
                <span className="text-electric">01.</span> {t("quoter.sections.plans", "Selecciona un Plan")}
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
                      className={`relative text-left p-6 flex flex-col h-full border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isSelected ? "border-electric bg-white shadow-xl dark:border-electric dark:bg-navy-mid dark:shadow-[0_0_30px_rgba(0,102,255,0.15)] -translate-y-1" : "border-neutral-200 bg-white dark:border-neutral-800 dark:bg-void dark:hover:border-neutral-600"}`}
                    >
                      {p.badge && (
                        <span className="absolute -top-3 left-6 px-3 py-1 bg-electric text-white text-xs font-bold tracking-widest uppercase">
                          {t(`quoter.badges.${p.badge.toLowerCase()}`, p.badge)}
                        </span>
                      )}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold uppercase tracking-tight text-navy dark:text-white">{p.name}</h3>
                        <p className="text-sm text-navy dark:text-neutral-400 mt-1 h-10">{p.subtitle}</p>
                      </div>
                      <div className="mb-6">
                        <span className="text-3xl font-bold">{fmt(p.price)}</span>
                        <span className="text-navy text-sm">/mes</span>
                      </div>
                      <ul className="space-y-3 mb-8 flex-grow">
                        {p.features.slice(0, 5).map((feat, i) => (
                          <li key={i} className="flex items-start text-sm text-navy dark:text-neutral-300">
                            <Check className={`h-4 w-4 mr-3 shrink-0 transition-colors ${isSelected ? "text-signal" : "text-neutral-400 dark:text-neutral-600"}`} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      <div className={`mt-auto py-3 text-center border text-sm font-bold uppercase tracking-wider transition-colors ${isSelected ? "bg-electric text-white border-electric" : "bg-transparent text-neutral-900 border-neutral-300 dark:text-white dark:border-neutral-700"}`}>
                        {isSelected ? t("quoter.actions.selected", "Seleccionado") : t("quoter.actions.select", "Elegir Plan")}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section aria-labelledby="addons-heading" className="animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              <h2 id="addons-heading" className="text-xl font-bold mb-6 flex items-center gap-2 uppercase tracking-wide text-navy dark:text-white">
                <span className="text-electric">02.</span> {t("quoter.sections.addons", "Servicios Adicionales (Opcional)")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ADDONS.map(addon => {
                  const qty = selectedAddons[addon.id]?.qty || 0;
                  const isSelected = qty > 0;
                  return (
                    <div
                      key={addon.id}
                      onClick={() => !addon.isQty && toggleAddon(addon)}
                      role={addon.isQty ? "region" : "switch"}
                      aria-checked={addon.isQty ? undefined : isSelected}
                      className={`p-5 text-left border flex flex-col justify-between transition-all duration-300 hover:shadow-md ${isSelected ? "border-electric bg-neutral-50 dark:border-electric dark:bg-navy-mid" : "border-neutral-200 bg-white hover:border-neutral-400 dark:border-neutral-800 dark:bg-void dark:hover:border-neutral-700"} ${!addon.isQty && "cursor-pointer"}`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-lg text-navy dark:text-white">{addon.name}</h3>
                        {!addon.isQty && (
                          <div className={`p-1.5 rounded-full ${isSelected ? "bg-electric text-white dark:bg-electric dark:text-white" : "bg-neutral-100 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-400"}`}>
                            {isSelected ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-navy dark:text-neutral-400 mb-4 flex-grow">{addon.desc}</p>
                      
                      <div className="flex justify-between items-center mt-2">
                        <div className="text-sm">
                          <span className="font-bold text-neutral-900 dark:text-white">{fmt(addon.price)}</span>
                          <span className="text-navy">{addon.period}</span>
                        </div>
                        
                        {addon.isQty && (
                          <div className="flex items-center gap-2 bg-white border border-neutral-200 dark:bg-neutral-950 dark:border-neutral-800 rounded p-1">
                            <button onClick={(e) => updateQty(addon, -1, e)} className="p-1 hover:text-black dark:hover:text-white text-neutral-400 disabled:opacity-30 disabled:cursor-not-allowed" disabled={qty === 0}><Minus className="h-3 w-3" /></button>
                            <span className="text-sm font-mono w-4 text-center">{qty}</span>
                            <button onClick={(e) => updateQty(addon, 1, e)} className="p-1 hover:text-black dark:hover:text-white text-neutral-400 disabled:opacity-30 disabled:cursor-not-allowed" disabled={addon.maxQty !== undefined && qty >= addon.maxQty}><Plus className="h-3 w-3" /></button>
                            {addon.maxQty !== undefined && qty >= addon.maxQty && (
                              <span className="text-xs font-mono text-electric ml-1">MÁX</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section aria-labelledby="form-heading" className="animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
              <h2 id="form-heading" className="text-xl font-bold mb-6 flex items-center gap-2 uppercase tracking-wide text-navy dark:text-white">
                <span className="text-electric">03.</span> {t("quoter.sections.client", "Tus Datos")}
              </h2>
              <div className="bg-white border border-neutral-200 dark:bg-navy dark:border-neutral-800 p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField icon={Building} label={t("quoter.form.company", "Nombre de la Empresa")} name="empresa" required value={formData.empresa} onChange={handleInputChange} error={errors.empresa} />
                  <InputField icon={User} label={t("quoter.form.name", "Tu Nombre")} name="nombre" required value={formData.nombre} onChange={handleInputChange} error={errors.nombre} />
                  <InputField icon={FileText} label={t("quoter.form.nit", "NIT / Documento")} name="nit" required value={formData.nit} onChange={handleInputChange} error={errors.nit} inputMode="numeric" />
                  <InputField icon={Mail} label={t("quoter.form.email", "Correo Electrónico")} name="email" type="email" required value={formData.email} onChange={handleInputChange} error={errors.email} />
                  {/* Teléfono con indicativo de país */}
                  <div className={`space-y-1 ${errors.tel ? "animate-shake" : ""}`}>
                    <label htmlFor="tel" className="text-xs font-mono tracking-widest text-navy dark:text-neutral-400 uppercase">
                      {t("quoter.form.phone", "Teléfono")} <span className="text-red-500 dark:text-red-400">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={countryCode}
                        onChange={e => setCountryCode(e.target.value)}
                        aria-label="Indicativo de país"
                        className="bg-white border border-neutral-300 dark:bg-neutral-900 dark:border-neutral-800 text-navy dark:text-white text-sm rounded-sm px-2 py-3 focus:outline-none focus:ring-2 focus:ring-electric/20 focus:border-electric dark:focus:border-electric transition-colors shrink-0 font-sans"
                      >
                        {COUNTRY_CODES.map(c => (
                          <option key={c.code} value={c.code}>{c.flag} {c.code} {c.label}</option>
                        ))}
                      </select>
                      <div className="relative flex-1 group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className={`h-4 w-4 transition-colors duration-200 ${errors.tel ? "text-red-500 dark:text-red-400" : "text-neutral-400 dark:text-neutral-500 group-focus-within:text-electric dark:group-focus-within:text-electric"}`} />
                        </div>
                        <input
                          type="tel"
                          id="tel"
                          name="tel"
                          required
                          placeholder="3001234567"
                          value={formData.tel}
                          onChange={handleInputChange}
                          className={`block w-full pl-10 pr-3 py-3 bg-white dark:bg-neutral-900 border rounded-sm focus:outline-none focus:ring-2 focus:ring-electric/20 transition-all duration-200 text-navy dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 font-sans ${
                            errors.tel
                              ? "border-red-400 focus:border-red-500 dark:border-red-500 dark:focus:border-red-400"
                              : "border-neutral-300 focus:border-electric dark:border-neutral-800 dark:focus:border-electric"
                          }`}
                        />
                      </div>
                    </div>
                    {errors.tel && (
                      <p className="flex items-center gap-1 text-xs text-red-500 dark:text-red-400 mt-1 animate-fade-in-up" style={{ animationDuration: '250ms' }}>
                        <AlertCircle className="h-3 w-3 shrink-0" /> {errors.tel}
                      </p>
                    )}
                  </div>
                  <InputField icon={MapPin} label={t("quoter.form.city", "Ciudad")} name="ciudad" required value={formData.ciudad} onChange={handleInputChange} error={errors.ciudad} />
                  <div className={`space-y-1 ${errors.sector ? "animate-shake" : ""}`}>
                    <label htmlFor="sector" className="text-xs font-mono tracking-widest text-navy dark:text-neutral-400 uppercase">
                      {t("quoter.form.sector", "Sector")} <span className="text-red-500 dark:text-red-400">*</span>
                    </label>
                    <select
                      id="sector" name="sector" required
                      value={formData.sector}
                      onChange={e => { handleInputChange(e); if (submitted) validateField("sector", e.target.value); }}
                      className={`block w-full px-3 py-3 bg-white border dark:bg-neutral-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-electric/20 transition-all duration-200 text-navy dark:text-white font-sans ${
                        errors.sector ? "border-red-400 focus:border-red-500 dark:border-red-500 dark:focus:border-red-400" : "border-neutral-300 focus:border-electric dark:border-neutral-800 dark:focus:border-electric"
                      }`}>
                      <option value="">{t("quoter.form.sector_placeholder", "Selecciona un sector")}</option>
                      <option value="Salud">{t("quoter.form.sectors.health", "Salud")}</option>
                      <option value="Inmobiliario">{t("quoter.form.sectors.realestate", "Inmobiliario")}</option>
                      <option value="Retail">{t("quoter.form.sectors.retail", "Retail / Comercio")}</option>
                      <option value="Servicios">{t("quoter.form.sectors.services", "Servicios")}</option>
                      <option value="Otro">{t("quoter.form.sectors.other", "Otro")}</option>
                    </select>
                    {errors.sector && (
                      <p className="flex items-center gap-1 text-xs text-red-500 dark:text-red-400 mt-1 animate-fade-in-up" style={{ animationDuration: '250ms' }}>
                        <AlertCircle className="h-3 w-3 shrink-0" /> {errors.sector}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="vigencia" className="text-xs font-mono tracking-widest text-navy dark:text-neutral-400 uppercase">{t("quoter.form.validity", "Vigencia (Días)")}</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Calendar className="h-4 w-4 transition-colors duration-200 text-neutral-400 dark:text-neutral-500 group-focus-within:text-electric dark:group-focus-within:text-electric" /></div>
                      <input type="number" id="vigencia" name="vigencia" value={formData.vigencia} onChange={handleInputChange} className="block w-full pl-10 pr-3 py-3 bg-white border border-neutral-300 dark:bg-neutral-900 dark:border-neutral-800 rounded-sm focus:outline-none focus:ring-2 focus:ring-electric/20 focus:border-electric dark:focus:border-electric transition-all duration-200 text-navy dark:text-white font-sans" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="xl:col-span-4 relative order-first xl:order-last mb-8 xl:mb-0 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            <div className="sticky top-24 bg-white border border-neutral-200 dark:bg-navy dark:border-neutral-800 p-6 sm:p-8 flex flex-col shadow-2xl">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-2 text-navy dark:text-white">
                <Info className="h-5 w-5 text-navy dark:text-neutral-400" /> {t("quoter.summary.title", "Tu Cotización")}
              </h3>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex justify-between items-start pb-4 border-b border-neutral-200 dark:border-neutral-800">
                  <div>
                    <p className="text-sm text-navy dark:text-neutral-400 uppercase tracking-wider">{t("quoter.summary.plan", "Plan")}</p>
                    <p className="font-bold text-lg">{plan.name}</p>
                  </div>
                  <p className="font-mono text-lg">{fmt(plan.price)}</p>
                </div>

                {addonEntries.length > 0 && (
                  <div className="pb-4 border-b border-neutral-200 dark:border-neutral-800">
                    <p className="text-sm text-navy dark:text-neutral-400 uppercase tracking-wider mb-3">{t("quoter.summary.addons", "Servicios Adicionales")}</p>
                    <ul className="space-y-2">
                      {addonEntries.map(a => (
                        <li key={a.addon.id} className="flex justify-between items-center text-sm">
                          <span className="text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                            {a.addon.name}
                            {a.addon.isQty && <span className="bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-xs text-neutral-900 dark:text-white">x{a.qty}</span>}
                          </span>
                          <span className="font-mono">{fmt(a.addon.price * a.qty)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 flex justify-between items-end">
                  <div>
                    <p className="text-sm text-navy dark:text-neutral-400 uppercase tracking-wider">{t("quoter.summary.monthly", "Total Mensual")}</p>
                    <p className="text-xs text-navy mt-1">{t("quoter.summary.taxes", "No incluye IVA")}</p>
                  </div>
                  <p key={total} className="text-3xl font-bold font-mono tracking-tighter" style={{ animation: 'pulse 0.4s ease-out 2' }}>{fmt(total)}</p>
                </div>
              </div>

              <div className="space-y-3 mt-auto">
                <button
                  onClick={() => {
                    setSubmitted(true);
                    if (!validate()) {
                      document.getElementById("form-heading")?.scrollIntoView({ behavior: "smooth", block: "start" });
                      return;
                    }
                    generatePDF(selectedPlan, selectedAddons, { ...formData, tel: countryCode + " " + formData.tel });
                  }}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-electric hover:bg-electric-dim text-white transition-colors uppercase tracking-widest text-sm font-bold"
                >
                  <FileText className="h-4 w-4" /> {t("quoter.actions.pdf", "Descargar PDF")}
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-signal text-black hover:bg-[#00cc6c] transition-colors uppercase tracking-widest text-sm font-bold"
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
