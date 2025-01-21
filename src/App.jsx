import React from "react";
import Clock from "./components/Clock";
import Quote from "./components/Quote";
import SocialLinks from "./components/SocialLinks";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center font-sans">
      <h1 className="text-4xl font-extrabold text-blue-400 mb-8">
        BE POSITIVE ❤️
      </h1>
      <Clock />
      <Quote />
      <SocialLinks />
      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} Motivation, Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
