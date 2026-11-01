
"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Client One",
    role: "Business Owner",
    review:
      "The team understood our requirements and delivered a professional digital experience. Great communication and support throughout the process.",
    initials: "C1",
  },
  {
    name: "Client Two",
    role: "Startup Founder",
    review:
      "A creative and dedicated team that focuses on quality. The overall experience was smooth and professional.",
    initials: "C2",
  },
  {
    name: "Client Three",
    role: "Company Director",
    review:
      "We appreciate their commitment, attention to detail, and modern approach to digital solutions.",
    initials: "C3",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#F8FAFC] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#173652] mt-4">
            What Our Clients
            <span className="text-blue-600"> Say About Us</span>
          </h2>

          <p className="text-gray-600 mt-5 leading-7">
            Building lasting relationships through quality work,
            creativity, and dedicated support.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.initials}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 text-5xl font-bold leading-none mb-5">
                “
              </div>

              <p className="text-gray-600 leading-8 min-h-[120px]">
                {item.review}
              </p>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  {item.initials}
                </div>

                <div>
                  <h3 className="font-bold text-[#173652]">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
