import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, LoaderCircle } from 'lucide-react';
import './App.css';
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import EducationSection from './sections/EducationSection';
import CertificationsSection from './sections/CertificationsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700);
    const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.45 },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (window.scrollY / height) * 100 : 0;
      setScrollProgress(progress);
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleResume = () => {
    const resumeUrl = '/Raju_Ganji_Resume.pdf';
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <div className="fixed left-0 top-0 z-[90] h-1 w-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" style={{ width: `${scrollProgress}%` }} />
      </div>

      <AnimatePresence>
        {loading ? (
          <motion.div key="loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950">
            <div className="flex flex-col items-center gap-4 text-cyan-300">
              <LoaderCircle size={42} className="animate-spin" />
              <p className="text-sm uppercase tracking-[0.3em]">Loading portfolio</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Navbar theme={theme} onToggleTheme={toggleTheme} activeSection={activeSection} isMenuOpen={isMenuOpen} onToggleMenu={() => setIsMenuOpen((prev) => !prev)} onResume={handleResume} />
      <main>
        <HeroSection onResume={handleResume} />
        <AboutSection onResume={handleResume} />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        <p>© 2026 Ganji Raju. Built with React.js.</p>
      </footer>

      <AnimatePresence>
        {showTop ? (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-3 text-white shadow-[0_15px_40px_rgba(34,211,238,0.25)]"
          >
            <ArrowUp size={18} />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default App;