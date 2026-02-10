import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-16 mb-12">

                {/* Brand */}
                <div className="col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <img
                            src="/jhamf-logo-white.png"
                            alt="Jhamf Group Logo"
                            className="h-14 w-auto object-contain"
                        />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Expertos en Cloud Infrastructure y Process Automation.
                    </p>
                </div>

                {/* Links 1 */}
                <div>
                    <h4 className="text-white font-bold mb-6">Soluciones</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-neon-cyan transition-colors">Cloud Architecture</a></li>
                        <li><a href="#" className="hover:text-neon-cyan transition-colors">Intelligent Automation</a></li>
                        <li><a href="#" className="hover:text-neon-cyan transition-colors">AI Solutions</a></li>
                        <li><Link to="/casos-de-exito" className="hover:text-neon-cyan transition-colors">Casos de Éxito</Link></li>
                        <li><Link to="/ia-cali" className="hover:text-neon-cyan transition-colors">IA en Cali</Link></li>
                    </ul>
                </div>

                {/* Links 2 */}
                <div>
                    <h4 className="text-white font-bold mb-6">Empresa</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-neon-cyan transition-colors">Sobre Nosotros</a></li>
                        <li><a href="#" className="hover:text-neon-cyan transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-neon-cyan transition-colors">Contacto</a></li>
                    </ul>
                </div>

                {/* Links 3 - Legal & Soporte */}
                <div>
                    <h4 className="text-white font-bold mb-6">Legal & Soporte</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link to="/pqrs" className="hover:text-neon-cyan transition-colors">PQRS</Link></li>
                        <li><Link to="/politica-privacidad" className="hover:text-neon-cyan transition-colors">Política de Privacidad</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-gray-500 pb-8">
                <p>&copy; {new Date().getFullYear()} Jhamf Group SAS. Todos los derechos reservados.</p>
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <a href="https://www.instagram.com/jhamfgroup/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                    <a href="https://www.linkedin.com/company/jhamf-group" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a href="mailto:proyectos@jhamf.com" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
