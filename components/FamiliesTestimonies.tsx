"use client";

import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "DAS Healthcare changed our lives. their compassionate approach and tailored support for our son with autism have been truly exceptional. we finally feel like an extended family.",
      name: "Sarah L.",
      position: "Parent of Client",
      image: "/Parent-client.jpg",
    },
    {
      id: 2,
      text: "The support i recieved during my learning disablity is fantatic. I feel Empowered to make my own choice and pursue my hobies, thanks to the dedicated team at DAS. They truely understand my needs.",
      name: "Micheal Rocks.",
      position: "Client",
      image: "/Client2.jpg",
    },
    {
      id: 3,
      text: "From the moment we contacted them, DAS Healthcare Provders Offered peace of mind. Their expertise in sensory impairements and the genuie care show to my mother are beyond compare.",
      name: "Rosaline.",
      position: "Client daughter",
      image: "/Client-daughter.jpg",
    },
  ];

  return (
    <section className="py-12 g-gradient-to-br from-sky-50 via-gray-50 to-blue-50">
      <h2 className="text-center text-4xl font-semibold text-gray-900 mb-10">
        What Our Families Say
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-[250px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between"
          >
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              “{item.text}”
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-gray-900 font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
