import { motion } from 'framer-motion';
import { BadgeCheck, ArrowUpRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { certifications } from '../data/portfolioData';

const CertificationsSection = () => (
  <section id="certifications" className="px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle eyebrow="Certifications" title="Recognitions that support my growth" description="These certifications reflect my commitment to continuous learning and practical skill-building." />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {certifications.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_90px_rgba(2,6,23,0.2)] backdrop-blur"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                <BadgeCheck size={22} />
              </div>
              {item.url && item.url !== '#' ? (
                <a href={item.url} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:text-cyan-300">
                  <ArrowUpRight size={16} />
                </a>
              ) : null}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{item.name}</h3>
            <p className="mt-2 text-slate-400">{item.organization}</p>
            <p className="mt-3 text-sm text-slate-500">{item.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
