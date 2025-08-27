"use client";

import { useState } from "react";

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
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Subject</label>
            <input
              type="text"
              className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder="Enter subject"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Category</label>
            <select
              className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
              value={category}
              onChange={e => {
                setCategory(e.target.value);
                setType("");
                setItem("");
              }}
            >
              <option value="">Select category</option>
              {Object.keys(categories).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {category && (
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">Type</label>
              <select
                className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
                value={type}
                onChange={e => {
                  setType(e.target.value);
                  setItem("");
                }}
              >
                <option value="">Select type</option>
                {categories[category].map((t: string) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          )}

          {type && (
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">Item</label>
              <select
                className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
                value={item}
                onChange={e => setItem(e.target.value)}
              >
                <option value="">Select item</option>
                {types[type]?.map((i: string) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>
          )}

          {item && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">Impact</label>
                <select
                  className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
                  value={impact}
                  onChange={e => setImpact(e.target.value)}
                >
                  <option value="">Select impact</option>
                  {impacts.map(im => (
                    <option key={im} value={im}>{im}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">Urgency</label>
                <select
                  className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 transition"
                  value={urgency}
                  onChange={e => setUrgency(e.target.value)}
                >
                  <option value="">Select urgency</option>
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
            Check
          </button>
        </form>
        <div className="w-full sm:w-1/3 flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Description</label>
            <textarea
              className="w-full border border-gray-700 rounded-lg px-4 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#232323] text-gray-100 placeholder-gray-400 resize-none transition"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Enter description"
            />
          </div>

          {showSummary && (
            <div className="mt-2 p-6 bg-[#232323] rounded-xl shadow text-sm border border-gray-700">
              <div className="font-bold text-gray-100 mb-3 text-base">Resumo</div>
              <ul className="space-y-1">
                <li><span className="font-semibold">Subject:</span> {subject}</li>
                <li><span className="font-semibold">Category:</span> {category}</li>
                <li><span className="font-semibold">Type:</span> {type}</li>
                <li><span className="font-semibold">Item:</span> {item}</li>
                <li><span className="font-semibold">Impact:</span> {impact}</li>
                <li><span className="font-semibold">Urgency:</span> {urgency}</li>
                <li><span className="font-semibold">Description:</span> {description}</li>
              </ul>
            </div>
          )}

          {showEmailBtn && (
            <button
              className="mt-4 w-full bg-gray-700 hover:bg-gray-800 text-gray-100 rounded-lg px-6 py-3 font-semibold text-base shadow transition"
              onClick={handleCreateEmail}
            >
              Criar Email
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
