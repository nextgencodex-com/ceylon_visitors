import { Globe, Camera, Send, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

/* ================= FOOTER COMPONENT ================= */

export default function Footer({ desktop = false }: { desktop?: boolean }) {
  return (
    <footer className="bg-[#f4f4f4] px-5 md:px-[90px] py-[60px] text-[#6b7280]">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-4">
        {/* About */}
        <div>
          <p className="text-[13px] leading-[22px] mb-6">
            Your trusted partner for private tours, professional chauffeurs, and
            unforgettable journeys across the beautiful island of Sri Lanka.
          </p>

          <div className="flex gap-3">
            <IconBox>
              <Globe size={14} />
            </IconBox>
            <IconBox>
              <Camera size={14} />
            </IconBox>
            <IconBox>
              <Send size={14} />
            </IconBox>
          </div>
        </div>

        {/* Quick Links */}
        <FooterColumn
          title="Quick Links"
          items={["Home", "Tours", "Services", "About", "Reviews", "Contact"]}
        />

        {/* Services */}
        <FooterColumn
          title="Our Services"
          items={[
            "Airport Transfers",
            "Chauffeur Services",
            "Day Tours",
            "Multi-Day Packages",
            "Custom Itineraries",
          ]}
        />

        {/* Contact */}
        <div>
          <h3 className="font-serif text-[18px] font-bold text-[#071a24] mb-5">
            Contact Us
          </h3>

          <div className="space-y-4 text-[13px]">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-[#d8b62f]" />
              Colombo, Sri Lanka
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} className="text-[#d8b62f]" />
              +94 71 380 7185
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} className="text-[#d8b62f]" />
              hello@ceylonvisitors.com
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-[50px] pt-[20px] border-t border-gray-300 flex flex-col md:flex-row justify-between text-[12px]">
        <p>© 2026 Ceylon Visitors. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

/* ================= SUB COMPONENTS ================= */

function FooterColumn({ title, items }: any) {
  return (
    <div>
      <h3 className="font-serif text-[18px] font-bold text-[#071a24] mb-5">
        {title}
      </h3>

      <ul className="space-y-3 text-[13px]">
        {items.map((item: string, i: number) => {
          const linkMap: Record<string, string> = {
            Home: "/",
            Tours: "/ceylon_visitors_Tours",
            Services: "/ceylon_visitors_Services",
            About: "/ceylon_visitors_About",
            Reviews: "/ceylon_visitors_Reviews",
            Contact: "/ceylon_visitors_Contact",
          };

          return (
            <li key={i} className="hover:text-[#071a24] cursor-pointer">
              {linkMap[item] ? (
                <Link href={linkMap[item]}>{item}</Link>
              ) : (
                item
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function IconBox({ children }: any) {
  return (
    <div className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:bg-[#e5e7eb] transition">
      {children}
    </div>
  );
}
