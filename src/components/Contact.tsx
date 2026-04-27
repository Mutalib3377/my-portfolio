"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";

// Web3Forms Key — replace with your real key from web3forms.com
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
    <section id="contact" className="py-24 px-6 relative bg-gray-50/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        {/* Left side */}
        <div className="md:w-5/12">
          <span className="section-label">Connect</span>
          <h3 className="text-4xl md:text-5xl font-display font-black mb-8 tracking-tight">
            Ready to <br /> <span className="text-accent">collaborate?</span>
          </h3>
          <p className="text-gray-500 mb-12 text-lg font-medium leading-relaxed">
            Have a project in mind or just want to chat? Reach out and I&apos;ll get back to you within 24 hours.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center text-accent group-hover:border-accent transition-all duration-300">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-gray-400 tracking-[0.1em] mb-1">Email Me</p>
                <a
                  href="mailto:ajaomutalib87@gmail.com"
                  className="text-lg font-black text-gray-900 hover:text-accent transition-colors"
                >
                  ajaomutalib87@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center text-accent group-hover:border-accent transition-all duration-300">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-gray-400 tracking-[0.1em] mb-1">Location</p>
                <p className="text-lg font-black text-gray-900">Global / Remote</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side — Form */}
        <div className="md:w-7/12">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/[0.02] space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-wider text-gray-400 ml-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent focus:bg-white transition-all text-sm font-medium"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-wider text-gray-400 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent focus:bg-white transition-all text-sm font-medium"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-gray-400 ml-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent focus:bg-white transition-all text-sm font-medium resize-none"
              ></textarea>
            </div>

            {error && (
              <p className="text-red-500 text-sm font-bold ml-1">{error}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting || isSent}
              className="w-full py-6 bg-black text-white font-black rounded-2xl hover:bg-gray-800 transition-all flex items-center justify-center gap-3 group disabled:opacity-50 shadow-lg shadow-black/5"
            >
              {isSubmitting ? (
                <Loader2 size={24} className="animate-spin" />
              ) : isSent ? (
                <>
                  <CheckCircle size={24} className="text-emerald-400" />
                  Sent Successfully!
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
