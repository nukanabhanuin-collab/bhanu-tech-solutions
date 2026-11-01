
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "WEBSITE DEVELOPMENT",
    title: "Business Websites",
    description:
      "Modern, responsive websites designed to build trust and grow businesses online.",
    initials: "WEB",
  },
  {
    number: "02",
    category: "BRANDING & DESIGN",
    title: "Creative Brand Identity",
    description:
      "Professional visual designs that help brands stand out and communicate clearly.",
    initials: "DESIGN",
  },
  {
    number: "03",
    category: "DIGITAL MARKETING",
    title: "Social Media Campaigns",
    description:
      "Creative campaigns and engaging content built to strengthen digital presence.",
    initials: "SOCIAL",
  },
];

export default function OurWork() {
  return (
    <section className="work-section" id="work">
      <div className="work-container">
        <motion.div
          className="work-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="work-eyebrow">
            <span />
            OUR SELECTED WORK
          </span>

          <div className="work-heading-row">
            <h2 className="work-title">
  Ideas made{" "}
  <span>to stand out.</span>
</h2>

            <p>
              A look at the creative thinking, design and digital solutions
              we bring to every project.
            </p>
          </div>
        </motion.div>

        <div className="work-grid">
          {projects.map((project, index) => (
            <motion.article
              className="work-card"
              key={project.number}
              initial={{ opacity: 0, y: 45, scale: 0.96 }}
whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
  duration: 0.8,
  delay: index * 0.16,
  ease: [0.22, 1, 0.36, 1],
}}
            >
              <div className={`work-art work-art-${index + 1}`}>
                <span className="work-art-number">{project.number}</span>
                <span className="work-art-title">{project.initials}</span>
                <span className="work-art-label">BHANU TECH SOLUTIONS</span>
              </div>

              <div className="work-card-content">
                <span className="work-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <a href="#contact" className="work-link">
                  Discuss a project
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
