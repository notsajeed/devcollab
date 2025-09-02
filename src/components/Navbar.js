"use client";

import { Bell, User } from "lucide-react";

export function Navbar({ title }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
        <h1 className="text-xl font-medium text-white/95 tracking-tight">{title}</h1>
      </div>
      
      <div className="flex items-center gap-3">
        {/* Notifications button */}
        <button className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white/90 transition-all duration-200 group">
          <Bell size={18} className="group-hover:scale-110 transition-transform duration-200" />
          {/* Notification dot */}
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
        </button>
        
        {/* Profile avatar */}
        <div className="relative">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transition-all duration-200 cursor-pointer group">
            <User size={16} className="text-white group-hover:scale-110 transition-transform duration-200" />
          </div>
          {/* Online status indicator */}
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-black rounded-full"></div>
        </div>
      </div>
    </header>
  );
}