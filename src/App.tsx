import Router from "components/Router";
import React from "react";
import Header from "./components/Header";
import { useEffect } from "react";
// @ts-ignore
import { themeChange } from "theme-change";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <main className="flex flex-col min-w-[320px] min-h-screen">
      <Header />

      <section className="container mx-auto flex-grow flex flex-col">
        <Router />
      </section>
    </main>
  );
}

export default App;
