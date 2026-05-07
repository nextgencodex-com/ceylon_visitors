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
        <Image src="/images/Contact/contact-hero.jpg" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#071a24]/70" />

        <div className="relative z-10 px-5">
          <p className="text-[#d8b62f] text-[12px] font-semibold mb-2">
            Reach Out
          </p>

          <h1 className="font-serif text-[44px] md:text-[52px] font-bold">
            Get in Touch
          </h1>

          <p className="text-[14px] max-w-[520px] mx-auto mt-4 text-gray-200 leading-[22px]">
            Have questions or ready to book your Sri Lankan adventure? We’re here
            to help 24/7.
          </p>

          <div className="w-[55px] h-[3px] bg-[#d8b62f] mx-auto mt-6" />
        </div>
      </section>

      {/* Content */}
      <section
        className={`relative px-5 md:px-[115px] py-[60px] grid gap-[60px] ${
          desktop ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {/* Contact Information */}
        <div>
          <h2 className="font-serif text-[24px] font-bold mb-7">
            Contact Information
          </h2>

          <p className="text-[13px] leading-[22px] text-[#4b5563] mb-8 max-w-[410px]">
            The fastest way to reach us is via WhatsApp. We typically respond
            within minutes.
          </p>

          <InfoCard
            icon={<MessageCircle size={19} />}
            title="WhatsApp (Fastest)"
            lines={["+94 71 380 7185", "Available 24/7"]}
            green
          />

          <InfoCard
            icon={<Mail size={19} />}
            title="Email"
            lines={["hello@ceylonvisitors.com"]}
          />

          <InfoCard
            icon={<MapPin size={19} />}
            title="Location"
            lines={["Colombo, Sri Lanka", "Operating island-wide"]}
          />
        </div>

        {/* Form */}
        <div className="bg-white rounded-[10px] p-[32px] shadow-sm">
          <h2 className="font-serif text-[21px] font-bold mb-6">
            Send us a Message
          </h2>

          <form className="space-y-5">
            <Input label="Full Name" placeholder="John Doe" />
            <Input label="Email Address" placeholder="john@example.com" />
            <Input label="Estimated Travel Dates" placeholder="e.g., Oct 15 - Oct 25" />

            <div>
              <label className="block text-[12px] font-bold mb-2">
                Your Message
              </label>
              <textarea
                placeholder="Tell us about your travel plans..."
                className="w-full h-[110px] bg-[#f3f4f6] rounded-[5px] px-4 py-3 text-[13px] outline-none resize-none"
              />
            </div>

            <button
              type="button"
              className="w-full h-[50px] bg-[#1597ff] hover:bg-[#057ddd] text-white text-[13px] font-bold rounded-[5px] flex items-center justify-center gap-2 transition"
            >
              <Send size={15} />
              Send Message
            </button>
          </form>
        </div>

        {/* Floating WhatsApp */}
        <a
          href="https://wa.me/94713807185"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-8 bottom-8 z-50 w-[46px] h-[46px] rounded-full bg-[#20d969] text-white flex items-center justify-center shadow-lg"
        >
          <MessageCircle size={23} />
        </a>
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
    <div className="bg-white rounded-[8px] p-6 mb-5 flex gap-4 shadow-sm max-w-[450px]">
      <div
        className={`w-[38px] h-[38px] rounded-full flex items-center justify-center ${
          green ? "bg-green-100 text-[#20d969]" : "bg-[#f3f4f6] text-[#071a24]"
        }`}
      >
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-[13px] mb-1">{title}</h3>
        {lines.map((line, i) => (
          <p
            key={i}
            className={`text-[13px] ${
              green && i === 1 ? "text-[#20d969]" : "text-[#4b5563]"
            }`}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-[12px] font-bold mb-2">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full h-[45px] bg-[#f3f4f6] rounded-[5px] px-4 text-[13px] outline-none"
      />
    </div>
  );
}