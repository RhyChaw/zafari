'use client';

import { useState } from 'react';
import supabase from '../../utils/supabaseClient'; // Adjust path as needed
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      router.push('/admin'); // Redirect after login
    }
    setLoading(false);
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
            disabled={loading}
            className="w-full py-3 bg-white bg-opacity-20 text-black font-bold rounded-xl tracking-wide hover:bg-opacity-40 active:scale-95 transition transform duration-200"
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
