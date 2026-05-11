import Image from "next/image";
import { CheckCircle, MessageCircle } from "lucide-react";

export default function CeylonVisitorsAbout() {
  return (
    <main className="bg-white text-[#071a24]">
      {/* ================= DESKTOP VIEW ================= */}
      <section className="hidden md:block">
        <AboutContent desktop />
      </section>

      {/* ================= MOBILE VIEW ================= */}
      <section className="block md:hidden">
        <AboutContent />
      </section>
    </main>
  );
}

function AboutContent({ desktop = false }: { desktop?: boolean }) {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[420px] flex items-center justify-center text-center text-white overflow-hidden rounded-[34px] mx-5 md:mx-[88px]">
        <Image
          src="/images/About/about-hero.jpg"
          alt="Sri Lankan temple art"
          fill
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#071a24]/65" />

        <div className="relative z-10 px-5">
          <p className="text-[#d8b62f] text-[12px] font-semibold mb-3">
            Our Story
          </p>

          <h1 className="font-serif text-[38px] md:text-[48px] font-bold leading-tight">
            About Ceylon Visitors
          </h1>

          <p className="text-[13px] md:text-[14px] max-w-[560px] mx-auto mt-4 leading-[22px] text-gray-200">
            Dedicated to providing safe, comfortable, and memorable journeys
            across the pearl of the Indian Ocean.
          </p>

          <div className="w-[70px] h-[3px] bg-[#d8b62f] mx-auto mt-6" />
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="relative px-5 md:px-[105px] py-[80px]">
        <div
          className={`grid gap-[80px] items-center ${
            desktop ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {/* Left Text */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-[#071a24] leading-tight">
                Crafting Memories in <br/> Sri Lanka
              </h2>
              <div className="w-[60px] h-[3px] bg-[#d8b62f] mt-4 mb-2" />
            </div>

            <p className="text-[14px] leading-[26px] text-[#4b5563]">
              We are a Sri Lanka-based travel service dedicated to providing
              safe, comfortable, and memorable journeys for visitors from around
              the world.
            </p>

            <p className="text-[14px] leading-[26px] text-[#4b5563]">
              Founded with a passion for sharing the beauty of our island home,
              Ceylon Visitors has grown into a trusted partner for travelers
              seeking authentic experiences without compromising on comfort or
              safety. From our golden beaches to the ancient heritage sites and 
              lush highlands, we organize itineraries that inspire awe.
            </p>

            <p className="text-[14px] leading-[26px] text-[#4b5563] pb-2">
              Whether you’re here for a quick business trip, a romantic
              honeymoon, or a month-long exploration, our team is committed to
              making your time in Sri Lanka truly unforgettable.
            </p>

            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 md:p-8 mt-4">
              <h3 className="font-serif text-[22px] font-bold mb-6 text-[#071a24]">
                Why Trust Ceylon Visitors?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] font-semibold text-[#273444]">
                {[
                  "Experienced Tour Guides",
                  "Modern, A/C Vehicles",
                  "Transparent Pricing",
                  "24/7 Local Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#d8b62f] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="grid grid-cols-2 gap-5 relative">
            <div className="space-y-5">
              <div className="relative h-[220px] rounded-2xl overflow-hidden shadow-lg group">
                <Image src="/images/About/yala.jpg" alt="Yala Safari" fill className="object-cover group-hover:scale-105 transition duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>

              <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg group">
                <Image src="/images/About/beach.jpg" alt="Sri Lanka Beaches" fill className="object-cover group-hover:scale-105 transition duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </div>

            <div className="space-y-5 mt-12">
              <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg group">
                <Image src="/images/About/driver.jpg" alt="Our Drivers" fill className="object-cover group-hover:scale-105 transition duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>

              <div className="relative h-[220px] rounded-2xl overflow-hidden shadow-lg group">
                <Image src="/images/About/temple-red.jpg" alt="Cultural Sites" fill className="object-cover group-hover:scale-105 transition duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
