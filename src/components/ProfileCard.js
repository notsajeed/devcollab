"use client";

export function ProfileCard({ name, username, bio }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-white">
        {name ? name.charAt(0) : "U"}
      </div>

      {/* User Info */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{username}</p>
        <p className="mt-1 text-gray-600">{bio}</p>
      </div>
    </div>
  );
}
