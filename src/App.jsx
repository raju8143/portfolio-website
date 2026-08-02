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
import AchievementsSection from './sections/AchievementsSection';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700);
    const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];

    const updateActiveSection = () => {
      const offset = 140;
      let currentSection = 'home';
      let closestDistance = Number.POSITIVE_INFINITY;

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const distance = Math.abs(elementTop - (window.scrollY + offset));

        if (distance < closestDistance) {
          closestDistance = distance;
          currentSection = id;
        }
      });

      setActiveSection(currentSection);

      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (window.scrollY / height) * 100 : 0;
      setScrollProgress(progress);
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    updateActiveSection();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const handleViewResume = () => {
    const resumeUrl = '/Ganji_Raju_Resume.pdf';
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadResume = () => {
    const resumeUrl = '/Ganji_Raju_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ganji_Raju_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

      <Navbar theme={theme} onToggleTheme={toggleTheme} activeSection={activeSection} isMenuOpen={isMenuOpen} onToggleMenu={() => setIsMenuOpen((prev) => !prev)} onViewResume={handleViewResume} onDownloadResume={handleDownloadResume} />
      <main>
        <HeroSection theme={theme} />
        <AboutSection theme={theme} />
        <SkillsSection theme={theme} />
        <ProjectsSection theme={theme} />
        <EducationSection theme={theme} />
        <AchievementsSection theme={theme} />
        <CertificationsSection theme={theme} />
        <ExperienceSection theme={theme} />
        <ContactSection theme={theme} />
      </main>
      <footer className={`border-t px-4 py-8 text-center text-sm sm:px-6 lg:px-8 ${theme === 'dark' ? 'border-white/10 text-slate-500' : 'border-slate-200 text-slate-600'}`}>
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