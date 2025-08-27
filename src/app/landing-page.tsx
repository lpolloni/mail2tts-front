"use client";

export default function Landing() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#232323] font-sans">
      <div className="w-full max-w-3xl mx-auto p-8">
        <div className="bg-[#2D2D2D] rounded-2xl shadow-2xl border border-gray-800 p-10 flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">Mail2TTS: Central de Tickets Inteligente</h1>
          <p className="text-lg text-gray-300 mb-6 max-w-xl">
            Transforme a experiência dos seus usuários com uma interface simples e moderna para abertura de tickets. Integre facilmente com Zammad ou outros sistemas de ticketing. Ideal para empresas que buscam agilidade, padronização e integração.
          </p>
          <ul className="text-left text-gray-300 mb-8 space-y-2 max-w-lg">
            <li><span className="font-semibold text-gray-100">•</span> Interface centralizada e intuitiva</li>
            <li><span className="font-semibold text-gray-100">•</span> Integração nativa com Zammad</li>
            <li><span className="font-semibold text-gray-100">•</span> Possibilidade de integração com outros sistemas</li>
            <li><span className="font-semibold text-gray-100">•</span> Customização para sua empresa</li>
            <li><span className="font-semibold text-gray-100">•</span> Segurança e privacidade</li>
          </ul>
          <a
            href="#"
            className="mt-4 w-full sm:w-auto bg-gray-700 hover:bg-gray-800 text-gray-100 rounded-lg px-8 py-4 font-semibold text-lg shadow transition"
          >
            Teste grátis agora
          </a>
        </div>
      </div>
    </div>
  );
}
