
"use client";

import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Our Work", href: "#work" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Website Design & Development",
  "Digital Marketing",
  "Social Media Management",
  "Graphic Designing",
  "Video Editing",
  "SEO & Digital Solutions",
];

export default function Footer() {
  return (
    <footer className="bg-[#102B46] text-white pt-20 pb-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16"
        >
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-5">
              Bhanu <span className="text-blue-400">Tech Solutions</span>
            </h2>

            <p className="text-gray-300 leading-7 text-sm">
              We combine creativity, technology, and strategy
              to help businesses build a strong digital presence
              and grow with confidence.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-7 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              Let's Talk <span>↗</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 hover:translate-x-1 inline-block transition-all duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-300"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-300 text-sm leading-7">
              Have a project in mind? Let's discuss how
              we can help your business grow digitally.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-blue-400 hover:text-white font-semibold text-sm transition-colors"
            >
              Get In Touch <span>→</span>
            </a>

            <div className="mt-8">
              <p className="text-gray-400 text-xs uppercase tracking-widest">
                Digital Growth Partner
              </p>
              <p className="font-semibold mt-2">
                Creative. Strategic. Results-Driven.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-white/15 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Bhanu Tech Solutions.
            All Rights Reserved.
          </p>

          <p className="text-gray-400 text-sm">
            Designed with{" "}
            <span className="text-red-400">♥</span> by{" "}
            <span className="text-blue-400 font-semibold">
              Bhanu Tech Solutions
            </span>
          </p>

        </div>
      </div>
    </footer>
  );
}
