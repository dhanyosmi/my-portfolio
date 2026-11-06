import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import AuditContest from '@/components/AuditContest';
import Experience from '@/components/Experience';
import BlogPosts from '@/components/BlogPosts';
import Certifications from '@/components/Certifications';
import ExperienceDetails from '@/components/ExperienceDetails';
import Hackathon from '@/components/Hackathon';
import HackathonDetails from '@/components/HackathonDetails';
import Project from '@/components/Project';
import ProjectDetails from '@/components/ProjectDetails';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--th-bg)] text-[var(--th-body)] transition-colors duration-200">
      <Sidebar />
      <main className="md:ml-60 pt-16 md:pt-0">
        <div id="home">
          <Hero />
        </div>
        <About />
        <AuditContest />
        <Experience />
        <ExperienceDetails />
        <Project />
        <ProjectDetails />
        <Hackathon />
        <HackathonDetails />
        <BlogPosts />
        <Certifications />
        <Gallery />
        <footer className="mx-auto w-full max-w-shell px-6 md:px-10 lg:px-14 py-8 border-t border-[var(--th-line)]">
          <p className="text-xs uppercase tracking-[0.08em] text-[var(--th-faint)]">
            Last updated 6 Nov 2026
          </p>
        </footer>
      </main>
    </div>
  );
}
