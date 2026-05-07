import { useState, useCallback } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
type PlanKey = 'basic' | 'growth' | 'premium';

interface Plan {
  name: string;
  subtitle: string;
  price: number;
  tag: string;
  features: string[];
  color: string;
  gradient: string;
  badge?: string;
}

interface Addon {
  id: string;
  name: string;
  price: number;
  period: string;
  desc: string;
}

interface ClientForm {
  nombre: string;
  empresa: string;
  nit: string;
  email: string;
  tel: string;
  ciudad: string;
  sector: string;
  vigencia: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const PLANS: Record<PlanKey, Plan> = {
  basic: {
    name: 'Básico',
    subtitle: 'Arranque digital omnicanal',
    price: 990000,
    tag: 'Ideal para equipos pequeños de hasta 5 agentes.',
    features: [
      '5 agentes incluidos',
      '1 canal WhatsApp',
      'Bandeja unificada',
      'Respuestas automáticas',
      'Trazabilidad básica',
      'Reportes básicos',
      'Roles y permisos básicos',
      'Hosting compartido',
      'Soporte horario hábil',
      'Onboarding inicial',
    ],
    color: '#3B82F6',
    gradient: 'from-blue-600 to-blue-400',
  },
  growth: {
    name: 'Growth',
    subtitle: 'Escala tu atención con IA',
    price: 2490000,
    tag: 'Para equipos de 10 agentes con flujos IA incluidos.',
    badge: 'POPULAR',
    features: [
      '10 agentes incluidos',
      '3 canales WhatsApp',
      'Bandeja multicanal',
      '1 flujo IA automatizado',
      'Respuestas automáticas',
      'Enrutamiento inteligente',
      'Dashboard de métricas',
      'Roles por agente',
      'Hosting administrado',
      'SLA prioritario',
      'Integración API (adicional)',
      'Onboarding asistido',
    ],
    color: '#00B8D9',
    gradient: 'from-cyan-500 to-cyan-300',
  },
  premium: {
    name: 'Premium',
    subtitle: 'Omnicanal enterprise con IA avanzada',
    price: 4990000,
    tag: 'Para operaciones de alto volumen con 20 agentes y 5 flujos IA.',
    features: [
      '20 agentes incluidos',
      '5 canales WhatsApp',
      'Instagram / Facebook (adicional)',
      '5 flujos IA avanzados',
      'Agentes IA por proceso',
      'Escalamiento automático IA + humano',
      'Dashboard ejecutivo completo',
      'Dominio propio',
      'Infraestructura dedicada',
      'Integraciones API incluidas',
      'Soporte prioritario',
      'Acompañamiento técnico evolutivo',
      '10 h/mes optimización',
      '10 h/mes desarrollo',
      'Onboarding completo',
    ],
    color: '#A855F7',
    gradient: 'from-purple-600 to-purple-400',
  },
};

const ADDONS: Addon[] = [
  { id: 'bot_adicional', name: 'Bot IA adicional', price: 590000, period: '/mes', desc: 'Agente conversacional entrenado por proceso adicional.' },
  { id: 'canal_ig', name: 'Canal Instagram/Facebook', price: 390000, period: '/mes', desc: 'Integración directa con Meta Business Suite.' },
  { id: 'api', name: 'Integración API empresarial', price: 490000, period: '/implementación', desc: 'Conector con CRM, ERP u otros sistemas.' },
  { id: 'analitica', name: 'Analítica avanzada', price: 350000, period: '/mes', desc: 'BI embebido con dashboards ejecutivos personalizados.' },
  { id: 'soporte_24', name: 'Soporte 24/7', price: 290000, period: '/mes', desc: 'Atención técnica fuera de horario hábil.' },
  { id: 'onboarding_plus', name: 'Onboarding Plus', price: 890000, period: '/único', desc: 'Capacitación profunda + documentación + plan de adopción.' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmt = (n: number) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n);

// ─── Component ────────────────────────────────────────────────────────────────
export default function CotizadorPage() {
  const [selectedPlan, setSelectedPlan] = useState<PlanKey | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());
  const [form, setForm] = useState<ClientForm>({
    nombre: '', empresa: '', nit: '', email: '', tel: '', ciudad: '', sector: '', vigencia: '30',
  });

  const plan = selectedPlan ? PLANS[selectedPlan] : null;
  const activeAddons = ADDONS.filter(a => selectedAddons.has(a.id));
  const addonTotal = activeAddons.reduce((s, a) => s + a.price, 0);
  const total = (plan?.price ?? 0) + addonTotal;

  const toggleAddon = useCallback((id: string) => {
    setSelectedAddons(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const handleWhatsApp = () => {
    if (!plan) return alert('Por favor selecciona un plan primero.');
    const addonNames = activeAddons.map(a => a.name).join(', ');
    const msg = encodeURIComponent(
      `Hola Jhamf Group!\n\nEstoy interesado en el *${plan.name}* (${plan.subtitle}) para *${form.empresa || 'mi empresa'}*.\n\nTotal estimado: *${fmt(total)}/mes*\n${addonNames ? `\nAdd-ons: ${addonNames}` : ''}\n\nQuedo atento.\n\n_${form.nombre}_`
    );
    window.open(`https://wa.me/573022388714?text=${msg}`, '_blank');
  };

  const planKeys: PlanKey[] = ['basic', 'growth', 'premium'];

  return (
    <div className="min-h-screen bg-[#03040E] text-white" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Valora Suite — Plataforma Omnicanal con IA
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: "'Syne', system-ui, sans-serif", letterSpacing: '-0.02em' }}>
            Cotizador Omnicanal
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Selecciona el plan que mejor se adapte a tu equipo, agrega los módulos que necesitas y descarga tu propuesta comercial en segundos.
          </p>
        </div>
      </section>

      {/* ── Plans ── */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-center mb-10 text-white" style={{ fontFamily: "'Syne', system-ui, sans-serif" }}>
          Elige tu plan
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {planKeys.map(key => {
            const p = PLANS[key];
            const active = selectedPlan === key;
            return (
              <div
                key={key}
                onClick={() => setSelectedPlan(key)}
                className={`relative cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                  active
                    ? 'border-cyan-400 shadow-[0_0_30px_rgba(0,184,217,0.25)] scale-[1.02]'
                    : 'border-white/10 hover:border-white/30 hover:scale-[1.01]'
                } bg-[#060B1A]/70 backdrop-blur-md`}
              >
                {p.badge && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r ${p.gradient} text-white shadow`}>
                    {p.badge}
                  </span>
                )}
                <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${p.gradient} mb-4`} />
                <h3 className="text-2xl font-black mb-1" style={{ fontFamily: "'Syne', system-ui, sans-serif", color: p.color }}>
                  {p.name}
                </h3>
                <p className="text-sm text-slate-400 mb-4">{p.subtitle}</p>
                <div className="text-3xl font-black text-white mb-1">{fmt(p.price)}<span className="text-base font-normal text-slate-400">/mes</span></div>
                <p className="text-xs text-slate-500 mb-5">{p.tag}</p>
                <ul className="space-y-2 mb-6">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span style={{ color: p.color }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPlan(key)}
                  className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    active
                      ? `bg-gradient-to-r ${p.gradient} text-white shadow-lg`
                      : 'bg-white/5 text-white border border-white/15 hover:bg-white/10'
                  }`}
                >
                  {active ? '✓ Seleccionado' : 'Seleccionar'}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Add-ons ── */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-center mb-10 text-white" style={{ fontFamily: "'Syne', system-ui, sans-serif" }}>
          Módulos adicionales
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ADDONS.map(addon => {
            const active = selectedAddons.has(addon.id);
            return (
              <div
                key={addon.id}
                onClick={() => toggleAddon(addon.id)}
                className={`cursor-pointer rounded-xl border p-4 transition-all duration-200 ${
                  active
                    ? 'border-cyan-400/60 bg-cyan-500/10 shadow-[0_0_20px_rgba(0,184,217,0.15)]'
                    : 'border-white/10 bg-white/3 hover:border-white/25'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="font-semibold text-white text-sm">{addon.name}</span>
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs transition-all ${active ? 'bg-cyan-400 border-cyan-400 text-[#03040E]' : 'border-white/30 text-transparent'}`}>✓</span>
                </div>
                <p className="text-xs text-slate-400 mb-3">{addon.desc}</p>
                <div className="text-base font-bold text-cyan-400">{fmt(addon.price)}<span className="text-xs font-normal text-slate-500">{addon.period}</span></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Form + Summary ── */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-[#060B1A]/70 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6 text-white" style={{ fontFamily: "'Syne', system-ui, sans-serif" }}>Datos del cliente</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {(
                [
                  { field: 'nombre', label: 'Nombre completo', type: 'text', placeholder: 'Tu nombre' },
                  { field: 'empresa', label: 'Empresa', type: 'text', placeholder: 'Nombre de la empresa' },
                  { field: 'nit', label: 'NIT / CC', type: 'text', placeholder: '900.000.000-0' },
                  { field: 'email', label: 'Email corporativo', type: 'email', placeholder: 'correo@empresa.com' },
                  { field: 'tel', label: 'Teléfono', type: 'tel', placeholder: '+57 300 000 0000' },
                  { field: 'ciudad', label: 'Ciudad', type: 'text', placeholder: 'Bogotá' },
                ] as const
              ).map(({ field, label, type, placeholder }) => (
                <div key={field}>
                  <label className="block text-xs text-slate-400 mb-1 font-medium">{label}</label>
                  <input
                    type={type}
                    value={form[field]}
                    onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                    placeholder={placeholder}
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 transition-all"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs text-slate-400 mb-1 font-medium">Sector</label>
                <select
                  value={form.sector}
                  onChange={e => setForm(f => ({ ...f, sector: e.target.value }))}
                  className="w-full bg-[#060B1A] border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400/50 transition-all"
                >
                  <option value="">Seleccionar…</option>
                  {['Retail / Comercio', 'Salud', 'Educación', 'Finanzas / Seguros', 'Logística', 'Gobierno', 'Tecnología', 'Otro'].map(s => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1 font-medium">Vigencia oferta (días)</label>
                <select
                  value={form.vigencia}
                  onChange={e => setForm(f => ({ ...f, vigencia: e.target.value }))}
                  className="w-full bg-[#060B1A] border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400/50 transition-all"
                >
                  {['15', '30', '45', '60'].map(v => <option key={v}>{v}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-[#060B1A]/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-6 text-white" style={{ fontFamily: "'Syne', system-ui, sans-serif" }}>Resumen de cotización</h2>
            {!plan ? (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-slate-500 text-sm text-center">Selecciona un plan para ver el resumen</p>
              </div>
            ) : (
              <div className="flex-1 flex flex-col gap-4">
                {/* Plan box */}
                <div className={`rounded-xl p-4 bg-gradient-to-r ${plan.gradient} bg-opacity-20`} style={{ background: `linear-gradient(135deg, ${plan.color}22, ${plan.color}11)`, border: `1px solid ${plan.color}44` }}>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: plan.color }}>Plan seleccionado</div>
                  <div className="text-lg font-black text-white">{plan.name} — {plan.subtitle}</div>
                  <div className="text-2xl font-black text-white mt-1">{fmt(plan.price)}<span className="text-sm font-normal text-slate-300">/mes</span></div>
                </div>

                {/* Add-ons */}
                {activeAddons.length > 0 && (
                  <div className="rounded-xl border border-white/10 p-4 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Add-ons</div>
                    {activeAddons.map(a => (
                      <div key={a.id} className="flex justify-between text-sm">
                        <span className="text-slate-300">{a.name}</span>
                        <span className="text-white font-semibold">{fmt(a.price)}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Total */}
                <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/5 p-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-slate-400">Plan {plan.name}</span>
                    <span className="font-semibold text-white">{fmt(plan.price)}</span>
                  </div>
                  {activeAddons.length > 0 && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-400">Add-ons</span>
                      <span className="font-semibold text-white">{fmt(addonTotal)}</span>
                    </div>
                  )}
                  <div className="border-t border-white/10 pt-2 flex justify-between items-center">
                    <span className="font-bold text-cyan-400 text-base">Total mensual</span>
                    <span className="font-black text-xl text-white">{fmt(total)}</span>
                  </div>
                  <p className="text-xs text-slate-500 text-right mt-1">+ IVA según aplique</p>
                </div>

                {/* CTA */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <button
                    onClick={handleWhatsApp}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white font-semibold text-sm transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:-translate-y-0.5"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.138.558 4.144 1.532 5.876L0 24l6.267-1.505A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.064-1.41l-.362-.218-3.742.898.946-3.635-.236-.376A9.818 9.818 0 012.182 12c0-5.42 4.399-9.818 9.818-9.818 5.42 0 9.818 4.399 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/></svg>
                    WhatsApp
                  </button>
                  <button
                    onClick={() => alert('Funcionalidad de PDF disponible próximamente.')}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0066FF] hover:bg-[#3388FF] text-white font-semibold text-sm transition-all hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:-translate-y-0.5"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    Descargar PDF
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer note ── */}
      <footer className="max-w-6xl mx-auto px-4 pb-10 text-center text-xs text-slate-600">
        Jhamf Group S.A.S — ISO 9001:2015 Certified · Jamundí, Valle · +57 302 238 8714 · www.jhamf.com<br />
        Los precios expresados no incluyen IVA (19%). Vigencia según términos seleccionados.
      </footer>
    </div>
  );
}
