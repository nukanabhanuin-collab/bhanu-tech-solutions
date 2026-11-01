
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const features = [
  "Creative & Strategic Solutions",
  "Modern Website Development",
  "Digital Marketing & Branding",
];

export default function BrandIntro() {
  return (
    <section className="bg-[#F1F6FF] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Logo Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute w-80 h-80 bg-blue-200/40 rounded-full blur-3xl" />

          <div className="relative bg-white rounded-3xl p-5 md:p-10 shadow-xl border border-white w-full max-w-[500px]">
            <Image
              src="/logo-marketing.png"
              alt="Bhanu Tech Solutions Marketing Logo"
              width={700}
              height={700}
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-blue-600" />
            <span className="text-blue-600 font-bold text-sm tracking-[0.18em] uppercase">
              Who We Are
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#173652] leading-tight tracking-tight">
            Your Vision.
            <span className="text-blue-600"> Our Innovation.</span>
            <br />
            Your Success.
          </h2>

          <p className="text-gray-600 leading-8 mt-7 text-base md:text-lg">
            Bhanu Tech Solutions is your trusted digital growth partner.
            We combine creativity, technology, and strategic thinking
            to help businesses build a powerful online presence.
          </p>

          <p className="text-gray-600 leading-8 mt-4">
            From professional website development to digital marketing
            and creative branding, we turn your ideas into impactful
            digital experiences.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600 shrink-0" size={21} />
                <span className="text-[#173652] font-medium text-sm md:text-base">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 mt-10 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-blue-600/20"
          >
            Let's Build Together
            <ArrowUpRight size={19} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
