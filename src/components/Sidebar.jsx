"use client";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="p-4 text-lg font-bold">My Sidebar</div>
        <ul className="space-y-4 p-4">
          <li className="hover:bg-gray-700 p-2 rounded">Home</li>
          <li className="hover:bg-gray-700 p-2 rounded">About</li>
          <li className="hover:bg-gray-700 p-2 rounded">Services</li>
          <li className="hover:bg-gray-700 p-2 rounded">Contact</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <header className="bg-gray-100 p-4 flex justify-between items-center">
          <button
            className="lg:hidden bg-gray-800 text-white p-2 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
          <h1 className="text-xl font-bold">Dashboard</h1>
        </header>
        <main className="p-4">
          <p>Welcome to the main content area!</p>
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
