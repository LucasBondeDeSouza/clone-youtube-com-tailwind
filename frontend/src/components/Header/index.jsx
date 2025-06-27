import React from "react";

export default ({ handleClickSidebar }) => {

    return (
        <header className="fixed left-0 right-0 bg-white z-50 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={handleClickSidebar}>
                    <i className="ri-menu-fill text-xl"></i>
                </button>

                <div className="flex items-center gap-1 cursor-pointer">
                    <i className="ri-youtube-fill text-3xl text-red-600"></i>
                    <span className="text-xl font-semibold">Youtube</span>
                    <span className="text-[10px] text-gray-600">BR</span>
                </div>
            </div>

            <form className="flex-1 max-w-2xl mx-4 hidden md:flex">
                <input 
                    type="text" 
                    placeholder="Pesquisar"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full rounded-r-0"
                />

                <button className="px-6 py-2 bg-gray-50 hover:bg-gray-200 border border-l-0 border-gray-300 rounded-r-full cursor-pointer">
                    <i className="ri-search-line text-xl"></i>
                </button>

                <button className="ml-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
                    <i className="ri-mic-line text-xl"></i>
                </button>
            </form>

            <div className="flex items-center gap-1">
                <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                    <i className="ri-search-line text-lg"></i>
                </button>

                <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                    <i className="ri-mic-line text-lg"></i>
                </button>
            </div>

            <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center gap-2 cursor-pointer">
                    <i className="ri-add-large-line text-xl"></i>
                    <span className="font-semibold">Criar</span>
                </button>

                <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                    <i className="ri-notification-3-line text-xl"></i>
                </button>

                <button className="ml-2 w-8 h-8 bg-purple-600 rounded-full text-white text-semibold cursor-pointer">
                    L
                </button>
            </div>
        </header>
    )
}