import { Menu, X, Download } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import { navItems } from '../data/portfolioData';

const Navbar = ({ theme, onToggleTheme, activeSection, isMenuOpen, onToggleMenu, onResume }) => {
  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-xl ${theme === 'dark' ? 'border-white/10 bg-slate-950/70' : 'border-slate-200 bg-white/80'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button onClick={() => handleNav('home')} className={`cursor-pointer text-xl font-semibold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          Raju<span className="text-cyan-400">.</span>
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`cursor-pointer rounded-full px-3 py-2 text-sm font-medium transition ${
                activeSection === item.id ? 'bg-cyan-500/20 text-cyan-300' : theme === 'dark' ? 'text-slate-300 hover:bg-white/10 hover:text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onResume}
            className="hidden cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 sm:inline-flex"
          >
            <Download size={16} /> Resume
          </button>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={onToggleMenu}
            aria-label="Toggle navigation menu"
            className={`inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border md:hidden ${theme === 'dark' ? 'border-white/10 bg-white/10 text-slate-200' : 'border-slate-200 bg-slate-100 text-slate-700'}`}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isMenuOpen ? (
        <div className={`border-t px-4 py-4 md:hidden ${theme === 'dark' ? 'border-white/10 bg-slate-950/95' : 'border-slate-200 bg-white/95'}`}>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  handleNav(item.id);
                  onToggleMenu();
                }}
                className={`cursor-pointer rounded-2xl px-4 py-3 text-left text-sm font-medium ${
                  activeSection === item.id ? 'bg-cyan-500/20 text-cyan-300' : theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onResume}
              className="mt-2 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white"
            >
              <Download size={16} /> Download Resume
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
