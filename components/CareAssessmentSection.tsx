"use client";

import { Shield } from "lucide-react";

export default function CareAssessmentSection() {
  return (
    <section className="py-20 flex justify-center items-center">
      <div className="w-full max-w-4xl mx-auto px-5">
        <div className="bg-white rounded-2xl shadow-sm px-10 py-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left Text Section */}
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Ready to <br /> Experience <br /> Compassionate <br /> Care?
            </h2>
            <p className="text-gray-600 text-base mb-7 leading-relaxed">
              Contact us today to discuss your unique needs <br /> and discover
              how we can make a difference. <br /> Our team is here to support
              you every step of the way.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
              Request a Care Assessment
            </button>
          </div>

          {/* Right BRN Section */}
          <div className="bg-blue-50 rounded-xl px-6 py-4 flex items-center gap-3">
            <div className="flex items-center justify-center bg-blue-100 p-1 rounded-full">
              <Shield className="text-blue-600 w-5 h-5" />
            </div>
            <p className="text-gray-800 font-medium text-sm md:text-base">
              BRN Registration: <span className="font-semibold">14651633</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
