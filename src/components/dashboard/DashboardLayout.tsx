import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { toast } from 'react-hot-toast';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const prevUnreadCount = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('dashboard-dark') === 'true';
    }
    return false;
  });

  // Apply dark mode to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dashboard-dark', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dashboard-dark', 'false');
    }
  }, [darkMode]);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'messages'), where('isRead', '==', false));
    const unsub = onSnapshot(q, (snap) => {
      const newCount = snap.size;
      // Play sound and show toast if unread count increases
      if (prevUnreadCount.current !== 0 && newCount > prevUnreadCount.current) {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }
        toast.success('New message received!');
      }
      prevUnreadCount.current = newCount;
      setUnreadCount(newCount);
    });
    return () => unsub();
  }, [user]);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Notification sound */}
      <audio ref={audioRef} src="/notification.mp3" preload="auto" />
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg z-30 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 lg:static lg:translate-x-0`}>
        <div className="p-6 border-b dark:border-gray-700 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Dashboard</h1>
          <button
            onClick={() => setDarkMode((d) => !d)}
            className="ml-2 p-2 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
            title="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
            )}
          </button>
        </div>
        <nav className="p-6 space-y-4">
          <Link to="/dashboard" className="block text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <Link to="/dashboard/messages" className="block text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 relative">
            Messages
            {unreadCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-bold animate-pulse">
                {unreadCount}
              </span>
            )}
          </Link>
        </nav>
        <div className="absolute bottom-0 w-full p-6 border-t dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-bold">
              {user?.email?.[0]?.toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-200 truncate">{user?.email}</p>
            </div>
            <button onClick={handleLogout} className="ml-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-sm">Logout</button>
          </div>
        </div>
      </aside>
      {/* Overlay for mobile */}
      {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-30 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />}
      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-64">
        {/* Topbar */}
        <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow lg:hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded bg-gray-100 dark:bg-gray-700">☰</button>
          <h2 className="text-lg font-bold text-blue-600 dark:text-blue-400">Dashboard</h2>
          <button onClick={handleLogout} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-sm">Logout</button>
        </header>
        <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 transition-colors">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout; 