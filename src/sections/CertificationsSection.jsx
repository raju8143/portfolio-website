import { motion } from 'framer-motion';
import { BadgeCheck, ArrowUpRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { certifications } from '../data/portfolioData';

const CertificationsSection = ({ theme = 'dark' }) => (
  <section id="certifications" className="px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle eyebrow="Certifications" title="Recognitions that support my growth" description="These certifications reflect my commitment to continuous learning and practical skill-building." theme={theme} />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {certifications.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className={`rounded-[1.5rem] border p-6 shadow-[0_20px_90px_rgba(2,6,23,0.14)] backdrop-blur ${theme === 'dark' ? 'border-white/10 bg-slate-900/70' : 'border-slate-200 bg-white/85'}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                <BadgeCheck size={22} />
              </div>
              {item.url && item.url !== '#' ? (
                <a href={item.url} target="_blank" rel="noreferrer" className={`rounded-full border p-2 transition ${theme === 'dark' ? 'border-white/10 bg-white/5 text-slate-300 hover:text-cyan-300' : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-cyan-600'}`}>
                  <ArrowUpRight size={16} />
                </a>
              ) : null}
            </div>
            <h3 className={`mt-5 text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.name}</h3>
            <p className={`mt-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{item.organization}</p>
            <p className={`mt-3 text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>{item.date}</p>
            {item.url && item.url !== '#' ? (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className={`mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${theme === 'dark' ? 'bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500/25' : 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100'}`}
              >
                View Certificate
                <ArrowUpRight size={14} />
              </a>
            ) : null}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
