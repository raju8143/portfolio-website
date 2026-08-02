import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { achievements } from '../data/portfolioData';

const AchievementsSection = ({ theme = 'dark' }) => (
  <section id="achievements" className="px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Achievements"
        title="Milestones and notable recognitions"
        description="A quick view of the achievements that reflect my growth and participation in learning opportunities."
        theme={theme}
      />
      <div className="mt-12 grid gap-6 md:grid-cols-1">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className={`rounded-[1.5rem] border p-6 shadow-[0_20px_90px_rgba(2,6,23,0.14)] backdrop-blur ${theme === 'dark' ? 'border-white/10 bg-slate-900/70' : 'border-slate-200 bg-white/85'}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                <p className={`mt-2 text-sm leading-7 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{item.description}</p>
              </div>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-full border p-2 transition ${theme === 'dark' ? 'border-white/10 bg-white/5 text-slate-300 hover:text-cyan-300' : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-cyan-600'}`}
                >
                  <ArrowUpRight size={16} />
                </a>
              ) : null}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}`}>{item.date}</p>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${theme === 'dark' ? 'bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500/25' : 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100'}`}
                >
                  {item.buttonLabel || 'View'}
                  <ArrowUpRight size={14} />
                </a>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
