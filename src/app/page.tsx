"use client";
import { useState } from "react";

const texts = {
  pt: {
    title: "Mail2TTS: Central de Tickets Inteligente",
    desc: "Transforme a experiência dos seus usuários com uma interface simples e moderna para abertura de tickets. Integre facilmente com Zammad ou outros sistemas de ticketing. Ideal para empresas que buscam agilidade, padronização e integração.",
    items: [
      "Interface centralizada e intuitiva",
      "Integração nativa com Zammad",
      "Possibilidade de integração com outros sistemas",
      "Customização para sua empresa",
      "Segurança e privacidade",
    ],
    button: "Teste grátis agora",
  },
  en: {
    title: "Mail2TTS: Smart Ticket Center",
    desc: "Transform your users' experience with a simple and modern interface for ticket creation. Easily integrate with Zammad or other ticketing systems. Perfect for companies seeking agility, standardization, and integration.",
    items: [
      "Centralized and intuitive interface",
      "Native integration with Zammad",
      "Possible integration with other systems",
      "Customization for your company",
      "Security and privacy",
    ],
    button: "Try it free now",
  },
  it: {
    title: "Mail2TTS: Centro Ticket Intelligente",
    desc: "Trasforma l'esperienza dei tuoi utenti con un'interfaccia semplice e moderna per l'apertura dei ticket. Integra facilmente con Zammad o altri sistemi di ticketing. Ideale per aziende che cercano agilità, standardizzazione e integrazione.",
    items: [
      "Interfaccia centralizzata e intuitiva",
      "Integrazione nativa con Zammad",
      "Possibilità di integrazione con altri sistemi",
      "Personalizzazione per la tua azienda",
      "Sicurezza e privacy",
    ],
    button: "Prova gratis ora",
  },
};

export default function Landing() {
  const [lang, setLang] = useState("pt");
  const t = texts[lang as keyof typeof texts];
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#232323] font-sans">
      <div className="w-full max-w-3xl mx-auto p-8">
        <div className="bg-[#2D2D2D] rounded-2xl shadow-2xl border border-gray-800 p-10 flex flex-col items-center text-center">
          <div className="mb-6 flex gap-2 justify-end w-full">
            <select value={lang} onChange={e => setLang(e.target.value)} className="bg-gray-700 text-gray-100 rounded px-3 py-1">
              <option value="pt">Português</option>
              <option value="en">English</option>
              <option value="it">Italiano</option>
            </select>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">{t.title}</h1>
          <p className="text-lg text-gray-300 mb-6 max-w-xl">{t.desc}</p>
          <ul className="text-left text-gray-300 mb-8 space-y-2 max-w-lg">
            {t.items.map((item, idx) => (
              <li key={idx}><span className="font-semibold text-gray-100">•</span> {item}</li>
            ))}
          </ul>
          <a
            href="/form-ticket"
            className="mt-4 w-full sm:w-auto bg-gray-700 hover:bg-gray-800 text-gray-100 rounded-lg px-8 py-4 font-semibold text-lg shadow transition"
          >
            {t.button}
          </a>
        </div>
      </div>
    </div>
  );
}
