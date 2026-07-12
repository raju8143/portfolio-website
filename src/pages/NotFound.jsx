import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center text-slate-200">
    <div className="max-w-md rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-[0_20px_90px_rgba(2,6,23,0.3)]">
      <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">Page not found</h1>
      <p className="mt-4 text-slate-400">The page you are looking for doesn’t exist or has moved.</p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white">
        Go back home
      </Link>
    </div>
  </div>
);

export default NotFound;
