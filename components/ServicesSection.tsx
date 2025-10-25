"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Brain,
  Users,
  Lightbulb,
  Heart,
  GraduationCap,
  Handshake,
} from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const services = [
  {
    title: "Learning Disability Support",
    description:
      "Providing tailored support plans to help individuals achieve their potential and live fulfilling lives.",
    icon: Brain,
    img: "/Learning-Support.jpg",
  },
  {
    title: "Autism Spectrum Care",
    description:
      "Specialized care approaches focusing on communication, sensory integration, and social engagement.",
    icon: Users,
    img: "/autism-care.jpg",
  },
  {
    title: "Sensory Impairment Solutions",
    description:
      "Innovative solutions and adaptations to support individuals with visual, hearing, and sensory impairments.",
    icon: Lightbulb,
    img: "/Sensory.jpg",
  },
  {
    title: "Person-Centered Support",
    description:
      "Empowering individuals to shaped their own care plans, focusing on personal goals, preferences and aspirations.",
    icon: Heart,
    img: "/Centered-support.jpg",
  },
  {
    title: "Daily Living Assistance",
    description:
      "Comprehensive support for daily tasks, including personal care, meal prepartion and household.",
    icon: GraduationCap,
    img: "/Living assistance.jpg",
  },
  {
    title: "Community Engagement",
    description:
      "Facilitating active participation in community activities, promoting social inclusion, and building.",
    icon: Handshake,
    img: "/Community.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-grey to-blue-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-black text-center mb-12"
        >
          Our Comprehensive Services
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="w-full max-w-[280px] bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-lg"
              >
                {/* ✅ Image Section (Fixed) */}
                <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full"
                  >
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 ease-out"
                    />
                  </motion.div>
                </div>

                {/* ✅ Content Section */}
                <div className="relative p-5 text-left min-h-[170px] flex flex-col justify-start">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-base font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
