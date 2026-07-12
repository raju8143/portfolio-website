import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { aboutCards } from '../data/portfolioData';

const AboutSection = ({ onResume }) => (
  <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle eyebrow="About Me" title="Building thoughtful web experiences" description="I’m a Computer Science graduate focused on creating accessible, polished, and responsive applications that solve real problems." />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_20px_90px_rgba(2,6,23,0.25)] backdrop-blur"
        >
          <p className="text-lg leading-8 text-slate-400">
            I am Ganji Raju, a B.Tech graduate in Computer Science and Engineering from Annamacharya Institute of Technology and Sciences, affiliated with JNTUH.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            I have hands-on experience developing responsive web and mobile applications using React.js, JavaScript, React Native, Python, Node.js, MySQL. I enjoy creating clean user interfaces, integrating APIs, solving programming problems, and continuously improving my technical skills.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            I am currently looking for an entry-level opportunity where I can contribute to real-world projects and grow as a software developer.
          </p>
          <button onClick={onResume} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition hover:opacity-90 cursor-pointer">
            <Download size={16} /> Download Resume
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {aboutCards.map((card) => (
            <div key={card.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{card.label}</p>
              <p className="mt-2 text-sm leading-7 text-slate-200">{card.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
