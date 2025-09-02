"use client";

import { ProfileCard } from "@/components/ProfileCard";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";

export function PlatformSection({ title, profile, stats, chartTitle }) {
  return (
    <section className="space-y-6">
      {/* Section title with minimal accent */}
      <div className="flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
        <h2 className="text-2xl font-medium text-white/95 tracking-tight">
          {title}
        </h2>
      </div>

      {/* Profile card */}
      {profile && (
        <ProfileCard
          name={profile.name}
          username={profile.username}
          bio={profile.bio}
        />
      )}

      {/* Stats grid with improved spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard
            key={i}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>

      {/* Chart card */}
      {chartTitle && (
        <div className="mt-6">
          <ChartCard title={chartTitle} />
        </div>
      )}
    </section>
  );
}