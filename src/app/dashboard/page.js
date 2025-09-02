"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { PlatformSection } from "@/components/PlatformSection";

import { fetchGithub } from "@/lib/fetchGithub";
import { fetchLeetcode } from "@/lib/fetchLeetcode";
import { fetchKaggle } from "@/lib/fetchKaggle";   
import { fetchHackerrank } from "@/lib/fetchHackerrank";
import { fetchCodechef } from "@/lib/fetchCodechef";
import { fetchCodeforces } from "@/lib/fetchCodeforces";
import { fetchTryhackme } from "@/lib/fetchTryhackme";
import { fetchDevpost } from "@/lib/fetchDevpost";
import { fetchLinkedin } from "@/lib/fetchLinkedin";
import { fetchX } from "@/lib/fetchX";

export default function Dashboard() {
  const [github, setGithub] = useState(null);
  const [leetcode, setLeetcode] = useState(null);
  const [kaggle, setKaggle] = useState(null); 
  const [hackerrank, setHackerrank] = useState(null);
  const [codechef, setCodechef] = useState(null);
  const [codeforces, setCodeforces] = useState(null);
  const [tryhackme, setTryhackme] = useState(null);
  const [devpost, setDevpost] = useState(null);
  const [linkedin, setLinkedin] = useState(null);
  const [xProfile, setXProfile] = useState(null);

  const [activeTab, setActiveTab] = useState("Coding");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [
          githubData,
          leetcodeData,
          kaggleData,
          hackerrankData,
          codechefData,
          codeforcesData,
          tryhackmeData,
          devpostData,
          linkedinData,
          xData
        ] = await Promise.all([
          fetchGithub("notsajeed"),
          fetchLeetcode("notsajeed"),
          fetchKaggle("notsajeed"),
          fetchHackerrank("notsajeed"),
          fetchCodechef("notsajeed"),
          fetchCodeforces("notsajeed"),
          fetchTryhackme("notsajeed"),
          fetchDevpost("notsajeed"),
          fetchLinkedin("notsajeed"),
          fetchX("notsajeed")
        ]);

        setGithub(githubData);
        setLeetcode(leetcodeData);
        setKaggle(kaggleData);
        setHackerrank(hackerrankData);
        setCodechef(codechefData);
        setCodeforces(codeforcesData);
        setTryhackme(tryhackmeData);
        setDevpost(devpostData);
        setLinkedin(linkedinData);
        setXProfile(xData);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, []);

  const categories = [
    {
      name: "Coding",
      platforms: [
        github && {
          title: "GitHub",
          profile: {
            name: github.name || github.username,
            username: `@${github.username}`,
            bio: github.bio,
          },
          stats: [
            { title: "Repositories", value: github.repos || 0 },
            { title: "Followers", value: github.followers || 0 },
            { title: "Following", value: github.following || 0 },
            { title: "Activity", value: "Coming Soon" },
          ],
          chartTitle: "Weekly Activity",
        },
        leetcode && {
          title: "LeetCode",
          profile: {
            name: "LeetCode Profile",
            username: `@${leetcode.username}`,
            bio: "Problem solving enthusiast 🚀",
          },
          stats: [
            { title: "Total Solved", value: leetcode.totalSolved },
            { title: "Easy Solved", value: leetcode.easySolved },
            { title: "Medium Solved", value: leetcode.mediumSolved },
            { title: "Hard Solved", value: leetcode.hardSolved },
            { title: "Ranking", value: leetcode.ranking },
          ],
          chartTitle: "Problem Solving Trend",
        },
        codeforces && {
          title: "Codeforces",
          profile: {
            name: "Codeforces Profile",
            username: `@${codeforces.username}`,
            bio: "Competitive programming enthusiast 💻⚡",
          },
          stats: [
            { title: "Rating", value: codeforces.rating },
            { title: "Max Rating", value: codeforces.maxRating },
            { title: "Rank", value: codeforces.rank },
            { title: "Max Rank", value: codeforces.maxRank },
            { title: "Contributions", value: codeforces.contribution },
            { title: "Friends", value: codeforces.friendOfCount },
          ],
          chartTitle: "Contest Performance",
        },
        codechef && {
          title: "CodeChef",
          profile: {
            name: "CodeChef Profile",
            username: `@${codechef.username}`,
            bio: "Competitive programmer 🍜",
          },
          stats: [
            { title: "Rating", value: codechef.rating },
            { title: "Stars", value: codechef.stars },
            { title: "Global Rank", value: codechef.globalRank },
            { title: "Country Rank", value: codechef.countryRank },
            { title: "Contests", value: codechef.contests },
          ],
          chartTitle: "Contest Performance",
        },
        hackerrank && {
          title: "HackerRank",
          profile: {
            name: "HackerRank Profile",
            username: `@${hackerrank.username}`,
            bio: "Coding challenges and problem solving 🧑‍💻",
          },
          stats: [
            { title: "Badges", value: hackerrank.badges },
            { title: "Certificates", value: hackerrank.certificates },
            { title: "Problems Solved", value: hackerrank.problemsSolved },
            { title: "Contests", value: hackerrank.contests },
            { title: "Rank", value: hackerrank.rank },
          ],
          chartTitle: "Challenge Activity",
        },
      ].filter(Boolean),
    },
    {
      name: "Data & Projects",
      platforms: [
        kaggle && {
          title: "Kaggle",
          profile: {
            name: "Kaggle Profile",
            username: `@${kaggle.username}`,
            bio: "Data science explorer 📊",
          },
          stats: [
            { title: "Competitions", value: kaggle.competitions },
            { title: "Datasets", value: kaggle.datasets },
            { title: "Notebooks", value: kaggle.notebooks },
            { title: "Followers", value: kaggle.followers },
            { title: "Ranking", value: kaggle.ranking },
          ],
          chartTitle: "Kaggle Activity",
        },
        devpost && {
          title: "Devpost",
          profile: {
            name: "Devpost Profile",
            username: `@${devpost.username}`,
            bio: "Hackathon & project enthusiast 🚀",
          },
          stats: [
            { title: "Hackathons Participated", value: devpost.hackathonsParticipated },
            { title: "Projects Submitted", value: devpost.projectsSubmitted },
            { title: "Awards", value: devpost.awards },
            { title: "Followers", value: devpost.followers },
            { title: "Following", value: devpost.following },
          ],
          chartTitle: "Project Activity",
        },
      ].filter(Boolean),
    },
    {
      name: "Cybersecurity",
      platforms: [
        tryhackme && {
          title: "TryHackMe",
          profile: {
            name: "TryHackMe Profile",
            username: `@${tryhackme.username}`,
            bio: "Cybersecurity enthusiast 🛡️",
          },
          stats: [
            { title: "Points", value: tryhackme.points },
            { title: "Badges", value: tryhackme.badges },
            { title: "Rooms Completed", value: tryhackme.roomsCompleted },
            { title: "Active Days", value: tryhackme.activeDays },
            { title: "Rank", value: tryhackme.rank },
          ],
          chartTitle: "Learning Activity",
        },
      ].filter(Boolean),
    },
    {
      name: "Social",
      platforms: [
        linkedin && {
          title: "LinkedIn",
          profile: {
            name: "LinkedIn Profile",
            username: `@${linkedin.username}`,
            bio: "Professional network 💼",
          },
          stats: [
            { title: "Connections", value: linkedin.connections },
            { title: "Endorsements", value: linkedin.endorsements },
            { title: "Recommendations", value: linkedin.recommendations },
            { title: "Posts", value: linkedin.posts },
            { title: "Profile Views", value: linkedin.profileViews },
          ],
          chartTitle: "Profile Activity",
        },
        xProfile && {
          title: "X (Twitter)",
          profile: {
            name: "X Profile",
            username: `@${xProfile.username}`,
            bio: "Developer & tech tweets 🐦",
          },
          stats: [
            { title: "Followers", value: xProfile.followers },
            { title: "Following", value: xProfile.following },
            { title: "Tweets", value: xProfile.tweets },
            { title: "Likes", value: xProfile.likes },
            { title: "Retweets", value: xProfile.retweets },
          ],
          chartTitle: "Engagement Trend",
        },
      ].filter(Boolean),
    },
  ];

  const activeCategory = categories.find(cat => cat.name === activeTab);

  return (
    <div className="flex h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Sidebar />
      
      <div className="flex flex-col flex-1 min-w-0">
        <Navbar title="Dashboard" />

        {/* Enhanced Tabs */}
        <div className="flex items-center gap-2 p-6 pb-4 border-b border-white/5">
          <div className="flex gap-2 bg-white/5 backdrop-blur-sm rounded-xl p-1">
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`relative px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeTab === cat.name
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "text-white/70 hover:text-white/90 hover:bg-white/5"
                }`}
              >
                {cat.name}
                {activeTab === cat.name && (
                  <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
          
          {/* Platform count indicator */}
          <div className="ml-auto text-xs text-white/50 bg-white/5 px-3 py-1.5 rounded-lg backdrop-blur-sm">
            {activeCategory?.platforms?.length || 0} platforms
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
              <p className="text-white/60 text-sm">Loading dashboard data...</p>
            </div>
          </div>
        ) : (
          <main className="flex-1 p-6 overflow-y-auto space-y-8">
            {activeCategory?.platforms?.length > 0 ? (
              activeCategory.platforms.map((platform, idx) => (
                <PlatformSection key={idx} {...platform} />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10"></div>
                </div>
                <h3 className="text-lg font-medium text-white/90 mb-2">No platforms available</h3>
                <p className="text-white/60 text-center max-w-md">
                  No data found for {activeTab.toLowerCase()} platforms. Check your API connections or try refreshing.
                </p>
              </div>
            )}
          </main>
        )}
      </div>
    </div>
  );
}