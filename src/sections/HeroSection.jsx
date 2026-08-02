import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Mail, Sparkles } from 'lucide-react';
import { heroRoles, contactDetails } from '../data/portfolioData';
import profileImage from '../assets/raju-profile.png';

const HeroSection = ({ theme = 'dark' }) => {
  return (
    <section id="home" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative z-10"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <Sparkles size={16} /> Open to Fresher Roles and Internships
          </div>
          <p className={`text-lg ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Hello, I’m</p>
          <h1 className={`mt-3 text-4xl font-semibold tracking-tight sm:text-6xl ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Ganji Raju
          </h1>
          <div className="mt-4 h-14 text-2xl font-semibold text-cyan-400 sm:text-3xl">
            {heroRoles.map((role, idx) => (
              <span key={role} className={idx === 0 ? 'block' : 'hidden'}>
                {role}
              </span>
            ))}
          </div>
          <p className={`mt-6 max-w-2xl text-lg leading-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            I am a B.Tech Computer Science graduate passionate about building responsive, accessible, and user-friendly web applications using React.js, JavaScript, Python, and MySQL.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition hover:opacity-90">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#achievements" className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-5 py-3 font-semibold transition ${theme === 'dark' ? 'border-white/10 bg-white/5 text-slate-200 hover:border-cyan-400/40 hover:text-cyan-300' : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-cyan-400/40 hover:text-cyan-600'}`}>
              Achievements
            </a>
            <a href="#contact" className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-5 py-3 font-semibold transition ${theme === 'dark' ? 'border-white/10 bg-white/5 text-slate-200 hover:border-cyan-400/40 hover:text-cyan-300' : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-cyan-400/40 hover:text-cyan-600'}`}>
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={contactDetails.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className={`cursor-pointer rounded-full border p-3 transition ${theme === 'dark' ? 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300' : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-cyan-400/40 hover:text-cyan-600'}`}>
              <ExternalLink size={18} />
            </a>
            <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className={`cursor-pointer rounded-full border p-3 transition ${theme === 'dark' ? 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300' : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-cyan-400/40 hover:text-cyan-600'}`}>
              <ExternalLink size={18} />
            </a>
            <a href={`mailto:${contactDetails.email}`} aria-label="Email address" className={`cursor-pointer rounded-full border p-3 transition ${theme === 'dark' ? 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300' : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-cyan-400/40 hover:text-cyan-600'}`}>
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-fuchsia-500/20 blur-3xl" />
          <div className={`relative rounded-[2rem] border p-6 shadow-[0_30px_120px_rgba(2,6,23,0.2)] backdrop-blur-xl ${theme === 'dark' ? 'border-white/10 bg-slate-900/70' : 'border-slate-200 bg-white/85'}`}>
            <div className={`rounded-[1.5rem] border border-cyan-400/20 p-8 ${theme === 'dark' ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-slate-100 via-white to-slate-50'}`}>
              <div className={`flex items-center justify-between text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                <span>Developer Profile</span>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-300">Available</span>
              </div>
              <div className={`mt-8 flex h-48 items-center justify-center rounded-[1.5rem] border border-dashed border-cyan-400/20 ${theme === 'dark' ? 'bg-slate-950/80' : 'bg-slate-50'}`}>
  <img
    src={profileImage}
    alt="Ganji Raju"
    className="h-32 w-32 rounded-full object-cover border border-cyan-400/30"
  />
</div>
              <div className={`mt-6 grid gap-3 text-sm sm:grid-cols-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-700'}`}>
                <div className={`rounded-2xl border p-3 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white/80'}`}>React & Python</div>
                <div className={`rounded-2xl border p-3 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white/80'}`}>MySQL & APIs</div>
                <div className={`rounded-2xl border p-3 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white/80'}`}>Responsive UI</div>
                <div className={`rounded-2xl border p-3 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white/80'}`}>Fresher Ready</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
