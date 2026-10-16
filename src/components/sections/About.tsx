
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Compass,
  Lightbulb,
  Target,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Strategy first",
    description:
      "Every project starts with clear goals, the right audience and a focused plan.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Creative by design",
    description:
      "We combine thoughtful design and compelling content to help brands stand out.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Growth with purpose",
    description:
      "We focus on practical digital solutions built around your business objectives.",
    icon: Target,
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="about-eyebrow">
            <span />
            ABOUT BHANU TECH SOLUTIONS
          </span>

          <h2>
            Good ideas deserve
            <br />
            <span>great execution.</span>
          </h2>
        </motion.div>

        <div className="about-main">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="about-lead">
              We help businesses turn their digital presence into a meaningful
              advantage.
            </p>

            <p className="about-description">
              Bhanu Tech Solutions brings together digital marketing, creative
              branding, social media management and website development to
              help businesses communicate clearly and grow with confidence.
            </p>

            <div className="about-founder-note">
              <div className="about-founder-icon">
                <BadgeCheck size={22} />
              </div>
              <div>
                <strong>Bhanu Prakash Nukana</strong>
                <span>Founder, Bhanu Tech Solutions</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-values"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value" key={value.number}>
                  <div className="about-value-top">
                    <span className="about-value-number">{value.number}</span>
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}

            <a className="about-link" href="#services">
              Discover our services <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
