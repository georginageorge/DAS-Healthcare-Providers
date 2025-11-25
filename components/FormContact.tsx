"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";
import { SiX } from "react-icons/si";
import TextareaAutosize from "react-textarea-autosize";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    reason: "",
    department: "",
    message: "",
    date: "",
    time: "",
    phone: "",
  });

  const formRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const controls = useAnimation();

  // Check if we should scroll to form
  useEffect(() => {
    if (searchParams.get('showForm') === 'true' && formRef.current) {
      // Scroll to form with smooth animation
      formRef.current.scrollIntoView({ behavior: 'smooth' });

      // Trigger attention animation
      controls.start({
        scale: [1, 1.02, 1],
        transition: { duration: 0.5 }
      });
    }
  }, [searchParams, controls]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Appointment request submitted successfully.");
  };

  return (
    <motion.section
      ref={formRef}
      animate={controls}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full py-20 px-6 md:px-14"
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-10 text-center">
        Book an Appointment
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {/* FORM SECTION */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full"
        >
          
          {/* Name */}
          <div>
            <label className="text-sm font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full bg-white border border-blue-300 rounded-md p-3"
              required
            />
          </div>
          {/* Phone Number */}
          <div>
            <label className="text-sm font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone || ""}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full bg-white border border-blue-400 rounded-md p-3"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-white border border-blue-400 rounded-md p-3"
              required
            />
          </div>
          {/* Subject */}
          <div>
            <label className="text-sm font-semibold">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full bg-white border border-blue-300 rounded-md p-3"
            />
          </div>
          {/* Reason & Department */}
          <div className="flex gap-4">
            <div className="w-full">
              <label className="text-sm font-semibold">Reason for Visit</label>
              <select
                name="reason"
                value={form.reason}
                onChange={handleChange}
                className="w-full bg-white border border-blue-400 rounded-md p-3"
                required
              >
                <option value="">Select Reason</option>
                <option>Personal Care</option>
                <option>Domiciliary Care</option>
                <option>Sitting Services</option>
                <option>Live-in Care</option>
                <option>Supported Living</option>
              </select>
            </div>
            <div className="w-full">
              <label className="text-sm font-semibold">Department</label>
              <select
                name="department"
                value={form.department}
                onChange={handleChange}
                className="w-full bg-white border border-blue-400 rounded-md p-3"
                required
              >
                <option value="">Select Department</option>
                <option>Care Support</option>
                <option>Admin Office</option>
                <option>Special Needs</option>
                <option>Home Assistance</option>
                <option>Autism Care</option>
              </select>
            </div>
          </div>
          {/* Date & Time */}
          <div className="flex gap-4">
            <div className="w-full">
              <label className="text-sm font-semibold">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full bg-white border border-blue-400 rounded-md p-3"
                required
              />
            </div>
            <div className="w-full">
              <label className="text-sm font-semibold">Preferred Time</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full bg-white border border-blue-400 rounded-md p-3"
                required
              />
            </div>
          </div>
          {/* Message */}
          <div>
            <label className="text-sm font-semibold">Your Message</label>
            <TextareaAutosize
              name="message"
              value={form.message}
              onChange={handleChange}
              minRows={3}
              placeholder="Message"
              className="w-full bg-white border border-blue-400 rounded-md p-2 resize-none"
            />
          </div>
          {/* Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-3xl font-semibold transition w-[180px]"
          >
            Submit
          </button>
        </form>

        {/* CONTACT INFO SECTION */}  
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-xl font-bold text-gray-700">Get In Touch</h3>
          <p className="text-gray-600">
            Reach out to our team for enquiries, appointments, <br/> and support.
            We're always ready to assist you.
          </p>
          <div className="space-y-4 text-gray-800">
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <p>+44 20 1234 5678</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <p>info@dashealthcare.com</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              <p>9, Arcus Road, Bromley.Kent BR1 4NN.</p>
            </div>
          </div>
          <p className="text-gray-700 font-semibold mt-6">Follow Us On</p>
          <div className="flex gap-4 items-center text-blue-600">
            <Facebook size={22} />
            <Instagram size={22} />
            <SiX size={22} />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
