export type PlanKey = "basic" | "growth" | "premium";
export interface Plan { name: string; subtitle: string; price: number; tag: string; features: string[]; color: string; gradient: string; planColors: [number,number,number]; badge?: string; }
export interface Addon { id: string; name: string; price: number; period: string; desc: string; isQty?: boolean; unit?: string; }

export const PLANS: Record<PlanKey, Plan> = {
  basic: { name:"Básico", subtitle:"Arranque digital omnicanal", price:990000, tag:"Ideal para equipos pequeños de hasta 5 agentes.", planColors:[59,130,246], color:"#3B82F6", gradient:"from-blue-600 to-blue-400", features:["5 agentes incluidos","1 canal WhatsApp","Bandeja unificada","Respuestas automáticas","Trazabilidad básica","Reportes básicos","Roles y permisos básicos","Hosting compartido","Soporte horario hábil","Onboarding inicial"] },
  growth: { name:"Growth", subtitle:"Escala tu atención con IA", price:1990000, tag:"Para equipos de 10 agentes con flujos IA incluidos.", badge:"POPULAR", planColors:[0,184,217], color:"#00B8D9", gradient:"from-cyan-500 to-cyan-300", features:["10 agentes incluidos","3 canales WhatsApp","Bandeja multicanal","1 flujo IA automatizado","Respuestas automáticas","Enrutamiento inteligente","Dashboard de métricas","Roles por agente","Hosting administrado","SLA prioritario","Integración API (adicional)","Onboarding asistido"] },
  premium: { name:"Premium", subtitle:"Omnicanal enterprise con IA avanzada", price:2990000, tag:"Para operaciones de alto volumen con 20 agentes y 5 flujos IA.", planColors:[168,85,247], color:"#A855F7", gradient:"from-purple-600 to-purple-400", features:["20 agentes incluidos","5 canales WhatsApp","Instagram / Facebook (adicional)","5 flujos IA avanzados","Agentes IA por proceso","Escalamiento automático IA + humano","Dashboard ejecutivo completo","Dominio propio","Infraestructura dedicada","Integraciones API incluidas","Soporte prioritario","Acompañamiento técnico evolutivo","10 h/mes optimización","10 h/mes desarrollo","Onboarding completo"] }
};

export const ADDONS: Addon[] = [
  { id:"canal_wa", name:"Canal WhatsApp adicional", price:250000, period:"/mes c/u", desc:"Amplía cobertura con nuevas líneas activas.", isQty:true, unit:"canales" },
  { id:"agente", name:"Agente adicional", price:90000, period:"/mes c/u", desc:"Añade capacidad de atención por agente.", isQty:true, unit:"agentes" },
  { id:"flujo_ia", name:"Flujo IA adicional", price:400000, period:"/mes c/u", desc:"Automatiza un proceso adicional con IA.", isQty:true, unit:"flujos" },
  { id:"canal_ig", name:"Canales Instagram y Facebook", price:350000, period:"/mes", desc:"Integra ambos canales sociales a tu plataforma." },
  { id:"api", name:"Integración API externa", price:800000, period:"/única vez", desc:"CRM, ERP, plataformas propias." },
  { id:"bot_area", name:"Bot entrenado por área", price:600000, period:"/única vez", desc:"Soporte, ventas, RRHH, etc." },
  { id:"sla", name:"SLA extendido 24/7", price:800000, period:"/mes", desc:"Soporte fuera de horario hábil." }
];

export const PLAN_FEATURES_PDF: Record<PlanKey, [string,string][]> = {
  basic:[["Agentes incluidos","5"],["Canales WhatsApp","1"],["Bandeja unificada","Sí"],["Respuestas automáticas","Sí"],["Trazabilidad","Básica"],["Reportes","Básico"],["Roles y permisos","Básico"],["Hosting","Compartido"],["Soporte","Estándar horario hábil"],["Onboarding","Inicial"]],
  growth:[["Agentes incluidos","10"],["Canales WhatsApp","3"],["Bandeja unificada","Multicanal"],["Flujos IA","1 flujo automatizado"],["Respuestas automáticas","Sí"],["Enrutamiento inteligente","Sí"],["Dashboard","Métricas de atención"],["Roles y permisos","Por agente"],["Hosting","Administrado"],["SLA","Prioritario"],["Integración API","Adicional"],["Onboarding","Asistido"]],
  premium:[["Agentes incluidos","20"],["Canales WhatsApp","5"],["Instagram / Facebook","Costo adicional"],["Flujos IA","5 flujos avanzados"],["Agentes IA","Entrenados por proceso"],["Escalamiento","Automático humano + IA"],["Dashboard","Ejecutivo completo"],["Dominio propio","Sí"],["Infraestructura","Dedicada"],["Integraciones API","Incluidas"],["Soporte","Prioritario"],["Acompañamiento","Técnico evolutivo"],["Horas optimización","10 horas/mes"],["Horas desarrollo","10 horas/mes"],["Onboarding","Completo"]]
};

export const fmt = (n: number) => new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",maximumFractionDigits:0}).format(n);
