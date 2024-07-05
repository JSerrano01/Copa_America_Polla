// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header className="bg-transparent shadow-xl px-6 ">
            <div className="flex h-16 max-w-7xl mx-auto items-center justify-between">
                <button className="rounded p-1 m-1 text-slate-100 transition-colors hover:bg-blue-500 hover:text-slate-100 focus:ring-2 focus:ring-slate-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <div className="flex -mr-4 items-center">
                    <div className="space-x-8 ml-8 hidden md:flex">
                        <a className="rounded p-1 m-1 px-3 py-2 text-slate-100 transition-colors hover:bg-blue-500  hover:text-slate-100 focus:ring-2 focus:ring-slate-200" href="/main">Inicio</a>
                        <a className="rounded p-1 m-1 px-3 py-2 text-slate-100 transition-colors hover:bg-blue-500  hover:text-slate-100 focus:ring-2 focus:ring-slate-200" href="/teams">Equipos</a>
                        <a className="rounded p-1 m-1 px-3 py-2 text-slate-100 transition-colors hover:bg-blue-500  hover:text-slate-100 focus:ring-2 focus:ring-slate-200" href="/pollas">Pollas</a>
                        <a className="rounded p-1 m-1 px-3 py-2 text-slate-100 transition-colors hover:bg-blue-500  hover:text-slate-100 focus:ring-2 focus:ring-slate-200" href="/miPolla">Mi Polla</a>
                        <a className="rounded p-1 m-1 px-3 py-2 text-slate-100 transition-colors hover:bg-blue-500  hover:text-slate-100 focus:ring-2 focus:ring-slate-200" href="Tabla">Tabla</a>
                    </div>
                </div>

                <div>
                    <button className="ml-4 rounded-full p-1 m-1 text-slate-500 transition-colors hover:text-slate-950 focus:ring-2 focus:ring-slate-200 focus:ring-offset-1">
                        <img className="h-8 w-8 rounded-full" src="https://ui-avatars.com/api?name=Jaime+Serrano" alt="" />
                    </button>
                </div>
            </div>

            <div className="space-y-1 border-t pb-3 pt-2 md:hidden">
                <a href="/main" className="block rounded-md px-3 py-2 text-slate-100 transition-colors hover:bg-blue-500 hover:text-white">Inicio</a>
                <a href="/teams" className="block rounded-md px-3 py-2 text-slate-100 transition-colors hover:bg-blue-500 hover:text-white">Equipos</a>
                <a href="/pollas" className="block rounded-md px-3 py-2 text-slate-100 transition-colors hover:bg-blue-500 hover:text-white">Pollas</a>
                <a href="/mipolla" className="block rounded-md px-3 py-2 text-slate-100 transition-colors hover:bg-blue-500 hover:text-white">Mi Polla</a>
                <a href="/Tabla" className="block rounded-md px-3 py-2 text-slate-100 transition-colors hover:bg-blue-500 hover:text-white">Tabla</a>
            </div>
        </header>
    );
};

export default Header;