
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const services = [
  "Digital Marketing",
  "Social Media Management",
  "Website Development",
  "Branding & Creative Design",
];

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="hero-container">
        {/* LEFT SIDE: CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            DIGITAL STRATEGY · CREATIVE · TECHNOLOGY
          </div>

          <p className="hero-intro">Your growth partner.</p>

          <h1 className="hero-title">
            Build your brand.
            <br />
            <span>Grow beyond limits.</span>
          </h1>

          <p className="hero-description">
            We help ambitious businesses build a stronger digital presence
            through strategic marketing, memorable design and modern web
            experiences.
          </p>

          <div className="hero-service-list">
            {services.map((service) => (
              <div className="hero-service-item" key={service}>
                <CheckCircle2 size={17} aria-hidden="true" />
                <span>{service}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <Link href="#work" className="hero-primary-button">
              Explore Our Work <ArrowRight size={18} />
            </Link>

            <Link href="#contact" className="hero-secondary-button">
              Let&apos;s Talk <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="hero-bottom-note">
            <span className="hero-bottom-line" />
            <span>Ideas into impact. Strategy into growth.</span>
          </div>
        </motion.div>

        {/* RIGHT SIDE: FOUNDER PHOTO */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <div className="hero-visual-topline">
            <span className="hero-visual-index">01 / LEADERSHIP</span>
            <Sparkles size={19} aria-hidden="true" />
          </div>

          <div className="hero-artwork">
            <div
              className="hero-artwork-orbit hero-artwork-orbit-one"
              aria-hidden="true"
            />
            <div
              className="hero-artwork-orbit hero-artwork-orbit-two"
              aria-hidden="true"
            />

            <div className="hero-artwork-center">
              <Image
                src="/founder.png"
                alt="Bhanu Prakash Nukana, Founder of Bhanu Tech Solutions"
                width={520}
                height={680}
                priority
                sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 520px"
                className="hero-founder-image"
              />

              <div className="hero-founder-caption">
                <div>
                  <strong>Bhanu Prakash Nukana</strong>
                  <span>Founder · Bhanu Tech Solutions</span>
                </div>
                <Sparkles size={20} aria-hidden="true" />
              </div>
            </div>

            <div className="hero-float-card hero-float-card-top">
              <span className="hero-float-icon">
                <Sparkles size={19} aria-hidden="true" />
              </span>
              <span>
                <strong>Creative thinking</strong>
                <small>Ideas that stand out</small>
              </span>
            </div>

            <div className="hero-float-card hero-float-card-bottom">
              <span className="hero-float-status" />
              <span>
                <strong>Built for growth</strong>
                <small>Digital-first solutions</small>
              </span>
            </div>
          </div>

          <div className="hero-visual-footer">
            <span>BHANU TECH SOLUTIONS</span>
            <ArrowDownRight size={20} aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
