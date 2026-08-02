import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projectFilters, projects } from '../data/portfolioData';

const ProjectsSection = ({ theme = 'dark' }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter || project.category === 'React' && activeFilter === 'React');
  }, [activeFilter]);

  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Featured Projects" title="Projects that reflect real development thinking" description="Here are some of the web, mobile, and machine-learning projects I’ve built and improved through hands-on practice." theme={theme} />
        <div className="mt-8 flex flex-wrap gap-3">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeFilter === filter ? 'bg-cyan-500/20 text-cyan-300' : theme === 'dark' ? 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'}`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
