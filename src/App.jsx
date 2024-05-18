import { useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import Rentdetails from "./pages/rentdetails";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    if (
      HTMLScriptElement.supports &&
      HTMLScriptElement.supports("speculationrules")
    ) {
      const speculationtag = document.createElement("script");
      speculationtag.type = "speculationrules";
      const speculationRules = {
        prerender: [
          {
            source: "list",
            urls: ["/", "/details"],
          },
        ],
        prefetch: [
          {
            source: "list",
            urls: ["/"],
          },
        ],
      };
      speculationtag.textContent = JSON.stringify(speculationRules);
      document.body.appendChild(speculationtag);
    } else {
      console.log("speculation rules api is not supporting");
    }
  });
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details" element={<Rentdetails />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
