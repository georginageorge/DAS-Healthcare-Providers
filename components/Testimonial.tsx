"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "DAS Healthcare Providers has given us so much peace of mind. The care for my son is exceptional.",
    name: "Thomas T.",
    role: "Father of Client",
    image: "/Thomas.jpg",
  },
  {
    id: 2,
    quote:
      "The team at DAS is incredibly supportive. They communicate proactively and always put my sister’s needs first.",
    name: "David L.",
    role: "Brother of Client",
    image: "/david.jpg",
  },
  {
    id: 3,
    quote:
      "I was looking for a service that truly understood the complexities of learning disabilities. DAS exceeded expectations.",
    name: "Emily R.",
    role: "Guardian",
    image: "/emily.jpg",
  },
  {
    id: 4,
    quote:
      "Knowing my nephew is in such capable and caring hands is a huge relief. Professional and compassionate care.",
    name: "Robert K.",
    role: "Client’s Uncle",
    image: "/robert.jpg",
  },
];

export default function TestimonialsFigma() {
  return (
    <section className="flex justify-center px-6 py-16">
      {/* Card container (light grey) - centered, not full page width */}
      <div className="max-w-4xl w-full bg-gray-50 rounded-3xl shadow-sm p-8 md:p-10">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
          What Families Say About Us
        </h2>

        {/* Narrow testimonial cards (white) */}
        <div className="flex gap-6 justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {testimonials.map((t, i) => (
              <motion.article
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ translateY: -6, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
                className="bg-white rounded-2xl p-5 flex flex-col justify-between items-center text-center shadow transition-all duration-300 h-full max-w-[200px] mx-auto"
              >
                {/* small portrait at top (centered) */}
                <div className="w-12 h-12 rounded-full overflow-hidden mb-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>

                {/* quote (centered, narrow) */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                  {t.quote}
                </p>

                {/* name & role at bottom (centered) */}
                <div className="mt-auto">
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
