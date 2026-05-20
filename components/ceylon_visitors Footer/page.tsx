import { Globe, Camera, Send, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

/* ================= FOOTER COMPONENT ================= */

export default function Footer({ desktop = false }: { desktop?: boolean }) {
  return (
    <footer className="bg-[#f4f4f4] border-t border-gray-300 px-5 md:px-[90px] py-[60px] text-[#6b7280]">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-4">
        {/* About */}
        <div>
          <p className="text-[13px] leading-[22px] mb-6">
            Your trusted partner for private tours, professional chauffeurs, and
            unforgettable journeys across the beautiful island of Sri Lanka.
          </p>

          {/* <div className="flex gap-3">
            <IconBox>
              <Globe size={14} />
            </IconBox>
            <IconBox>
              <Camera size={14} />
            </IconBox>
            <IconBox>
              <Send size={14} />
            </IconBox>
          </div> */}
        </div>

        {/* Quick Links */}
        <FooterColumn
          title="Quick Links"
          items={["Home", "Tours", "Services", "About", "Gallery", "Contact"]}
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
              101/B, Kahatapitiya, Hanwella, Colombo
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} className="text-[#d8b62f]" />
              +94 77 130 3301
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} className="text-[#d8b62f]" />
              ceylonvisitortours@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-[50px] pt-[20px] border-t border-gray-300 text-[12px]">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:items-center">
          <p className="text-center md:text-left">© 2026 Ceylon Visitors. All rights reserved.</p>

          <p className="text-center font-semibold text-gray-500">
            Developed By NextGen CodeX (PVT) LTD
          </p>

          <div className="flex justify-center md:justify-end gap-6 font-medium">
            <Link href="/privacy-policy" className="hover:text-[#071a24] transition">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#071a24] transition">Terms of Service</Link>
          </div>
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
            Gallery: "/ceylon_visitors_Gallery",
            Contact: "/ceylon_visitors_Contact",
            "Airport Transfers": "/ceylon_visitors_Services",
            "Chauffeur Services": "/ceylon_visitors_Services",
            "Day Tours": "/ceylon_visitors_Services",
            "Multi-Day Packages": "/ceylon_visitors_Services",
            "Custom Itineraries": "/ceylon_visitors_Services",
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
