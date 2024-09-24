"use client";

import React, { useState } from "react";
import Link from "next/link";
import MagicButton from "@/components/MagicButton"; // Adjust the path as needed

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegisterClick = () => {
    // Handle the registration logic here
    console.log("Register button clicked");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle registration logic here
    console.log(
      "Username:",
      username,
      "Email:",
      email,
      "Password:",
      password,
      "Confirm Password:",
      confirmPassword
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="container max-w-lg mx-auto p-8 bg-card rounded-lg shadow-lg">
        <h1 className="heading mb-6 text-center">Create Your Account</h1>

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
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-md shadow-sm bg-input text-foreground"
              required
            />
          </div>

          <div className="flex justify-center">
            <MagicButton
              title="Sign Up"
              icon={<span></span>} // You can replace this with any icon
              position="left"
              handleClick={handleRegisterClick}
              otherClasses="w-full"
            />
          </div>
        </form>

        <p className="mt-6 text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-secondary-foreground hover:text-secondary"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
