'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace with your secure values
    const correctEmail = 'Ahmadshahdawlatnazar@gmail.com';
    const correctPassword = 'ZafariAdmin11cc';

    if (email === correctEmail && password === correctPassword) {
      // Save a session token to localStorage
      localStorage.setItem('isAdmin', 'true');
      router.push('/admin');
    } else {
      setErrorMsg('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-black to-gray-900">
      <div className="w-full max-w-md p-10 bg-gray-300 bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl border border-white border-opacity-20">
        <h2 className="text-4xl font-extrabold text-black mb-8 text-center tracking-widest">
          ADMIN LOGIN
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-800 font-semibold mb-2 tracking-wide"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white border-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-70 transition"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-800 font-semibold mb-2 tracking-wide"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white border-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-70 transition"
              placeholder="••••••••"
            />
          </div>

          {errorMsg && (
            <p className="text-red-400 font-semibold text-center animate-pulse">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-white bg-opacity-20 text-black font-bold rounded-xl tracking-wide hover:bg-opacity-40 active:scale-95 transition transform duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
