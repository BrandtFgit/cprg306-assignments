"use client";
import React, { useState } from "react";
import { useUserAuth } from "./_utils/auth-context.js";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [loading, setLoading] = useState(false); // Changed initial state to false

  const handleGitHubSignIn = async () => {
    setLoading(true); // Set loading to true when sign-in process starts
    try {
      await gitHubSignIn();
      setLoading(false); // Set loading to false once sign-in is complete
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
      setLoading(false); // Set loading to false even if sign-in fails
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
      {user ? (
        <div className="text-lg">
          <p>Signed in as {user.displayName} ({user.email})</p>
          <p>
            <button className="text-lg hover:underline" onClick={handleSignOut}>Sign Out</button>
          </p>
          <a className="text-lg hover:underline" href="/week-10/shopping-list" user={user}>Continue to your Shopping List</a>
        </div>
      ) : (
      <div className="text-lg">
        <button className="break text-lg hover:underline" onClick={handleGitHubSignIn} disabled={loading}>
          {loading ? "Signing in..." : "Sign in with GitHub"}
        </button>
      </div>
      )}
    </div>
    
  );
}
