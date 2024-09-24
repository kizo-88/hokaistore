"use client";

import { useState } from "react";
import Link from "next/link";
import MagicButton from "@/components/MagicButton"; // Adjust the path as needed

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    // Handle the login logic here
    console.log("Login button clicked");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="container max-w-lg mx-auto p-8 bg-card rounded-lg shadow-lg">
        {/* Centering the heading */}
        <h1 className="heading mb-6 text-center">
          Login For Better Experience
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-md shadow-sm bg-input text-foreground"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-md shadow-sm bg-input text-foreground"
              required
            />
          </div>

          {/* Center the button */}
          <div className="flex justify-center">
            <MagicButton
              title="Sign In"
              icon={<span></span>} // You can replace this with any icon
              position="left"
              handleClick={handleLoginClick}
              otherClasses="w-full" // Add full width styling
            />
          </div>
        </form>

        {/* Center the sign up text */}
        <p className="mt-6 text-center">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-secondary-foreground hover:text-secondary"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
