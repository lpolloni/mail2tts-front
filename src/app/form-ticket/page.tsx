"use client";
import { useState } from "react";

import { LanguageBtn } from "@/components/languageBtn";

import { texts } from "@/constants/home/texts";
import { impacts } from "@/constants/form-ticket/data";
import { urgencies } from "@/constants/form-ticket/data";
import { categories } from "@/constants/form-ticket/data";
import { types } from "@/constants/form-ticket/data";

export default function FormTicket() {
  const [lang, setLang] = useState("en");
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
    const mailto = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Category: ${category}\nType: ${type}\nItem: ${item}\nImpact: ${impact}\nUrgency: ${urgency}\nDescription: ${description}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#232323] font-sans">
      <div className="bg-[#2D2D2D] rounded-2xl shadow-2xl p-8 flex flex-col sm:flex-row gap-10 w-full max-w-4xl border border-gray-100 border-[#232323]">
        <form className="flex flex-col gap-6 w-full sm:w-2/3 ">
          <LanguageBtn lang={lang} setLang={setLang} />
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              {t.subject}
            </label>
            <input
              type="text"
              className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={t.subject_description}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              {t.category}
            </label>
            <select
              className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setType("");
                setItem("");
              }}
            >
              <option value="">{t.category_description}</option>
              {Object.keys(categories).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          {category && (
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                {t.type}
              </label>
              <select
                className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                  setItem("");
                }}
              >
                <option value="">{t.type_description}</option>
                {categories[category].map((t: string) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          )}
          {type && (
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                {t.item}
              </label>
              <select
                className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              >
                <option value="">{t.item_description}</option>
                {types[type]?.map((i: string) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          )}
          {item && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  {t.impact}
                </label>
                <select
                  className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
                  value={impact}
                  onChange={(e) => setImpact(e.target.value)}
                >
                  <option value="">{t.impact_description}</option>
                  {impacts.map((im) => (
                    <option key={im} value={im}>
                      {im}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  {t.urgency}
                </label>
                <select
                  className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                >
                  <option value="">{t.urgency_description}</option>
                  {urgencies.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}{" "}
          <button
            type="button"
            className="mt-6 w-full bg-gray-700 hover:bg-gray-800 text-gray-100 rounded-lg px-6 py-3 font-semibold text-base shadow transition disabled:opacity-50"
            onClick={handleCheck}
            disabled={
              !subject || !category || !type || !item || !impact || !urgency
            }
          >
            Check
          </button>
        </form>
        <div className="w-full sm:w-1/3 flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              {t.description}
            </label>
            <textarea
              className="w-full border border-gray-700 rounded-lg px-4 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 resize-none transition"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
            />
          </div>
          {showSummary && (
            <div className="mt-2 p-6 bg-[#232323] rounded-xl shadow text-sm border border-gray-700 break-words">
              <div className="font-bold text-gray-100 mb-3 text-base">
                {t.summary}
              </div>
              <ul className="space-y-1">
                <li>
                  <span className="font-semibold">Subject:</span> {subject}
                </li>
                <li>
                  <span className="font-semibold">Category:</span> {category}
                </li>
                <li>
                  <span className="font-semibold">Type:</span> {type}
                </li>
                <li>
                  <span className="font-semibold">Item:</span> {item}
                </li>
                <li>
                  <span className="font-semibold">Impact:</span> {impact}
                </li>
                <li>
                  <span className="font-semibold">Urgency:</span> {urgency}
                </li>
                <li>
                  <span className="font-semibold">Description:</span>{" "}
                  {description}
                </li>
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
