type LanguageBtnProps = {
  lang: string;
  setLang: (lang: string) => void;
};

export function LanguageBtn({ lang, setLang }: LanguageBtnProps) {
  return (
    <div className="mb-2 flex gap-2 justify-end w-full">
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="bg-gray-700 text-gray-100 rounded px-3 py-1"
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
        <option value="it">Italiano</option>
      </select>
    </div>
  );
}
