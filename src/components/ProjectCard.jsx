import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';

const ProjectCard = ({ project, index, theme = 'dark' }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className={`group overflow-hidden rounded-3xl border shadow-[0_20px_90px_rgba(2,6,23,0.18)] backdrop-blur ${theme === 'dark' ? 'border-white/10 bg-slate-900/70' : 'border-slate-200 bg-white/85'}`}
  >
    <div className={`h-44 bg-gradient-to-br ${project.accent} p-4`}>
      <img
        src={project.image}
        alt={`${project.title} preview`}
        loading="lazy"
        className="h-full w-full rounded-2xl border border-white/10 object-cover"
      />
    </div>
    <div className="p-6">
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
          {project.category}
        </span>
        <Sparkles size={16} className="text-cyan-400" />
      </div>
      <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
      <p className={`mt-3 text-sm leading-7 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span key={item} className={`rounded-full px-3 py-1 text-xs ${theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
            {item}
          </span>
        ))}
      </div>
      <ul className={`mt-5 space-y-2 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
        {project.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3">
        {project.githubUrl && project.githubUrl !== '#' ? (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition ${theme === 'dark' ? 'border-white/10 bg-white/5 text-slate-200 hover:border-cyan-400/40 hover:text-cyan-300' : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-cyan-400/40 hover:text-cyan-600'}`}>
            <ExternalLink size={16} /> GitHub
          </a>
        ) : null}
        {project.liveUrl && project.liveUrl !== '#' ? (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:opacity-90">
            <ArrowUpRight size={16} /> Live Demo
          </a>
        ) : null}
      </div>
    </div>
  </motion.article>
);

export default ProjectCard;
