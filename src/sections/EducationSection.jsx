import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { education } from '../data/portfolioData';

const EducationSection = () => (
  <section id="education" className="px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle eyebrow="Education" title="A strong academic foundation" description="My education has shaped my problem-solving approach and technical curiosity for building real-world applications." />
      <div className="mt-12 relative ml-4 border-l border-cyan-400/20 pl-8">
        {education.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="relative mb-8 rounded-[1.4rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_90px_rgba(2,6,23,0.2)] backdrop-blur"
          >
            <div className="absolute -left-[1.4rem] top-8 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">{item.period}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-slate-300">{item.institution}</p>
            <p className="mt-1 text-slate-400">{item.extra}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
