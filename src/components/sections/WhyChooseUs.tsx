
"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Customer First",
    description:
      "We understand your business goals and create solutions that match your needs.",
  },
  {
    number: "02",
    title: "Creative Approach",
    description:
      "We combine creativity and strategy to build meaningful digital experiences.",
  },
  {
    number: "03",
    title: "Quality Work",
    description:
      "We focus on clean design, reliable development, and attention to detail.",
  },
  {
    number: "04",
    title: "Modern Technology",
    description:
      "We use modern tools and technologies to build effective digital solutions.",
  },
  {
    number: "05",
    title: "On-Time Delivery",
    description:
      "We plan our work carefully and aim to deliver projects on schedule.",
  },
  {
    number: "06",
    title: "Ongoing Support",
    description:
      "We stay connected and help you with your digital needs as your business grows.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-[#F8FAFC] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#173652] mt-4">
            Why Businesses Trust
            <span className="text-blue-600"> Bhanu Tech Solutions</span>
          </h2>

          <p className="text-gray-600 mt-5 leading-7">
            We bring creativity, technology, and dedication together
            to help businesses build a stronger digital presence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {reasons.map((item) => (
            <motion.div
              key={item.number}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mb-6">
                {item.number}
              </div>

              <h3 className="text-xl font-bold text-[#173652] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
