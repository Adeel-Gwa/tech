import React, { useState } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { Experience } from './components/Experience';
import { FeaturedWork } from './components/FeaturedWork';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Process } from './components/Process';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { UiUxSpotlight } from './components/UiUxSpotlight';
import { WebDevMasters } from './components/WebDevMasters';
import { projectsData } from './data/projects';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = projectsData.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    setSelectedProject(projectsData[prevIndex]);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projectsData.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setSelectedProject(projectsData[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Custom Follower Cursor */}
      <CustomCursor />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main>
        {/* 1. Hero with Interactive 3D Composition */}
        <Hero />

        {/* 2. Visual Statistics & Metrics Counter */}
        <Stats />

        {/* 3. About Muhammad Adeel & 4 Pillars */}
        <About />

        {/* 4. Featured UI/UX Design Projects Spotlight (From User Screenshots) */}
        <UiUxSpotlight
          projects={projectsData}
          onSelectProject={handleOpenModal}
        />

        {/* 5. Selected Flagship Works Deep Dive */}
        <FeaturedWork
          projects={projectsData}
          onOpenModal={handleOpenModal}
        />

        {/* 6. Complete 100+ Project Showcase with Dynamic Filters & Search */}
        <ProjectsShowcase
          projects={projectsData}
          onOpenModal={handleOpenModal}
        />

        {/* 7. Specialized Engineering Services */}
        <Services />

        {/* 8. Digital Toolkit & Technologies */}
        <Skills />

        {/* 9. Experience Timeline & Career Milestones */}
        <Experience />

        {/* 10. WebDev Masters Agency Section */}
        <WebDevMasters />

        {/* 11. 5-Step Process (From Idea → Product) */}
        <Process />

        {/* 12. Testimonials & Client Trust */}
        <Testimonials />

        {/* 13. Interactive Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
        onPrev={handlePrevProject}
        onNext={handleNextProject}
      />
    </div>
  );
}
