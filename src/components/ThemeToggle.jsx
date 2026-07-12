import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ theme, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label="Toggle color theme"
    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
  >
    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
  </button>
);

export default ThemeToggle;
