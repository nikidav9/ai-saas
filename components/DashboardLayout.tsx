import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <nav className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-6">AI SaaS</h2>
        <ul className="space-y-2">
          <li><Link href="/dashboard"><a className="block p-2 hover:bg-gray-100">Dashboard</a></Link></li>
          <li><Link href="/settings"><a className="block p-2 hover:bg-gray-100">Settings</a></Link></li>
          <li><button onClick={() => signOut()} className="w-full text-left p-2 hover:bg-gray-100">Logout</button></li>
        </ul>
      </nav>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
