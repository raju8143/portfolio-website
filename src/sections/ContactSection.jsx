import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, MapPin, Send } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { contactDetails } from '../data/portfolioData';

const initialState = { name: '', email: '', subject: '', message: '' };

const ContactSection = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your full name.';
    if (!form.email.trim()) nextErrors.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please enter a valid email.';
    if (!form.subject.trim()) nextErrors.subject = 'Please enter a subject.';
    if (!form.message.trim()) nextErrors.message = 'Please enter a message.';
    if (form.message.trim().length < 10) nextErrors.message = 'Please provide a bit more detail.';
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus('Please fix the highlighted fields.');
      return;
    }

    setLoading(true);
    setStatus('');

    try {
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData.entries());
      const response = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(contactDetails.email), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...data, _captcha: 'true' }),
      });

      if (response.ok) {
        setStatus('Thanks! Your message has been sent.');
        setForm(initialState);
      } else {
        setStatus('Something went wrong. Please try again later.');
      }
    } catch {
      setStatus('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Let’s Connect" title="Open to fresher software-development opportunities" description="I’m currently looking for entry-level roles, internships, and collaborations where I can contribute and continue learning." />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_20px_90px_rgba(2,6,23,0.25)] backdrop-blur">
            <div className="space-y-4 text-slate-400">
              <div className="flex items-center gap-3"><MapPin size={18} className="text-cyan-300" /><span>{contactDetails.location}</span></div>
              <div className="flex items-center gap-3"><Mail size={18} className="text-cyan-300" /><a href={`mailto:${contactDetails.email}`} className="cursor-pointer transition hover:text-cyan-300">{contactDetails.email}</a></div>
              <div className="flex items-center gap-3"><ExternalLink size={18} className="text-cyan-300" /><a href={contactDetails.linkedin} target="_blank" rel="noreferrer" className="cursor-pointer transition hover:text-cyan-300">LinkedIn</a></div>
              <div className="flex items-center gap-3"><ExternalLink size={18} className="text-cyan-300" /><a href={contactDetails.github} target="_blank" rel="noreferrer" className="cursor-pointer transition hover:text-cyan-300">GitHub</a></div>
            </div>
            <p className="mt-8 text-lg leading-8 text-slate-400">I’m interested in roles where I can contribute to real projects, learn from experienced teams, and grow as a developer.</p>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.08 }} onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_20px_90px_rgba(2,6,23,0.25)] backdrop-blur">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Full Name</span>
                <input name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 outline-none transition focus:border-cyan-400" placeholder="Your name" />
                {errors.name ? <span className="mt-2 block text-sm text-rose-400">{errors.name}</span> : null}
              </label>
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Email Address</span>
                <input type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 outline-none transition focus:border-cyan-400" placeholder="name@email.com" />
                {errors.email ? <span className="mt-2 block text-sm text-rose-400">{errors.email}</span> : null}
              </label>
            </div>
            <label className="mt-5 block text-sm text-slate-300">
              <span className="mb-2 block">Subject</span>
              <input name="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 outline-none transition focus:border-cyan-400" placeholder="Opportunity / Collaboration" />
              {errors.subject ? <span className="mt-2 block text-sm text-rose-400">{errors.subject}</span> : null}
            </label>
            <label className="mt-5 block text-sm text-slate-300">
              <span className="mb-2 block">Message</span>
              <textarea name="message" rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 outline-none transition focus:border-cyan-400" placeholder="Tell me about the opportunity." />
              {errors.message ? <span className="mt-2 block text-sm text-rose-400">{errors.message}</span> : null}
            </label>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button type="submit" disabled={loading} className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">
                <Send size={16} /> {loading ? 'Sending...' : 'Send Message'}
              </button>
              {status ? <p className="text-sm text-cyan-300">{status}</p> : null}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
