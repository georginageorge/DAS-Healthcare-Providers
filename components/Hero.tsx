import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center h-[95vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 drop-shadow-lg">
          Compassionate Care, Empowering Lives
        </h1>
        <p className="text-white text-lg mb-8 drop-shadow-md">
          Providing exceptional care for individuals with learning disabilities,
          autism, and sensory impairments, fostering independence and
          well-being.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
          Request a Care Assessment
        </button>
      </div>
    </section>
  );
}
