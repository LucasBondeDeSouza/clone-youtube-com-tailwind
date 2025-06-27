import React from "react";

export default ({ showSidebar }) => {

    return (
        <div className="flex h-screen pt-14">
            <aside className={`fixed left-0 bottom-0 top-14 w-0 lg:w-60 bg-white overflow-y-auto py-6 z-10 transition-all duration-200 ease-in-out ${showSidebar ? 'w-60' : 'w-0'}`}>
                <nav className="space-y-1">
                    <a href="#" className="flex items-center gap-6 px-6 py-2 bg-gray-100">
                        <i className="ri-home-4-fill text-xl"></i>
                        <span className="text-sm font-medium">Início</span>
                    </a>

                    <a href="#" className="flex items-center gap-6 px-6 py-2 hover:bg-gray-100">
                        <i className="ri-compass-3-line text-xl"></i>
                        <span className="text-sm font-medium">Explorar</span>
                    </a>

                    <a href="#" className="flex items-center gap-6 px-6 py-2 hover:bg-gray-100">
                        <i className="ri-play-list-2-line text-xl"></i>
                        <span className="text-sm font-medium">Inscrições</span>
                    </a>

                    <hr className="mx-6 my-3 text-gray-200" />

                    <a href="#" className="flex items-center hover:bg-gray-100">
                        <h3 className="px-6 py-2 text-lg font-semibold text-black">Você</h3>
                        <i class="ri-arrow-right-s-line text-xl"></i>
                    </a>

                    <a href="#" className="flex items-center gap-6 px-6 py-2 hover:bg-gray-100">
                        <i className="ri-history-line text-xl"></i>
                        <span className="text-sm font-medium">Histórico</span>
                    </a>

                    <a href="#" className="flex items-center gap-6 px-6 py-2 hover:bg-gray-100">
                        <i className="ri-time-line text-xl"></i>
                        <span className="text-sm font-medium">Assistir mais tarde</span>
                    </a>

                    <a href="#" className="flex items-center gap-6 px-6 py-2 hover:bg-gray-100">
                        <i className="ri-thumb-up-line text-xl"></i>
                        <span className="text-sm font-medium">Vídeos marcados</span>
                    </a>

                    <a href="#" className="flex items-center gap-6 px-6 py-2 hover:bg-gray-100">
                        <i class="ri-scissors-line text-xl"></i>
                        <span className="text-sm font-medium">Seus clipes</span>
                    </a>

                    <hr className="mx-6 my-3 text-gray-200" />

                    <h3 className="px-6 py-2 text-lg font-semibold text-black">Inscrições</h3>

                    <a href="#" className="flex items-center gap-6 px-6 py-2 hover:bg-gray-100">
                        <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                        <span className="text-sm font-medium">Tech Channel</span>
                    </a>

                    <a href="#" className="flex items-center gap-6 px-6 py-2 hover:bg-gray-100">
                        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">Sports Channel</span>
                    </a>

                    <a href="#" className="flex items-center gap-6 px-6 py-2 hover:bg-gray-100">
                        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium">Games Channel</span>
                    </a>
                </nav>
            </aside>
        </div>
    )
}