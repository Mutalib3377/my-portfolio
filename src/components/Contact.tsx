"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";

// ─── Web3Forms sends form submissions straight to your Gmail inbox ───────────
// Get your FREE access key at: https://web3forms.com  (takes 30 seconds)
// Then replace the value below with your key.
const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New message from ${form.name} — Portfolio`,
          from_name: form.name,
          email: form.email,
          message: form.message,
          redirect: false,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setIsSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setIsSent(false), 6000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left info */}
        <div className="md:w-1/2">
          <h2 className="text-sm font-bold tracking-widest text-accent-blue uppercase mb-2">Connect</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black mb-8">
            Let&apos;s build something <span className="text-gradient">incredible.</span>
          </h3>
          <p className="text-slate-400 mb-10 text-lg">
            Have a project in mind or just want to chat? Reach out and I&apos;ll get back to you within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-accent-blue group-hover:border-accent-blue transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Email Me</p>
                <a
                  href="mailto:ajaomutalib87@gmail.com"
                  className="font-bold hover:text-accent-blue transition-colors"
                >
                  ajaomutalib87@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-accent-blue group-hover:border-accent-blue transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Location</p>
                <p className="font-bold">Global / Remote</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="glass p-8 md:p-10 rounded-[2.5rem] space-y-6 border-white/10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-blue transition-colors text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-blue transition-colors text-sm"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent-blue transition-colors text-sm resize-none"
              ></textarea>
            </div>

            {error && (
              <p className="text-red-400 text-sm font-medium">{error}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting || isSent}
              className="w-full py-5 bg-white text-black font-black rounded-2xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
            >
              {isSubmitting ? (
                <Loader2 size={24} className="animate-spin" />
              ) : isSent ? (
                <>
                  <CheckCircle size={22} className="text-emerald-500" />
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
