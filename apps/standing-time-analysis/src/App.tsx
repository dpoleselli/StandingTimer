import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/app/app-layout";
import { AboutPage } from "./components/pages/about";
import { HomePage } from "./components/pages/home";
import { useInitNewRelicAttributes } from "./hooks/use-init-new-relic-attributes";

function App() {
  useInitNewRelicAttributes();

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
