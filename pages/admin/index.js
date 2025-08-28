"use client";
import React, { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin");
    if (adminStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo Credentials
    const adminUser = "admin";
    const adminPass = "1234";

    if (formData.username === adminUser && formData.password === adminPass) {
      localStorage.setItem("isAdmin", "true");
      setIsLoggedIn(true);
    } else {
      alert("❌ Invalid Credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-lg w-96"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">🔐 Admin Login</h2>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Username</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-blue-600">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-600">
            Dashboard
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-600">
            Users
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-600">
            Reports
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-600">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-1"
            />
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-1 rounded"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">📊 Total Users: 120</div>
            <div className="bg-white p-6 rounded shadow">💰 Fee Recived: $5000</div>
            <div className="bg-white p-6 rounded shadow">New User: 25</div>
          </div>
        </main>
      </div>
    </div>
  );
}
