"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, MessageCircle } from "lucide-react";

export default function CeylonVisitorsTours() {
  return (
    <main className="bg-[#f4f4f4] text-[#071a24]">
      {/* Desktop View - only desktop */}
      <section className="hidden md:block">
        <ToursPage desktop />
      </section>

      {/* Mobile View - only mobile */}
      <section className="block md:hidden">
        <ToursPage />
      </section>
    </main>
  );
}

function ToursPage({ desktop = false }: { desktop?: boolean }) {
  const whatsapp = "https://wa.me/94771303301";

  const tours = [
    {
      title: "Heritage Tour",
      img: "/images/tours/1.jpg",
      duration: "11 Days",
      highlights: ["Perfect blend of heritage and culture", "Ancient temples", "Historical monuments", "Cultural immersion"],
    },
    {
      title: "Hill country Tour",
      badge: "Most Popular",
      img: "/images/tours/2.jpg",
      duration: "Custom",
      highlights: ["Stunning beaches", "Ancient temples", "Vibrant markets", "Tea plantations"],
    },
    {
      title: "Ramayana Tour",
      img: "/images/tours/3.jpg",
      duration: "10 Days",
      highlights: ["Historic Ramayana sites", "Spiritual journey", "Cultural heritage", "Scenic landscapes"],
    },
    {
      title: "Tropical Paradise Tour",
      img: "/images/tours/1.jpg",
      duration: "14 Days",
      highlights: ["Unforgettable 14-day experience", "Tropical beaches", "Lush rainforests", "Wildlife encounters"],
    },
    {
      title: "Lanka Serenity Tour",
      img: "/images/tours/2.jpg",
      duration: "13 Days",
      highlights: ["Beaches and safaris", "Relaxing getaways", "Nature retreats", "Cultural sites"],
    },
    {
      title: "Sri Lanka Safari Tour",
      img: "/images/tours/3.jpg",
      duration: "8 Days",
      highlights: ["Galle's heritage", "Wildlife safaris", "National parks", "Coastal beauty"],
    },
    {
      title: "Wildlife of Sri Lanka Tour",
      img: "/images/tours/1.jpg",
      duration: "8 Days",
      highlights: ["Unforgettable wildlife encounters", "National parks", "Nature exploration", "Photography"],
    },
    {
      title: "Classic Sri Lanka Tour",
      badge: "Must Try",
      img: "/images/tours/2.jpg",
      duration: "12 Days",
      highlights: ["Culture and nature", "Iconic landmarks", "Comprehensive journey", "Authentic experiences"],
    },
    {
      title: "Cultural Heritage Trails Tour",
      img: "/images/tours/3.jpg",
      duration: "7 Days",
      highlights: ["Ultimate 7-day tour", "Blending adventure", "Cultural heritage", "Local experiences"],
    },
    {
      title: "Round Tour",
      img: "/images/tours/1.jpg",
      duration: "11 Days",
      highlights: ["Perfect blend of sights", "Island exploration", "Varied landscapes", "Memorable journey"],
    },
    {
      title: "Beach Tour",
      img: "/images/tours/2.jpg",
      duration: "5 Days",
      highlights: ["Perfect coastal getaway", "Sun and sand", "Water sports", "Relaxing resorts"],
    },
    {
      title: "sun & sand Tour",
      img: "/images/tours/3.jpg",
      duration: "9 Days",
      highlights: ["Beaches and safaris", "Culture and landscapes", "Ocean views", "Tranquil experience"],
    },
    {
      title: "Lush Landscapes Tour",
      img: "/images/tours/1.jpg",
      duration: "7 Days",
      highlights: ["Sri Lanka's highlights", "Lush landscapes", "Tea country", "Scenic beauty"],
    },
    {
      title: "Eco Tour",
      img: "/images/tours/2.jpg",
      duration: "7 Days",
      highlights: ["Best of Sri Lanka's nature", "Eco-friendly travel", "Sustainable tourism", "Wildlife tracking"],
    },
    {
      title: "Honeymoon Tour",
      img: "/images/tours/3.jpg",
      duration: "9 Days",
      highlights: ["Romantic getaway", "Luxury accommodations", "Private moments", "Unforgettable journey"],
    },
    {
      title: "Horizon Tour",
      img: "/images/tours/1.jpg",
      duration: "7 Days",
      highlights: ["Sri Lanka's highlights", "Broad perspectives", "Adventure trails", "Scenic views"],
    },
    {
      title: "Cultural Tour",
      img: "/images/tours/2.jpg",
      duration: "14 Days",
      highlights: ["Explore Ancient Cities", "Breathtaking landscapes", "Deep cultural dive", "Historic sites"],
    },
    {
      title: "Nature Tour",
      img: "/images/tours/3.jpg",
      duration: "Custom",
      highlights: ["Explore Sri Lanka's beauty", "Ancient sites", "Lush landscapes", "Back to nature"],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center text-center text-white overflow-hidden rounded-[34px] mx-5 md:mx-[88px]">
        <Image
          src="/images/tours/tours-hero.jpg"
          alt="Tours Hero"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#071a24]/65" />

        <div className="relative z-10 px-5">
          <p className="text-[#d8b62f] text-[12px] mb-2">Curated Experiences</p>

          <h1 className="font-serif text-[34px] md:text-[52px] font-bold">
            Explore Our Tour Packages
          </h1>

          <p className="text-[13px] md:text-[14px] mt-3 text-gray-200 max-w-[550px] mx-auto">
            Carefully crafted itineraries to give you the best experience of Sri
            Lanka.
          </p>

          <div className="w-[60px] h-[3px] bg-[#d8b62f] mx-auto mt-5" />
        </div>
      </section>

      {/* Cards */}
      <section
        className={`px-5 md:px-[80px] py-[60px] grid gap-[30px] ${
          desktop ? "grid-cols-3" : "grid-cols-1"
        }`}
      >
        {tours.map((tour, i) => (
          <div
            key={i}
            className="bg-white rounded-[10px] overflow-hidden shadow-sm"
          >
            <div className="relative h-[180px]">
              <Image
                src={tour.img}
                alt={tour.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {tour.badge && (
                <span
                  className={`absolute top-3 right-3 text-[11px] px-3 py-1 rounded-full font-bold ${
                    tour.badge === "Most Popular"
                      ? "bg-yellow-400 text-black"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {tour.badge}
                </span>
              )}
            </div>

            <div className="p-5">
              <h3 className="font-serif text-[18px] font-bold mb-1">
                {tour.title}
              </h3>

              <div className="text-[12px] text-gray-500 mb-3 mt-3 space-y-1">
                <p className="flex items-center gap-2 font-medium text-black">
                  <Clock size={15} className="text-[#d8b62f]" /> {tour.duration}
                </p>
              </div>

              <ul className="text-[12px] mb-4 space-y-1">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-[#d8b62f]">✔</span> {h}
                  </li>
                ))}
              </ul>

              <Link
                href="/ceylon_visitors_TourDetails"
                className="w-full h-[38px] bg-[#1597ff] hover:bg-[#057ddd] text-white text-[12px] font-bold rounded-[4px] flex items-center justify-center transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
