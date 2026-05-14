"use client";

import { useEffect, useState } from "react";
import { Languages } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

const supportedLanguages = [
  { code: "en", label: "English" },
  { code: "si", label: "සිංහල" },
  { code: "ta", label: "தமிழ்" },
  { code: "hi", label: "हिन्दी" },
  { code: "zh-CN", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "ru", label: "Русский" },
  { code: "ar", label: "العربية" },
] as const;

type LanguageCode = (typeof supportedLanguages)[number]["code"];

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<LanguageCode>("en");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("ceylon-visitors-language") as LanguageCode | null;
    if (storedLanguage && supportedLanguages.some((item) => item.code === storedLanguage)) {
      setLanguage(storedLanguage);
    }

    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        if (!window.google?.translate?.TranslateElement) return;

        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,si,ta,hi,zh-CN,ja,ko,fr,de,es,ru,ar",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };

      const existingScript = document.getElementById("google-translate-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  const applyLanguage = (nextLanguage: LanguageCode) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("ceylon-visitors-language", nextLanguage);

    if (nextLanguage === "en") {
      document.cookie = "googtrans=; path=/; max-age=0";
      document.cookie = "googtrans=/en/en; path=/";
    } else {
      document.cookie = `googtrans=/en/${nextLanguage}; path=/`;
    }

    window.location.reload();
  };

  return (
    <div className="relative inline-flex items-center gap-2">
      <Languages size={16} className="text-[#071a24]" />
      <select
        aria-label="Select language"
        value={language}
        onChange={(e) => applyLanguage(e.target.value as LanguageCode)}
        className="h-[36px] rounded-full border border-gray-200 bg-white px-3 text-[12px] font-semibold text-[#071a24] outline-none transition hover:border-[#1597ff]"
      >
        {supportedLanguages.map((item) => (
          <option key={item.code} value={item.code}>
            {item.label}
          </option>
        ))}
      </select>

      <div id="google_translate_element" className="hidden" />
    </div>
  );
}