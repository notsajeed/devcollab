"use client";

export function Navbar({ title }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      <div className="flex items-center gap-4">
        {/* Placeholder for notifications, profile, etc. */}
        <button className="p-2 rounded-lg hover:bg-gray-100">🔔</button>
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
