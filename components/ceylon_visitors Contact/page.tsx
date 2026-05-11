"use client";

import Image from "next/image";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";

export default function CeylonVisitorsContact() {
  return (
    <main className="bg-[#f4f4f4] text-[#071a24]">
      {/* Desktop View */}
      <section className="hidden md:block">
        <ContactPage desktop />
      </section>

      {/* Mobile View */}
      <section className="block md:hidden">
        <ContactPage />
      </section>
    </main>
  );
}

function ContactPage({ desktop = false }: { desktop?: boolean }) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] flex items-center justify-center text-center text-white overflow-hidden rounded-[34px] mx-5 md:mx-[88px]">
        <Image src="/images/Contact/contact-hero.jpg" alt="Contact Us" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#071a24]/70" />

        <div className="relative z-10 px-5">
          <p className="text-[#d8b62f] text-[12px] font-semibold mb-3 tracking-wider uppercase">
            Reach Out
          </p>

          <h1 className="font-serif text-[44px] md:text-[52px] font-bold leading-tight">
            Get in Touch
          </h1>

          <p className="text-[14px] md:text-[15px] max-w-[520px] mx-auto mt-4 text-gray-200 leading-[26px]">
            Have questions or ready to book your Sri Lankan adventure? We’re here
            to help 24/7.
          </p>

          <div className="w-[60px] h-[3px] bg-[#d8b62f] mx-auto mt-6" />
        </div>
      </section>

      {/* Content */}
      <section
        className={`relative px-5 md:px-[105px] py-[80px] grid gap-[80px] ${
          desktop ? "grid-cols-2" : "grid-cols-1"
        } items-start`}
      >
        {/* Contact Information */}
        <div className="space-y-4">
          <div>
            <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-[#071a24] leading-tight">
              Contact Information
            </h2>
            <div className="w-[60px] h-[3px] bg-[#d8b62f] mt-4 mb-6" />
          </div>

          <p className="text-[15px] leading-[26px] text-[#4b5563] pb-6 max-w-[450px]">
            The fastest way to reach us is via WhatsApp. We typically respond
            within minutes. Let us know how we can assist you.
          </p>

          <InfoCard
            icon={<MessageCircle size={22} />}
            title="WhatsApp & Phone"
            lines={["+94 77 130 3301", "Available 24/7 for you"]}
            green
          />

          <InfoCard
            icon={<Mail size={22} />}
            title="Email"
            lines={["ceylonvisitortours@gmail.com"]}
          />

          <LocationMapCard />
        </div>

        {/* Form */}
        <div className="bg-white rounded-[20px] p-[40px] md:p-[50px] shadow-xl border border-gray-100">
          <h2 className="font-serif text-[30px] font-bold mb-8 text-[#071a24]">
            Send us a Message
          </h2>

          <form 
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get("name");
              const email = formData.get("email");
              const dates = formData.get("dates");
              const message = formData.get("message");
              
              const text = `Hi Ceylon Visitors!\n\nName: ${name}\nEmail: ${email}\nTravel Dates: ${dates}\n\nMessage: ${message}`;
              const whatsappUrl = `https://wa.me/94771303301?text=${encodeURIComponent(text)}`;
              window.open(whatsappUrl, "_blank");
            }}
          >
            <Input name="name" label="Full Name" placeholder="John Doe" />
            <Input name="email" label="Email Address" placeholder="john@example.com" />
            <Input name="dates" label="Estimated Travel Dates" placeholder="e.g., Oct 15 - Oct 25" />

            <div>
              <label className="block text-[13px] font-bold mb-3 text-[#273444]">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your travel plans..."
                className="w-full h-[140px] bg-[#f8f9fa] border border-gray-200 rounded-[10px] px-5 py-4 text-[14px] text-[#071a24] outline-none focus:border-[#1597ff] focus:ring-1 focus:ring-[#1597ff] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full h-[58px] bg-[#1597ff] hover:bg-[#057ddd] text-white text-[15px] font-bold rounded-[10px] flex items-center justify-center gap-3 transition-colors duration-300 shadow-md mt-6"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </section>

    </>
  );
}

function InfoCard({
  icon,
  title,
  lines,
  green = false,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  green?: boolean;
}) {
  return (
    <div className="bg-white rounded-[12px] p-[24px] mb-6 flex gap-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100 max-w-[480px]">
      <div
        className={`w-[48px] h-[48px] rounded-full flex items-center justify-center flex-shrink-0 ${
          green ? "bg-green-100 text-[#10d65c]" : "bg-[#f8f9fa] text-[#1597ff]"
        }`}
      >
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-[16px] text-[#071a24] mb-2">{title}</h3>
        {lines.map((line, i) => (
          <p
            key={i}
            className={`text-[14px] leading-[22px] ${
              green && i === 1 ? "text-[#10d65c] font-medium" : "text-[#4b5563]"
            }`}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function LocationMapCard() {
  return (
    <div className="bg-white rounded-[12px] p-[24px] mb-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 max-w-[480px]">
      <div className="flex gap-5 mb-5">
        <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center flex-shrink-0 bg-[#f8f9fa] text-[#1597ff]">
          <MapPin size={22} />
        </div>

        <div>
          <h3 className="font-bold text-[16px] text-[#071a24] mb-2">Location</h3>
          <p className="text-[14px] leading-[22px] text-[#4b5563]">101/B, Kahatapitiya</p>
          <p className="text-[14px] leading-[22px] text-[#4b5563]">Hanwella, Colombo</p>
        </div>
      </div>

      <div className="rounded-[10px] overflow-hidden border border-gray-200 h-[280px] w-full">
        <iframe
          src="https://maps.google.com/maps?q=Kahatapitiya,Hanwella,Colombo&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

function Input({ label, placeholder, name }: { label: string; placeholder: string; name?: string }) {
  return (
    <div>
      <label className="block text-[13px] font-bold mb-3 text-[#273444]">{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        className="w-full h-[54px] bg-[#f8f9fa] border border-gray-200 rounded-[10px] px-5 text-[14px] text-[#071a24] outline-none focus:border-[#1597ff] focus:ring-1 focus:ring-[#1597ff] transition-all"
      />
    </div>
  );
}
