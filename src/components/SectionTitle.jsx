import { motion } from 'framer-motion';

const SectionTitle = ({ eyebrow, title, description, align = 'center' }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.5 }}
    className={`max-w-3xl ${align === 'left' ? 'text-left' : 'mx-auto text-center'}`}
  >
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">{eyebrow}</p>
    <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    {description ? <p className="mt-4 text-base leading-7 text-slate-400">{description}</p> : null}
  </motion.div>
);

export default SectionTitle;
