"use client";

import Image from "next/image";
import { Plane, Car, Sun, Map, MessageCircle } from "lucide-react";

export default function CeylonVisitorsServices() {
  return (
    <main className="bg-[#f4f4f4] text-[#071a24]">
      {/* Desktop View - only desktop */}
      <section className="hidden md:block">
        <ServicesPage desktop />
      </section>

      {/* Mobile View - only mobile */}
      <section className="block md:hidden">
        <ServicesPage />
      </section>
    </main>
  );
}

function ServicesPage({ desktop = false }: { desktop?: boolean }) {
  const whatsappLink =
    "https://wa.me/94771303301?text=Hello, I want to book a ride.";

  const services = [
    {
      icon: Plane,
      title: "Airport Transfers",
      desc: "Safe and comfortable pickups from Bandaranaike International Airport or anywhere in Sri Lanka.",
      points: [
        "Meet & Greet at Arrivals",
        "Luggage Assistance",
        "Air-conditioned Vehicles",
      ],
    },
    {
      icon: Car,
      title: "Chauffeur Service",
      desc: "Private driver with local expertise for stress-free travel.",
      points: ["English Speaking Drivers", "Flexible Hours", "Local knowledge"],
    },
    {
      icon: Sun,
      title: "Day Tours",
      desc: "Explore iconic destinations in one day.",
      points: [
        "Sigiriya Rock Fortress",
        "Kandy Temple & Gardens",
        "Galle Fort",
      ],
    },
    {
      icon: Map,
      title: "Multi-Day Tours",
      desc: "Fully planned journeys across Sri Lanka.",
      points: [
        "Customizable Routes",
        "Hotel Recommendations",
        "Activity Planning",
      ],
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[420px] flex items-center justify-center text-center text-white overflow-hidden rounded-[34px] mx-5 md:mx-[88px]">
        <Image
          src="/images/services.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#071a24]/70" />

        <div className="relative z-10 px-5">
          <p className="text-[#d8b62f] text-[12px] mb-2">What We Offer</p>

          <h1 className="font-serif text-[42px] md:text-[52px] font-bold">
            Our Travel Services
          </h1>

          <p className="text-[14px] mt-3 text-gray-200 max-w-[520px] mx-auto">
            Professional, reliable, and comfortable transport solutions for
            every type of traveler.
          </p>

          <div className="w-[55px] h-[3px] bg-[#d8b62f] mx-auto mt-5" />
        </div>
      </section>

      {/* ================= CARDS ================= */}
      <section
        className={`px-5 md:px-[90px] py-[60px] grid gap-[30px] ${
          desktop ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {services.map((s, i) => (
          <div key={i} className="bg-white rounded-[10px] p-[28px] shadow-sm">
            <div className="w-[42px] h-[42px] bg-[#f3f4f6] rounded-[8px] flex items-center justify-center mb-5">
              <s.icon size={20} />
            </div>

            <h3 className="font-serif text-[20px] font-bold mb-3">{s.title}</h3>

            <p className="text-[13px] text-[#4b5563] mb-4 leading-[22px]">
              {s.desc}
            </p>

            <ul className="text-[13px] mb-5 space-y-2">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="w-[5px] h-[5px] bg-[#d8b62f] rounded-full" />
                  {p}
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink}
              target="_blank"
              className="w-full h-[42px] bg-[#1597ff] hover:bg-[#057ddd] text-white text-[13px] font-bold rounded-[5px] flex items-center justify-center gap-2 transition"
            >
              <MessageCircle size={15} />
              Book via WhatsApp
            </a>
          </div>
        ))}
      </section>

      {/* ================= CTA BUTTON ================= */}
      <div className="text-center pb-[60px]">
        <a
          href={whatsappLink}
          className="inline-flex items-center justify-center w-[240px] h-[50px] bg-[#20d969] hover:bg-[#18c75e] text-white font-bold text-[14px] rounded-[4px]"
        >
          <MessageCircle size={18} />
          Book Your Ride Now
        </a>
      </div>
    </>
  );
}
