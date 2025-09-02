"use client";

export function ProfileCard({ name, username, bio }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 transition-all duration-300">
      <div className="flex items-center gap-4">
        {/* Avatar with gradient */}
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-xl font-semibold text-white shadow-lg">
            {name ? name.charAt(0).toUpperCase() : "U"}
          </div>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-blue-500/20 blur-xl -z-10"></div>
        </div>

        {/* User Info */}
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-medium text-white/95 truncate">
            {name}
          </h2>
          <p className="text-sm text-white/60 mt-0.5">
            {username}
          </p>
          {bio && (
            <p className="mt-2 text-sm text-white/80 leading-relaxed line-clamp-2">
              {bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}