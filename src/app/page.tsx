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

export default function Home() {
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
    <div className="min-h-screen flex items-center justify-center bg-background font-sans">
      <div className="bg-white dark:bg-[#171717] rounded-xl shadow-lg p-8 flex flex-col sm:flex-row gap-8 w-full max-w-4xl">
        <form className="flex flex-col gap-4 w-full sm:w-2/3">
          <label className="font-semibold">Subject</label>
          <input
            type="text"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-background"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder="Enter subject"
          />

          <label className="font-semibold">Category</label>
          <select
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-background overflow-y-auto"
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

          {category && (
            <>
              <label className="font-semibold">Type</label>
              <select
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-background overflow-y-auto"
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
            </>
          )}

          {type && (
            <>
              <label className="font-semibold">Item</label>
              <select
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-background overflow-y-auto"
                value={item}
                onChange={e => setItem(e.target.value)}
              >
                <option value="">Select item</option>
                {types[type]?.map((i: string) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </>
          )}

          {item && (
            <>
              <label className="font-semibold">Impact</label>
              <select
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-background"
                value={impact}
                onChange={e => setImpact(e.target.value)}
              >
                <option value="">Select impact</option>
                {impacts.map(im => (
                  <option key={im} value={im}>{im}</option>
                ))}
              </select>

              <label className="font-semibold">Urgency</label>
              <select
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-background"
                value={urgency}
                onChange={e => setUrgency(e.target.value)}
              >
                <option value="">Select urgency</option>
                {urgencies.map(u => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </>
          )}

          <button
            type="button"
            className="mt-4 bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition"
            onClick={handleCheck}
          >
            Check
          </button>
        </form>
        <div className="w-full sm:w-1/3 flex flex-col gap-4">
          <label className="font-semibold">Description</label>
          <textarea
            className="border rounded px-3 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-400 bg-background resize-none"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Enter description"
          />

          {showSummary && (
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded shadow text-sm">
              <div className="font-bold mb-2">Resumo:</div>
              <div><b>Subject:</b> {subject}</div>
              <div><b>Category:</b> {category}</div>
              <div><b>Type:</b> {type}</div>
              <div><b>Item:</b> {item}</div>
              <div><b>Impact:</b> {impact}</div>
              <div><b>Urgency:</b> {urgency}</div>
              <div><b>Description:</b> {description}</div>
            </div>
          )}

          {showEmailBtn && (
            <button
              className="mt-4 bg-green-600 text-white rounded px-4 py-2 font-semibold hover:bg-green-700 transition"
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
