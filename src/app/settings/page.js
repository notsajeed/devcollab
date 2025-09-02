"use client";

import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export default function Settings() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Navbar title="Settings" />

        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          <h2 className="text-xl font-semibold text-gray-800">Account Settings</h2>
          <p className="text-gray-600">
            Here you can update your linked accounts, profile details, and dashboard preferences.
          </p>

          {/* Placeholder settings form */}
          <div className="bg-white rounded-2xl shadow p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">GitHub Username</label>
                <input
                  type="text"
                  placeholder="Enter GitHub username"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">LeetCode Username</label>
                <input
                  type="text"
                  placeholder="Enter LeetCode username"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
