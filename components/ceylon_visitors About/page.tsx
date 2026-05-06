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
      <section className="relative px-5 md:px-[105px] py-[65px]">
        <div
          className={`grid gap-[65px] items-center ${
            desktop ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {/* Left Text */}
          <div>
            <h2 className="font-serif text-[24px] font-bold text-[#071a24]">
              Our Story
            </h2>

            <div className="w-[58px] h-[3px] bg-[#d8b62f] mt-4 mb-7" />

            <p className="text-[13px] leading-[22px] text-[#4b5563] mb-5">
              We are a Sri Lanka-based travel service dedicated to providing
              safe, comfortable, and memorable journeys for visitors from around
              the world.
            </p>

            <p className="text-[13px] leading-[22px] text-[#4b5563] mb-5">
              Founded with a passion for sharing the beauty of our island home,
              Ceylon Visitors has grown into a trusted partner for travelers
              seeking authentic experiences without compromising on comfort or
              safety.
            </p>

            <p className="text-[13px] leading-[22px] text-[#4b5563] mb-8">
              Whether you’re here for a quick business trip, a romantic
              honeymoon, or a month-long exploration, our team is committed to
              making your time in Sri Lanka truly unforgettable.
            </p>

            <h3 className="font-serif text-[18px] font-bold mb-5">
              Why Trust Us
            </h3>

            <div className="grid grid-cols-2 gap-y-4 text-[13px] font-semibold text-[#071a24]">
              {[
                "Experienced drivers",
                "Clean, modern vehicles",
                "Transparent pricing",
                "Local expertise",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-[#d8b62f]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-[170px] rounded-[8px] overflow-hidden">
                <Image src="/images/About/yala.jpg" alt="" fill className="object-cover" />
              </div>

              <div className="relative h-[145px] rounded-[8px] overflow-hidden">
                <Image src="/images/About/beach.jpg" alt="" fill className="object-cover" />
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <div className="relative h-[145px] rounded-[8px] overflow-hidden">
                <Image src="/images/About/driver.jpg" alt="" fill className="object-cover" />
              </div>

              <div className="relative h-[170px] rounded-[8px] overflow-hidden">
                <Image src="/images/About/temple-red.jpg" alt="" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/94713807185"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-8 top-1/2 w-[42px] h-[42px] rounded-full bg-[#20d969] text-white flex items-center justify-center shadow-lg"
        >
          <MessageCircle size={22} />
        </a>
      </section>
    </>
  );
}