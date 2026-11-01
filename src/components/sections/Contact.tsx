
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Digital Marketing",
    message: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const whatsappNumber = "917386898658";

    const text = `Hello Bhanu Tech Solutions!

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Service: ${form.service}
Project Details: ${form.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-eyebrow">
            <span /> LET&apos;S WORK TOGETHER
          </span>

          <h2>
            Have a project
            <br />
            <span>in mind?</span>
          </h2>

          <p>
            Tell us about your business goals. Let&apos;s create something
            meaningful together.
          </p>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="contact-form-grid">
            <label>
              Your Name *
              <input
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                placeholder="Enter your name"
              />
            </label>

            <label>
              Email Address
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="you@example.com"
              />
            </label>

            <label>
              Phone Number *
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                placeholder="Your contact number"
              />
            </label>

            <label>
              Service Required *
              <select
                value={form.service}
                onChange={(e) =>
                  setForm({ ...form, service: e.target.value })
                }
              >
                <option>Digital Marketing</option>
                <option>Social Media Management</option>
                <option>Website Development</option>
                <option>Graphic Designing</option>
                <option>Video Editing</option>
                <option>SEO & YouTube Growth</option>
                <option>Other</option>
              </select>
            </label>
          </div>

          <label className="contact-message-label">
            Tell us about your project *
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              placeholder="What would you like to achieve?"
            />
          </label>

          <button type="submit" className="contact-submit">
            <MessageCircle size={19} />
            Send Enquiry on WhatsApp
            <ArrowUpRight size={18} />
          </button>

          <p className="contact-form-note">
            Your enquiry will open in WhatsApp for you to send.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
