"use client";

import { useState } from "react";

const texts = {
  pt: {
    subject: "Assunto",
    category: "Categoria",
    type: "Tipo",
    item: "Item",
    impact: "Impacto",
    urgency: "Urgência",
    description: "Descrição",
    check: "Ver resumo",
    email: "Criar Email",
    select: "Selecione",
    summary: "Resumo",
  },
  en: {
    subject: "Subject",
    category: "Category",
    type: "Type",
    item: "Item",
    impact: "Impact",
    urgency: "Urgency",
    description: "Description",
    check: "Check",
    email: "Create Email",
    select: "Select",
    summary: "Summary",
  },
  it: {
    subject: "Oggetto",
    category: "Categoria",
    type: "Tipo",
    item: "Elemento",
    impact: "Impatto",
    urgency: "Urgenza",
    description: "Descrizione",
    check: "Vedi riepilogo",
    email: "Crea Email",
    select: "Seleziona",
    summary: "Riepilogo",
  },
};

const categories: { [key: string]: string[] } = {
  Work: ["Report", "Meeting", "Task"],
  Personal: ["Family", "Friend", "Event"],
  Finance: ["Invoice", "Payment", "Budget"],
};

const types: { [key: string]: string[] } = {
  Report: ["Weekly", "Monthly", "Annual"],
  Meeting: ["Online", "In-person"],
  Task: ["Urgent", "Routine"],
  Family: ["Birthday", "Reunion"],
  Friend: ["Catch-up", "Party"],
  Event: ["Conference", "Webinar"],
  Invoice: ["Pending", "Paid"],
  Payment: ["Credit", "Debit"],
  Budget: ["Planning", "Review"],
};

const items = {
  "Weekly": ["Summary", "Details"],
  "Monthly": ["Summary", "Details"],
  "Annual": ["Summary", "Details"],
  "Online": ["Zoom", "Teams"],
  "In-person": ["Office", "Cafe"],
  "Urgent": ["ASAP", "Today"],
  "Routine": ["Tomorrow", "Next week"],
  "Birthday": ["Gift", "Card"],
  "Reunion": ["Venue", "Date"],
  "Catch-up": ["Call", "Meet"],
  "Party": ["Invite", "Location"],
  "Conference": ["Ticket", "Schedule"],
  "Webinar": ["Link", "Time"],
  "Pending": ["Amount", "Due date"],
  "Paid": ["Receipt", "Confirmation"],
  "Credit": ["Card", "Bank"],
  "Debit": ["Card", "Bank"],
  "Planning": ["Goal", "Steps"],
  "Review": ["Result", "Feedback"],
};

const impacts = ["Low", "Medium", "High"];
const urgencies = ["Normal", "Urgent", "Critical"];

export default function FormTicket() {
  const [lang, setLang] = useState("pt");
  const t = texts[lang as keyof typeof texts];
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [item, setItem] = useState("");
  const [impact, setImpact] = useState("");
  const [urgency, setUrgency] = useState("");
  const [description, setDescription] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [showEmailBtn, setShowEmailBtn] = useState(false);

  const handleCheck = () => {
    setShowSummary(true);
    setShowEmailBtn(true);
  };

  const handleCreateEmail = () => {
    const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Category: ${category}\nType: ${type}\nItem: ${item}\nImpact: ${impact}\nUrgency: ${urgency}\nDescription: ${description}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#232323] font-sans">
      <div className="bg-[#2D2D2D] rounded-2xl shadow-2xl p-8 flex flex-col sm:flex-row gap-10 w-full max-w-4xl border border-[#232323]">
        <form className="flex flex-col gap-6 w-full sm:w-2/3">
          <div className="mb-2 flex gap-2 justify-end w-full">
            <select value={lang} onChange={e => setLang(e.target.value)} className="bg-gray-700 text-gray-100 rounded px-3 py-1">
              <option value="pt">Português</option>
              <option value="en">English</option>
              <option value="it">Italiano</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">{t.subject}</label>
            <input
              type="text"
              className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder={t.subject}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">{t.category}</label>
            <select
              className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
              value={category}
              onChange={e => {
                setCategory(e.target.value);
                setType("");
                setItem("");
              }}
            >
              <option value="">{t.select} {t.category.toLowerCase()}</option>
              {Object.keys(categories).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {category && (
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">{t.type}</label>
              <select
                className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
                value={type}
                onChange={e => {
                  setType(e.target.value);
                  setItem("");
                }}
              >
                <option value="">{t.select} {t.type.toLowerCase()}</option>
                {categories[category].map((tt: string) => (
                  <option key={tt} value={tt}>{tt}</option>
                ))}
              </select>
            </div>
          )}

          {type && (
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">{t.item}</label>
              <select
                className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
                value={item}
                onChange={e => setItem(e.target.value)}
              >
                <option value="">{t.select} {t.item.toLowerCase()}</option>
                {types[type]?.map((ii: string) => (
                  <option key={ii} value={ii}>{ii}</option>
                ))}
              </select>
            </div>
          )}

          {item && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">{t.impact}</label>
                <select
                  className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
                  value={impact}
                  onChange={e => setImpact(e.target.value)}
                >
                  <option value="">{t.select} {t.impact.toLowerCase()}</option>
                  {impacts.map(im => (
                    <option key={im} value={im}>{im}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">{t.urgency}</label>
                <select
                  className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
                  value={urgency}
                  onChange={e => setUrgency(e.target.value)}
                >
                  <option value="">{t.select} {t.urgency.toLowerCase()}</option>
                  {urgencies.map(u => (
                    <option key={u} value={u}>{u}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <button
            type="button"
            className="mt-6 w-full bg-gray-700 hover:bg-gray-800 text-gray-100 rounded-lg px-6 py-3 font-semibold text-base shadow transition disabled:opacity-50"
            onClick={handleCheck}
            disabled={!subject || !category || !type || !item || !impact || !urgency}
          >
            {t.check}
          </button>
        </form>
        <div className="w-full sm:w-1/3 flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">{t.description}</label>
            <textarea
              className="w-full border border-gray-700 rounded-lg px-4 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 resize-none transition"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder={t.description}
            />
          </div>

          {showSummary && (
            <div className="mt-2 p-6 bg-[#232323] rounded-xl shadow text-sm border border-gray-700">
              <div className="font-bold text-gray-100 mb-3 text-base">{t.summary}</div>
              <ul className="space-y-1">
                <li><span className="font-semibold">{t.subject}:</span> {subject}</li>
                <li><span className="font-semibold">{t.category}:</span> {category}</li>
                <li><span className="font-semibold">{t.type}:</span> {type}</li>
                <li><span className="font-semibold">{t.item}:</span> {item}</li>
                <li><span className="font-semibold">{t.impact}:</span> {impact}</li>
                <li><span className="font-semibold">{t.urgency}:</span> {urgency}</li>
                <li><span className="font-semibold">{t.description}:</span> {description}</li>
              </ul>
            </div>
          )}

          {showEmailBtn && (
            <button
              className="mt-4 w-full bg-gray-700 hover:bg-gray-800 text-gray-100 rounded-lg px-6 py-3 font-semibold text-base shadow transition"
              onClick={handleCreateEmail}
            >
              {t.email}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}