import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
    onOpenWizard: () => void;
}

const Navbar = ({ onOpenWizard }: NavbarProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Evolución', href: '/#evolution' },
        { name: 'Servicios', href: '/#services' },
        { name: 'Casos de Éxito', href: '/casos-de-exito' },
        { name: 'Nosotros', href: '/#nosotros' },
        { name: 'Contacto', href: '/#contact' },
    ];

    const handleNavigation = (href: string) => {
        setIsMobileMenuOpen(false);
        if (href.startsWith('/#')) {
            const hash = href.substring(2);
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const element = document.getElementById(hash);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(href);
            window.scrollTo(0, 0);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-obsidian/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-2">
                        <img
                            src="/jhamf-logo-white.png"
                            alt="Jhamf Group Logo"
                            className="h-12 w-auto object-contain cursor-pointer"
                            onClick={() => handleNavigation('/')}
                        />
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavigation(link.href)}
                                className="text-gray-300 hover:text-neon-cyan transition-colors text-sm font-medium tracking-wide bg-transparent border-none cursor-pointer"
                            >
                                {link.name}
                            </button>
                        ))}
                        <button
                            onClick={onOpenWizard}
                            className="px-5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white text-sm font-medium transition-all hover:scale-105 hover:border-azure/50"
                        >
                            Diagnóstico IA
                        </button>
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-20 left-0 w-full bg-obsidian/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavigation(link.href)}
                                className="text-gray-300 hover:text-neon-cyan block py-2 text-base font-medium bg-transparent border-none text-left w-full cursor-pointer"
                            >
                                {link.name}
                            </button>
                        ))}
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                onOpenWizard();
                            }}
                            className="w-full py-3 bg-azure/20 border border-azure/50 text-white rounded-lg font-medium"
                        >
                            Diagnóstico IA
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
