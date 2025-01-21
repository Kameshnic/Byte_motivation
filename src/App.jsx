import React from "react";
import Clock from "./components/Clock";
import Quote from "./components/Quote";
import SocialLinks from "./components/SocialLinks";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center font-sans px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-6 text-center">
        BE POSITIVE ❤️
      </h1>
      <Clock />
      <Quote />
      <h1 className="text-2xl md:text-4xl font-extrabold text-blue-400 mt-8 mb-6 text-center">
        REFRESH AND GET YOUR QUOTE!
      </h1>
      <SocialLinks />
      <footer className="mt-8 md:mt-12 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Motivation, Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
