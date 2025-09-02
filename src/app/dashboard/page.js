"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { PlatformSection } from "@/components/PlatformSection";
import { fetchGithub } from "@/lib/fetchGithub";
import { fetchLeetcode } from "@/lib/fetchLeetcode";
import { fetchKaggle } from "@/lib/fetchKaggle";   
import { fetchHackerrank } from "@/lib/fetchHackerrank";




// inside return


export default function Dashboard() {
  const [github, setGithub] = useState(null);
  const [leetcode, setLeetcode] = useState(null);
  const [kaggle, setKaggle] = useState(null); 
  const [hackerrank, setHackerrank] = useState(null);
 
  useEffect(() => {
    async function loadData() {
      const gh = await fetchGithub("notsajeed");
      setGithub(gh);

      const lc = await fetchLeetcode("notsajeed");
      setLeetcode(lc);

      const kg = await fetchKaggle("notsajeed");  
      setKaggle(kg);

      const hr = await fetchHackerrank("notsajeed");
      setHackerrank(hr);
    }
    loadData();
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar title="Dashboard" />
        <main className="flex-1 p-6 space-y-10 overflow-y-auto">
          
          {/* GitHub Section */}
          {github && (
            <PlatformSection
              title="GitHub"
              profile={{
                name: github.name || github.username,
                username: `@${github.username}`,
                bio: github.bio,
              }}
              stats={[
                { title: "Repositories", value: github?.repos || 0 },
                { title: "Followers", value: github?.followers || 0 },
                { title: "Following", value: github?.following || 0 },
                { title: "Activity", value: "Coming Soon" },
              ]}
              chartTitle="Weekly Activity"
            />
          )}

          {/* LeetCode Section */}
          {leetcode && (
            <PlatformSection
              title="LeetCode"
              profile={{
                name: "LeetCode Profile",
                username: `@${leetcode.username}`,
                bio: "Problem solving enthusiast 🚀",
              }}
              stats={[
                { title: "Total Solved", value: leetcode.totalSolved },
                { title: "Easy Solved", value: leetcode.easySolved },
                { title: "Medium Solved", value: leetcode.mediumSolved },
                { title: "Hard Solved", value: leetcode.hardSolved },
                { title: "Ranking", value: leetcode.ranking },
              ]}
              chartTitle="Problem Solving Trend"
            />
          )}

          {/* Kaggle Section */}
          {kaggle && (
            <PlatformSection
              title="Kaggle"
              profile={{
                name: "Kaggle Profile",
                username: `@${kaggle.username}`,
                bio: "Data science explorer 📊",
              }}
              stats={[
                { title: "Competitions", value: kaggle.competitions },
                { title: "Datasets", value: kaggle.datasets },
                { title: "Notebooks", value: kaggle.notebooks },
                { title: "Followers", value: kaggle.followers },
                { title: "Ranking", value: kaggle.ranking },
              ]}
              chartTitle="Kaggle Activity"
            />
          )}

           {/* Hackerrank Section */}
          {hackerrank && (
          <PlatformSection
            title="HackerRank"
            profile={{
              name: "HackerRank Profile",
              username: `@${hackerrank.username}`,
              bio: "Coding challenges and problem solving 🧑‍💻",
            }}
            stats={[
              { title: "Badges", value: hackerrank.badges },
              { title: "Certificates", value: hackerrank.certificates },
              { title: "Problems Solved", value: hackerrank.problemsSolved },
              { title: "Contests", value: hackerrank.contests },
              { title: "Rank", value: hackerrank.rank },
            ]}
            chartTitle="Challenge Activity"
          />
        )}

        </main>
      </div>
    </div>
  );
}
