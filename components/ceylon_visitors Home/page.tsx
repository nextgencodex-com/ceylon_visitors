"use client";
import Image from "next/image";

import {
  Car,
  UserCheck,
  Map,
  MessageCircle,
  Star,
} from "lucide-react";

export default function CeylonVisitorsHome() {
  return (
    <main className="bg-[#f4f4f4] text-[#13222d]">
      {/* ================= DESKTOP VIEW SECTION ================= */}
      <section className="hidden md:block">
        <DesktopHome />
      </section>

      {/* ================= MOBILE VIEW SECTION ================= */}
      <section className="block md:hidden">
        <MobileHome />
      </section>
    </main>
  );
}

/* =========================================================
   DESKTOP HOME VIEW
========================================================= */

function DesktopHome() {
  return (
    <>
      <Hero desktop />
      <WhyTravel desktop />
      <Destinations desktop />
      <Services desktop />
      <Reviews desktop />
      <CTA desktop />
    </>
  );
}

/* =========================================================
   MOBILE HOME VIEW
========================================================= */

function MobileHome() {
  return (
    <>
      <Hero />
      <WhyTravel />
      <Destinations />
      <Services />
      <Reviews />
      <CTA />
    </>
  );
}



/* ================= HERO ================= */

function Hero({ desktop = false }: { desktop?: boolean }) {
  const whatsappNumber = "94713807185";
  const whatsappMessage = "Hello, I would like to book a Sri Lanka tour.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className={`relative overflow-hidden ${desktop ? "h-[575px]" : "h-[470px]"}`}>
      <Image
        src="/images/hero.png"
        alt="Sri Lanka train journey"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#071a24]/65" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 text-white">
        <h1
          className={`font-serif font-bold leading-[0.9] tracking-[-1px] ${
            desktop ? "text-[56px]" : "text-[34px]"
          }`}
        >
          Discover Sri Lanka
          <br />
          <span className="text-[#d6a51d] italic">Your Way</span>
        </h1>

        <p className={`mt-7 max-w-[520px] leading-relaxed text-gray-200 ${desktop ? "text-[13px]" : "text-[11px]"}`}>
          Private tours, trusted drivers, and unforgettable journeys across the
          island.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[46px] w-[170px] bg-[#10d65c] hover:bg-[#0fc955] text-white text-[12px] font-medium rounded-[2px] flex items-center justify-center gap-2 transition"
          >
            <MessageCircle size={15} strokeWidth={2} />
            Book via WhatsApp
          </a>

          <a
            href="#tours"
            className="h-[46px] w-[140px] border border-white text-white hover:bg-white hover:text-[#071a24] text-[12px] font-medium rounded-[2px] flex items-center justify-center transition"
          >
            Explore Tours
          </a>
        </div>
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-5 bottom-5 z-20 w-[42px] h-[42px] rounded-full bg-[#10d65c] hover:bg-[#0fc955] text-white flex items-center justify-center shadow-md transition"
      >
        <MessageCircle size={22} strokeWidth={2} />
      </a>
    </section>
  );
}
 

/* ================= WHY TRAVEL SECTION ================= */

function WhyTravel({ desktop = false }: { desktop?: boolean }) {
  const cards = [
    {
      icon: Car,
      title: "Private Comfortable\nVehicles",
      text: "Modern, air-conditioned fleet\nfor your comfort.",
    },
    {
      icon: UserCheck,
      title: "Professional\nChauffeurs",
      text: "Experienced, English-speaking\nlocal guides.",
    },
    {
      icon: Map,
      title: "Tailor-Made\nItineraries",
      text: "Customized plans to suit your\npreferences.",
    },
    {
      icon: MessageCircle,
      title: "24/7 WhatsApp Support",
      text: "Always available to assist you\nduring your trip.",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] px-[55px] py-[62px]">
      {/* Section Title */}
      <div className="text-center mb-[58px]">
        <h2 className="font-serif text-[26px] font-bold text-[#071a24]">
          Why Travel with Ceylon Visitors
        </h2>

        <div className="w-[78px] h-[2px] bg-[#d8a51d] mx-auto mt-[12px]" />
      </div>

      {/* Cards */}
      <div
        className={`grid gap-[28px] ${
          desktop ? "grid-cols-4" : "grid-cols-1"
        }`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white h-[220px] rounded-[8px] flex flex-col items-center justify-center text-center px-8 shadow-sm"
          >
            {/* Icon Circle */}
            <div className="w-[54px] h-[54px] rounded-full bg-[#071a24] text-[#d8a51d] flex items-center justify-center mb-[22px]">
              <card.icon size={22} strokeWidth={1.8} />
            </div>

            {/* Card Title */}
            <h3 className="font-serif text-[16px] font-bold leading-[19px] text-[#071a24] whitespace-pre-line mb-[16px]">
              {card.title}
            </h3>

            {/* Card Text */}
            <p className="text-[13px] leading-[18px] text-[#4b5563] whitespace-pre-line">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
/* ================= DESTINATIONS SECTION ================= */


function Destinations({ desktop = false }: { desktop?: boolean }) {
  const places = [
    "/images/sigiriya.png",
    "/images/tea.png",
    "/images/temple.png",
    "/images/beach.png",
    "/images/mirissa.png",
    "/images/yala.png",
  ];

  return (
    <section id="tours" className="bg-white px-5 md:px-16 py-14">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="font-serif text-[26px] font-bold text-[#071a24]">
            Top Destinations
          </h2>
          <div className="w-[55px] h-[2px] bg-[#d8a51d] mt-3" />
        </div>

        <p className="text-[12px] font-semibold text-[#071a24] cursor-pointer">
          View All Packages →
        </p>
      </div>

      {/* Grid */}
      <div className={`grid gap-6 ${desktop ? "grid-cols-3" : "grid-cols-1"}`}>
        {places.map((img, index) => (
          <div
            key={index}
            className="relative h-[210px] rounded-[10px] overflow-hidden group"
          >
            <Image
              src={img}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= SERVICES SECTION ================= */

function Services({ desktop = false }: { desktop?: boolean }) {
  const services = [
    "Airport Transfers",
    "Chauffeur Service",
    "Day Tours",
    "Multi-Day Tours",
  ];

  return (
    <section
      id="services"
      className="relative px-5 md:px-20 py-[78px] text-white overflow-hidden"
    >
      <Image
        src="/images/services.jpg"
        alt="Sri Lanka beach"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#062330]/78" />

      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-[58px]">
          <h2 className="font-serif text-[34px] font-bold text-white">
            Our Services
          </h2>
          <div className="w-[74px] h-[4px] bg-[#d8b62f] mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards */}
        <div className={`grid gap-6 ${desktop ? "grid-cols-4" : "grid-cols-1"}`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#061522] rounded-[7px] px-8 py-9 min-h-[150px]"
            >
              <h3 className="font-serif text-[#e0bd2f] text-[18px] font-bold mb-5">
                {service}
              </h3>

              <p className="text-[14px] leading-[22px] text-gray-300 mb-7">
                Reliable and comfortable travel solutions tailored to your
                needs.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-8 text-[13px] font-bold text-white hover:text-[#e0bd2f] transition"
              >
                Learn More <span className="text-[20px]">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-[46px]">
          <button
            type="button"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="inline-flex items-center justify-center bg-[#d8b62f] hover:bg-[#c9a929] text-[#061522] font-bold text-[14px] w-[220px] h-[54px] rounded-[3px] transition cursor-pointer"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
/* ================= REVIEWS SECTION ================= */

function Reviews({ desktop = false }: { desktop?: boolean }) {
  const reviews = [
    {
      text: "“Best driver and smooth trip across Sri Lanka! Highly recommend for safe and comfortable travel.”",
      name: "Sarah M.",
      country: "UK",
    },
    {
      text: "“Our 7-day tour was perfectly organized. The vehicle was spotless and our guide was incredibly knowledgeable.”",
      name: "David & Lisa",
      country: "Australia",
    },
    {
      text: "“Our 7-day tour was perfectly organized. The vehicle was spotless and our guide was incredibly knowledgeable.”",
      name: "David & Lisa",
      country: "Australia",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] px-5 md:px-[22px] py-[66px]">
      {/* Section Title */}
      <div className="text-center mb-[28px]">
        <h2 className="font-serif text-[30px] font-bold text-[#071a24]">
          What Our Guests Say
        </h2>
        <div className="w-[58px] h-[3px] bg-[#d8b62f] mx-auto mt-[16px]" />
      </div>

      {/* Review Cards */}
      <div className={`grid gap-[30px] ${desktop ? "grid-cols-3" : "grid-cols-1"}`}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-[6px] px-[28px] py-[26px] min-h-[148px] shadow-sm"
          >
            <div className="flex text-[#d8b62f] mb-[12px]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>

            <p className="text-[14px] leading-[20px] text-[#273444] mb-[25px]">
              {review.text}
            </p>

            <h4 className="text-[13px] font-bold text-[#071a24]">
              {review.name}
            </h4>
            <p className="text-[11px] text-[#273444]">{review.country}</p>
          </div>
        ))}
      </div>

      {/* View All Reviews Button */}
      <div className="text-center mt-[42px]">
        <button
          type="button"
          onClick={() => {
            document.getElementById("reviews")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="bg-[#d8b62f] hover:bg-[#c9a929] text-[#071a24] font-bold text-[13px] w-[170px] h-[43px] rounded-[3px] transition cursor-pointer"
        >
          View All Reviews
        </button>
      </div>
    </section>
  );
}
/* ================= CTA SECTION ================= */

function CTA({ desktop = false }: { desktop?: boolean }) {
  const whatsappNumber = "94713807185";
  const whatsappMessage = "Hello, I would like to plan my Sri Lanka tour.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="contact"
      className="relative h-[245px] flex items-center justify-center text-center text-white overflow-hidden"
    >
      <Image
        src="/images/CTA.jpg"
        alt="Contact background"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#071a24]/82" />

      <div className="relative z-10 px-5">
        <h2 className="font-serif text-[34px] font-bold text-white leading-tight">
          Ready to Explore Sri Lanka?
        </h2>

        <p className="text-[14px] text-gray-200 mt-[18px]">
          Contact us today to start planning your perfect island getaway.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-[28px] h-[50px] w-[280px] bg-[#20d969] hover:bg-[#18c75e] text-white text-[14px] font-bold rounded-[3px] flex items-center justify-center gap-3 transition"
        >
          <MessageCircle size={19} strokeWidth={2} />
          Book via WhatsApp Now
        </a>
      </div>
    </section>
  );
}
