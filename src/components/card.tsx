import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#232323] font-sans">
      <div className="w-full max-w-3xl mx-auto p-6">
        <div className="bg-[#2D2D2D] rounded-2xl shadow-2xl border border-gray-100 p-10 flex flex-col items-center text-center">
          {children}
        </div>
      </div>
    </div>
  );
}
