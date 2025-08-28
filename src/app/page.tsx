"use client";
import { useState } from "react";
import { Card } from "../components/card";
import { texts } from "../constants/home/texts";
import { LanguageBtn } from "../components/languageBtn";

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = texts[lang as keyof typeof texts];
  return (
    <Card>
      <LanguageBtn lang={lang} setLang={setLang} />
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
        {t.title}
      </h1>
      <p className="text-lg text-gray-300 mb-6 max-w-xl">{t.desc}</p>
      <ul className="text-left text-gray-300 mb-8 space-y-2 max-w-lg">
        {t.items.map((item, idx) => (
          <li key={idx}>
            <span className="font-semibold text-gray-100">•</span> {item}
          </li>
        ))}
      </ul>
      <a
        href="/form-ticket"
        className="mt-4 w-full sm:w-auto bg-gray-700 hover:bg-gray-800 text-gray-100 rounded-lg px-8 py-4 font-semibold text-lg shadow transition"
      >
        {t.button}
      </a>
    </Card>
  );
}
