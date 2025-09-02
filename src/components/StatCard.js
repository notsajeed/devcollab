"use client";

export function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-2 text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
}
