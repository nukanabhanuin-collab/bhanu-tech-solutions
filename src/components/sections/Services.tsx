
"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  Share2,
  Globe,
  Palette,
  Video,
  Search,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategic digital campaigns that help your brand reach the right audience and grow online.",
  },
  {
    number: "02",
    icon: Share2,
    title: "Social Media Management",
    description:
      "Build your brand presence with engaging content, creative posts and consistent social media management.",
  },
  {
    number: "03",
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive websites designed to showcase your business and convert visitors into customers.",
  },
  {
    number: "04",
    icon: Palette,
    title: "Graphic Designing",
    description:
      "Professional posters, brand identities and visual creatives that make your business stand out.",
  },
  {
    number: "05",
    icon: Video,
    title: "Video Editing",
    description:
      "Creative reels, promotional videos and branded content that capture attention.",
  },
  {
    number: "06",
    icon: Search,
    title: "SEO & YouTube Growth",
    description:
      "Improve your online visibility with search optimization, YouTube SEO and channel growth strategies.",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="services-eyebrow">
            <span />
            WHAT WE DO
          </span>

          <div className="services-heading-row">
            <h2>
              Solutions built
              <br />
              for <span>your growth.</span>
            </h2>

            <p>
              From creative ideas to digital execution, we help businesses
              build stronger brands and create meaningful online impact.
            </p>
          </div>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                className="service-card"
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
              >
                <div className="service-card-top">
                  <div className="service-icon">
                    <Icon
                      size={23}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="service-number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a
                  href="#contact"
                  className="service-link"
                  aria-label={`Enquire about ${service.title}`}
                >
                  Explore service
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
