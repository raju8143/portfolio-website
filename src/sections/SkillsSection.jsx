import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Wrench, BrainCircuit, ServerCog, LayoutPanelTop } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { skillGroups } from '../data/portfolioData';

const iconMap = {
  LayoutPanelTop,
  Smartphone,
  ServerCog,
  Database,
  Wrench,
  BrainCircuit,
};

const SkillsSection = ({ theme = 'dark' }) => (
  <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle eyebrow="Technical Skills" title="A practical toolkit for modern development" description="These are the areas I’ve been building with through projects, coursework, and hands-on practice." theme={theme} />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = iconMap[group.icon] || Code2;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className={`rounded-[1.6rem] border p-6 shadow-[0_20px_90px_rgba(2,6,23,0.16)] backdrop-blur ${theme === 'dark' ? 'border-white/10 bg-slate-900/70' : 'border-slate-200 bg-white/85'}`}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  <Icon size={20} />
                </div>
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{group.title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <div key={item.name} className={`group relative rounded-2xl border px-4 py-3 text-sm transition hover:border-cyan-400/40 hover:text-cyan-300 ${theme === 'dark' ? 'border-white/10 bg-white/5 text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-700'}`}>
                    <span>{item.name}</span>
                    <span className={`pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-56 -translate-x-1/2 rounded-xl border px-3 py-2 text-xs opacity-0 shadow-lg transition group-hover:opacity-100 ${theme === 'dark' ? 'border-white/10 bg-slate-950/95 text-slate-400' : 'border-slate-200 bg-white text-slate-600'}`}>
                      {item.note}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SkillsSection;
