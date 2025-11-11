'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex-1">
          <ul className="space-y-3">
            <li>
              <Link
                href="/dashboard"
                className="block px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings"
                className="block px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/profile"
                className="block px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
        <footer className="mt-auto text-gray-500 text-sm">
          &copy; 2025 My App
        </footer>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome to Dashboard
          </h1>
        </header>

        <section className="bg-white shadow rounded-lg p-6">{children}</section>
      </main>
    </div>
  );
}
