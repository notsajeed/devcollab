"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/settings", label: "Settings" },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r shadow-sm">
      <div className="h-16 flex items-center justify-center font-bold text-lg border-b">
        DevCollab
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-2 rounded-lg transition-colors ${
              pathname === link.href
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t">
        <button className="w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          Logout
        </button>
      </div>
    </aside>
  );
}
