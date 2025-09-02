"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { ProfileCard } from "@/components/ProfileCard";
import { StatCard } from "@/components/StatCard";
import { ChartCard } from "@/components/ChartCard";
import { fetchGithub } from "@/lib/fetchGithub";

export default function Dashboard() {
  const [github, setGithub] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchGithub("notsajeed"); 
      setGithub(data);
    }
    loadData();
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar title="Dashboard" />
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          {github && (
            <ProfileCard
              name={github.name || github.username}
              username={`@${github.username}`}
              bio={github.bio}
            />
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Repositories" value={github?.repos || 0} />
            <StatCard title="Followers" value={github?.followers || 0} />
            <StatCard title="Following" value={github?.following || 0} />
            <StatCard title="Activity" value="Coming Soon" />
          </div>
          <ChartCard title="Weekly Activity" />
        </main>
      </div>
    </div>
  );
}
