"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Team() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const testimonials = [
    {
      img: "/maria.jpg",
      name: "Maria Rodriguez",
      role: "Care Assistant",
      text: `"Working at DAS HEALTHCARE PROVIDERS has been incredibly rewarding. The team is like family, and the support we receive is outstanding. I truly feel I make a difference."`,
    },
    {
      img: "/John.jpg",
      name: "John Chen",
      role: "Support Worker",
      text: `"The focus on person-centered care and continuous learning here is inspiring. I’ve grown so much professionally, and every day brings new opportunities to help others."`,
    },
    {
      img: "/liam.jpg",
      name: "Liam O’Connell",
      role: "Activities Coordinator",
      text: `"It’s wonderful to be part of an organization that truly values compassion and innovation. The joy on our clients’ faces makes every effort worthwhile."`,
    },
  ];

  return (
    <section className="w-full bg-[linear-gradient(135deg,#E3EFFF_30%,#F5F5F5_50%,#FFF5E6_100%)] mb-4 py-6 flex flex-col items-center">
      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" bg-[linear-gradient(135deg,#E3EFFF_30%,#F5F5F5_50%,#FFF5E6_100%)]text-3xl md:text-4xl font-semibold text-center mb-13 text-[#0C1A2A]"
      >
        Hear From Our Team
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-14 max-w-4xl">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#F4F9FD] p-6 rounded-xl shadow-sm border border-[#e9eef2]"
          >
            {/* Profile Row */}
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={item.img}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-[#0C1A2A]">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>

            {/* Team Text */}
            <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
