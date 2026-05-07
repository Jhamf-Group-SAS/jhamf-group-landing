export type PlanKey = "basic" | "growth" | "premium";
export interface Plan { name: string; subtitle: string; price: number; tag: string; features: string[]; color: string; gradient: string; planColors: [number,number,number]; badge?: string; }
export interface Addon { id: string; name: string; price: number; period: string; desc: string; }

export const PLANS: Record<PlanKey, Plan> = {
  basic: { name:"Básico", subtitle:"Arranque digital omnicanal", price:990000, tag:"Ideal para equipos pequeños de hasta 5 agentes.", planColors:[59,130,246], color:"#3B82F6", gradient:"from-blue-600 to-blue-400", features:["5 agentes incluidos","1 canal WhatsApp","Bandeja unificada","Respuestas automáticas","Trazabilidad básica","Reportes básicos","Roles y permisos básicos","Hosting compartido","Soporte horario hábil","Onboarding inicial"] },
  growth: { name:"Growth", subtitle:"Escala tu atención con IA", price:2490000, tag:"Para equipos de 10 agentes con flujos IA incluidos.", badge:"POPULAR", planColors:[0,184,217], color:"#00B8D9", gradient:"from-cyan-500 to-cyan-300", features:["10 agentes incluidos","3 canales WhatsApp","Bandeja multicanal","1 flujo IA automatizado","Respuestas automáticas","Enrutamiento inteligente","Dashboard de métricas","Roles por agente","Hosting administrado","SLA prioritario","Integración API (adicional)","Onboarding asistido"] },
  premium: { name:"Premium", subtitle:"Omnicanal enterprise con IA avanzada", price:4990000, tag:"Para operaciones de alto volumen con 20 agentes y 5 flujos IA.", planColors:[168,85,247], color:"#A855F7", gradient:"from-purple-600 to-purple-400", features:["20 agentes incluidos","5 canales WhatsApp","Instagram / Facebook (adicional)","5 flujos IA avanzados","Agentes IA por proceso","Escalamiento automático IA + humano","Dashboard ejecutivo completo","Dominio propio","Infraestructura dedicada","Integraciones API incluidas","Soporte prioritario","Acompañamiento técnico evolutivo","10 h/mes optimización","10 h/mes desarrollo","Onboarding completo"] }
};

export const ADDONS: Addon[] = [
  { id:"bot_adicional", name:"Bot IA adicional", price:590000, period:"/mes", desc:"Agente conversacional entrenado por proceso adicional." },
  { id:"canal_ig", name:"Canal Instagram/Facebook", price:390000, period:"/mes", desc:"Integración directa con Meta Business Suite." },
  { id:"api", name:"Integración API empresarial", price:490000, period:"/implementación", desc:"Conector con CRM, ERP u otros sistemas." },
  { id:"analitica", name:"Analítica avanzada", price:350000, period:"/mes", desc:"BI embebido con dashboards ejecutivos personalizados." },
  { id:"soporte_24", name:"Soporte 24/7", price:290000, period:"/mes", desc:"Atención técnica fuera de horario hábil." },
  { id:"onboarding_plus", name:"Onboarding Plus", price:890000, period:"/único", desc:"Capacitación profunda + documentación + plan de adopción." }
];

export const PLAN_FEATURES_PDF: Record<PlanKey, [string,string][]> = {
  basic:[["Agentes incluidos","5"],["Canales WhatsApp","1"],["Bandeja unificada","Sí"],["Respuestas automáticas","Sí"],["Trazabilidad","Básica"],["Reportes","Básico"],["Roles y permisos","Básico"],["Hosting","Compartido"],["Soporte","Estándar horario hábil"],["Onboarding","Inicial"]],
  growth:[["Agentes incluidos","10"],["Canales WhatsApp","3"],["Bandeja unificada","Multicanal"],["Flujos IA","1 flujo automatizado"],["Respuestas automáticas","Sí"],["Enrutamiento inteligente","Sí"],["Dashboard","Métricas de atención"],["Roles y permisos","Por agente"],["Hosting","Administrado"],["SLA","Prioritario"],["Integración API","Adicional"],["Onboarding","Asistido"]],
  premium:[["Agentes incluidos","20"],["Canales WhatsApp","5"],["Instagram / Facebook","Costo adicional"],["Flujos IA","5 flujos avanzados"],["Agentes IA","Entrenados por proceso"],["Escalamiento","Automático humano + IA"],["Dashboard","Ejecutivo completo"],["Dominio propio","Sí"],["Infraestructura","Dedicada"],["Integraciones API","Incluidas"],["Soporte","Prioritario"],["Acompañamiento","Técnico evolutivo"],["Horas optimización","10 horas/mes"],["Horas desarrollo","10 horas/mes"],["Onboarding","Completo"]]
};

export const fmt = (n: number) => new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",maximumFractionDigits:0}).format(n);
