import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
// import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import LoadingSpinner from "./components/LoadingSpinner";
import React, { Suspense } from "react";

const ProjectsSection = React.lazy(() =>
  import("./components/ProjectsSection")
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectsSection />
        </Suspense>
        <EmailSection />
      </div>
      <Footer />
      <LoadingSpinner />
    </main>
  );
}
