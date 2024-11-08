"use client";
import useAuth from "@/appwriteService";
import React, { useContext, useState } from "react";
import { MyContext } from "../context/myContext";
import { useRouter } from "next/navigation";
import { Toaster, toast } from 'sonner'

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, getActiveSession } = useAuth();
  const { setLoggedIn } = useContext(MyContext);
const router = useRouter();


  const handleLogin = async (e) => {
    e.preventDefault();
    // Add login logic here

    const activeSession = await getActiveSession(); // Function to check for an active session
  
    if (activeSession) {
      toast.error("You are already logged in.");
      return;
    }

    const loggedInUser = await login(username, password);
    console.log(loggedInUser);

    if (loggedInUser == false) {
      toast.error('Invalid Credentials')
    }

    if (loggedInUser != false) {
      setLoggedIn(true);
router.push('/add-blog')

    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
