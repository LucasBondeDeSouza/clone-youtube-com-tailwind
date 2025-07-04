import React from "react";

export default () => {

    const videos = [
        { title: "Curso Completo de Tailwind CSS - Do Zero ao Avançado", channel: "Tech Channel", views: "125 mil", time: "há 2 dias", duration: "10:25", color: "red", isLive: false },
        { title: "Live Coding: Criando um Dashboard com React e TypeScript", channel: "Code Academy", views: "3,2 mil", time: "agora", duration: "25:47", color: "blue", isLive: true },
        { title: "UI/UX Design Trends 2025 - O que está por vir?", channel: "Design Masters", views: "89 mil", time: "há 1 semana", duration: "15:30", color: "green", isLive: false },
        { title: "JavaScript Avançado: Promises, Async/Await e Event Loop", channel: "Dev Pro", views: "230 mil", time: "há 3 dias", duration: "45:12", color: "purple", isLive: false },
        { title: "5 Extensões VS Code que Todo Dev Precisa Conhecer", channel: "Dicas Dev", views: "45 mil", time: "há 5 horas", duration: "8:45", color: "yellow", isLive: false },
        { title: "Deploy de Aplicações Node.js na AWS - Tutorial Completo", channel: "Cloud Masters", views: "156 mil", time: "há 2 semanas", duration: "32:18", color: "pink", isLive: false },
        { title: "Git e GitHub na Prática - Workflow Profissional", channel: "Dev Tools", views: "320 mil", time: "há 1 mês", duration: "18:30", color: "indigo", isLive: false },
        { title: "CSS Grid vs Flexbox - Quando usar cada um?", channel: "Frontend Basics", views: "78 mil", time: "há 4 dias", duration: "22:45", color: "orange", isLive: false },
        { title: "Next.js 14 - As Novidades que Você Precisa Saber", channel: "React Brasil", views: "190 mil", time: "há 1 semana", duration: "12:30", color: "teal", isLive: false },
        { title: "MongoDB vs PostgreSQL - Qual Banco Escolher?", channel: "Database Pro", views: "410 mil", time: "há 3 semanas", duration: "28:15", color: "cyan", isLive: false },
        { title: "Arquitetura de Microsserviços com Node.js - Curso Completo", channel: "Backend Masters", views: "520 mil", time: "há 2 meses", duration: "55:30", color: "lime", isLive: false },
        { title: "TypeScript Tips & Tricks - Produtividade no Próximo Nível", channel: "TS Brasil", views: "145 mil", time: "há 6 dias", duration: "19:45", color: "rose", isLive: false }
    ];

    const colorMap = {
        red: "bg-red-500",
        blue: "bg-blue-500",
        green: "bg-green-500",
        purple: "bg-purple-500",
        yellow: "bg-yellow-500",
        pink: "bg-pink-500",
        indigo: "bg-indigo-500",
        orange: "bg-orange-500",
        teal: "bg-teal-500",
        cyan: "bg-cyan-500",
        lime: "bg-lime-500",
        rose: "bg-rose-500",
    };

    return (
        <main className="flex-1 ml-0 lg:ml-60 py-2 px-6">
            <div className="flex gap-3 mb-6 overflow-x-auto pb-2 pt-4">
                <button className="px-3 py-1 bg-gray-900 text-white rounded-lg text-sm whitespace-nowrap cursor-pointer">Tudo</button>
                <button className="px-3 py-1 bg-gray-100 text-black rounded-lg text-sm whitespace-nowrap cursor-pointer">Música</button>
                <button className="px-3 py-1 bg-gray-100 text-black rounded-lg text-sm whitespace-nowrap cursor-pointer">Filmes</button>
                <button className="px-3 py-1 bg-gray-100 text-black rounded-lg text-sm whitespace-nowrap cursor-pointer">Jogos</button>
                <button className="px-3 py-1 bg-gray-100 text-black rounded-lg text-sm whitespace-nowrap cursor-pointer">Podcasts</button>
                <button className="px-3 py-1 bg-gray-100 text-black rounded-lg text-sm whitespace-nowrap cursor-pointer">Culinárias</button>
                <button className="px-3 py-1 bg-gray-100 text-black rounded-lg text-sm whitespace-nowrap cursor-pointer">Notícias</button>
                <button className="px-3 py-1 bg-gray-100 text-black rounded-lg text-sm whitespace-nowrap cursor-pointer">Esportes</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map((video, index) => (
                    <article className="cursor-pointer">
                        <div className="relative bg-gray-200 rounded-xl overflow-hidden">
                            <img className="w-full h-full object-cover" src={`https://picsum.photos/320/180?random=${index}`} alt="Imagem do vídeo" />
                            <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded">{video.duration}</span>
                        </div>

                        <div className="flex items-start gap-3 mt-3">
                            <div className={`size-8 rounded-full shrink-0 ${colorMap[video.color] || "bg-gray-500"}`}></div>

                            <div>
                                <h3 className="font-medium text-base">{video.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{video.channel}</p>
                                <p className="text-sm text-gray-600">{video.views} visualizações</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    )
}