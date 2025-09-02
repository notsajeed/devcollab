"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Save, User, Github, Code, Database, Shield, Users, Settings as SettingsIcon } from "lucide-react";

export default function Settings() {
  const [formData, setFormData] = useState({
    github: '',
    leetcode: '',
    kaggle: '',
    hackerrank: '',
    codechef: '',
    codeforces: '',
    tryhackme: '',
    devpost: '',
    linkedin: '',
    twitter: ''
  });

  const [activeSection, setActiveSection] = useState('accounts');
  const [saving, setSaving] = useState(false);

  const handleInputChange = (platform, value) => {
    setFormData(prev => ({
      ...prev,
      [platform]: value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    // Show success notification
  };

  const platformGroups = [
    {
      title: "Coding Platforms",
      icon: Code,
      platforms: [
        { key: 'github', label: 'GitHub Username', placeholder: 'Enter GitHub username' },
        { key: 'leetcode', label: 'LeetCode Username', placeholder: 'Enter LeetCode username' },
        { key: 'codeforces', label: 'Codeforces Username', placeholder: 'Enter Codeforces username' },
        { key: 'codechef', label: 'CodeChef Username', placeholder: 'Enter CodeChef username' },
        { key: 'hackerrank', label: 'HackerRank Username', placeholder: 'Enter HackerRank username' }
      ]
    },
    {
      title: "Data & Projects",
      icon: Database,
      platforms: [
        { key: 'kaggle', label: 'Kaggle Username', placeholder: 'Enter Kaggle username' },
        { key: 'devpost', label: 'Devpost Username', placeholder: 'Enter Devpost username' }
      ]
    },
    {
      title: "Security & Learning",
      icon: Shield,
      platforms: [
        { key: 'tryhackme', label: 'TryHackMe Username', placeholder: 'Enter TryHackMe username' }
      ]
    },
    {
      title: "Social Platforms",
      icon: Users,
      platforms: [
        { key: 'linkedin', label: 'LinkedIn Username', placeholder: 'Enter LinkedIn username' },
        { key: 'twitter', label: 'X (Twitter) Username', placeholder: 'Enter Twitter username' }
      ]
    }
  ];

  const sidebarSections = [
    { id: 'accounts', label: 'Linked Accounts', icon: User },
    { id: 'preferences', label: 'Preferences', icon: SettingsIcon },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Sidebar />
      
      <div className="flex flex-col flex-1 min-w-0">
        <Navbar title="Settings" />
        
        <div className="flex flex-1 overflow-hidden">
          {/* Settings Sidebar */}
          <div className="w-64 bg-black/30 backdrop-blur-xl border-r border-white/5 p-4">
            <nav className="space-y-2">
              {sidebarSections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "text-white/70 hover:text-white/90 hover:bg-white/5"
                    }`}
                  >
                    <Icon size={18} />
                    {section.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Settings Content */}
          <main className="flex-1 p-6 overflow-y-auto">
            {activeSection === 'accounts' && (
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <h2 className="text-2xl font-medium text-white/95 tracking-tight">Linked Accounts</h2>
                  <p className="text-white/60">
                    Connect your platform accounts to display your coding journey and achievements.
                  </p>
                </div>

                {/* Settings Form */}
                <form onSubmit={handleSave} className="space-y-8">
                  {platformGroups.map((group, groupIndex) => {
                    const GroupIcon = group.icon;
                    return (
                      <div key={groupIndex} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <GroupIcon size={16} className="text-blue-400" />
                          </div>
                          <h3 className="text-lg font-medium text-white/90">{group.title}</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {group.platforms.map((platform) => (
                            <div key={platform.key} className="space-y-2">
                              <label className="block text-sm font-medium text-white/70">
                                {platform.label}
                              </label>
                              <input
                                type="text"
                                value={formData[platform.key]}
                                onChange={(e) => handleInputChange(platform.key, e.target.value)}
                                placeholder={platform.placeholder}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white/90 placeholder-white/40 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}

                  {/* Save Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={saving}
                      className="flex items-center gap-2 px-6 py-2.5 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white rounded-xl font-medium transition-all duration-200 disabled:cursor-not-allowed"
                    >
                      {saving ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save size={16} />
                          Save Changes
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeSection === 'preferences' && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-medium text-white/95 tracking-tight">Preferences</h2>
                  <p className="text-white/60">
                    Customize your dashboard appearance and behavior.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-medium text-white/90 mb-4">Dashboard Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-white/70">Dark Mode</label>
                        <p className="text-xs text-white/50">Toggle dark mode appearance</p>
                      </div>
                      <div className="w-12 h-6 bg-blue-500 rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-200"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-white/70">Auto Refresh</label>
                        <p className="text-xs text-white/50">Automatically update data every 5 minutes</p>
                      </div>
                      <div className="w-12 h-6 bg-white/20 rounded-full relative cursor-pointer">
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white/60 rounded-full transition-all duration-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}