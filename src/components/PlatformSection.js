"use client";

import { ProfileCard } from "@/components/ProfileCard";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";

export function PlatformSection({ title, profile, stats, chartTitle }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        {title}
      </h2>

      {profile && (
        <ProfileCard
          name={profile.name}
          username={profile.username}
          bio={profile.bio}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} title={stat.title} value={stat.value} />
        ))}
      </div>

      {chartTitle && <ChartCard title={chartTitle} />}
    </section>
  );
}
