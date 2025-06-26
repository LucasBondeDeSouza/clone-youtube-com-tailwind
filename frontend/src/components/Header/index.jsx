import React from "react";

export default () => {

    return (
        <header className="fixed left-0 right-0 bg-white z-50 px-4 py-2 flex items-center justify-between border-b border-gray-200">
            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                    <i className="ri-menu-fill text-xl"></i>
                </button>

                <div className="flex items-center gap-1 cursor-pointer">
                    <i className="ri-youtube-fill text-3xl text-red-600"></i>
                    <span className="text-xl font-semibold">Youtube</span>
                    <span className="text-[10px] text-gray-600">BR</span>
                </div>
            </div>

            <form className="flex-1 max-w-2xl mx-4 flex">
                <input 
                    type="text" 
                    placeholder="Pesquisar"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full rounded-r-0"
                />

                <button className="px-6 py-4 bg-gray-50 hover:bg-gray-200 border border-l-0 border-gray-300 rounded-r-full cursor-pointer">
                    <i className="ri-search-line"></i>
                </button>

                <button className="ml-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
                    <i className="ri-mic-line"></i>
                </button>
            </form>

            <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <i className="ri-video-add-line text-xl"></i>
                </button>

                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <i className="ri-notification-3-line text-xl"></i>
                </button>

                <button className="ml-2 w-8 h-8 bg-purple-600 rounded-full text-white text-semibold">
                    L
                </button>
            </div>
        </header>
    )
}