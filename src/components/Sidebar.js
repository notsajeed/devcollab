"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Settings, LogOut } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-black/30 backdrop-blur-xl border-r border-white/5">
      {/* Logo / Brand */}
      <div className="h-16 flex items-center gap-3 px-6 border-b border-white/5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
          <div className="w-3 h-3 rounded bg-white"></div>
        </div>
        <span className="font-semibold text-lg text-white/95 tracking-tight">
          DevCollab
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  : "text-white/70 hover:text-white/90 hover:bg-white/5"
              }`}
            >
              <Icon 
                size={18} 
                className={`transition-all duration-200 ${
                  isActive 
                    ? "text-blue-400" 
                    : "text-white/60 group-hover:text-white/80 group-hover:scale-110"
                }`} 
              />
              <span className="font-medium text-sm">
                {link.label}
              </span>
              {isActive && (
                <div className="ml-auto w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/5">
        <button className="group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/70 hover:text-white/90 hover:bg-white/5 transition-all duration-200">
          <LogOut 
            size={18} 
            className="text-white/60 group-hover:text-white/80 group-hover:scale-110 transition-all duration-200" 
          />
          <span className="font-medium text-sm">
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
}