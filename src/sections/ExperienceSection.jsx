import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { practicalExperience } from '../data/portfolioData';

const ExperienceSection = ({ theme = 'dark' }) => (
  <section className="px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle eyebrow="Practical Experience" title="Project-based experience that reflects real development work" description="I’m a fresher, so I’m presenting my practical experience through academic and personal development projects, internships, and hands-on implementation." theme={theme} />
      <div className={`mt-12 rounded-[2rem] border p-8 shadow-[0_20px_90px_rgba(2,6,23,0.16)] backdrop-blur ${theme === 'dark' ? 'border-white/10 bg-slate-900/70' : 'border-slate-200 bg-white/85'}`}>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Project Experience</p>
            <h3 className={`mt-3 text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Hands-on work across frontend, backend, and mobile development</h3>
            <p className={`mt-4 text-lg leading-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>I’ve built and improved projects focused on responsive UI, reusable components, database-backed features, REST APIs, mobile navigation, version control, deployment, and testing.</p>
          </div>
          <ul className="space-y-3">
            {practicalExperience.map((item) => (
              <li key={item} className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${theme === 'dark' ? 'border-white/10 bg-white/5 text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-700'}`}>
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
