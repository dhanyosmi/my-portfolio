'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTelegram, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const navItems: { name: string; href: string }[] = [
  { name: 'About', href: 'about' },
  { name: 'Audit Contest', href: 'audit-contest' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
  { name: 'Hackathons', href: 'hackathon' },
  { name: 'Blog', href: 'blog' },
  { name: 'Certification', href: 'certifications' },
  { name: 'Gallery', href: 'gallery' },
];

// Gmail's compose view, prefilled. The envelope icon below already covers
// mailto: for anyone using a desktop mail client.
const HIRE_ME_URL =
  'https://mail.google.com/mail/?view=cm&fs=1&to=dhanyosmiresearcher@gmail.com&su=' +
  encodeURIComponent('Hiring enquiry');

const socials = [
  { name: 'Email', href: 'mailto:dhanyosmiresearcher@gmail.com', icon: <FaEnvelope /> },
  { name: 'GitHub', href: 'https://github.com/dhanyosmi', icon: <FaGithub /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/amankumarsah/', icon: <FaLinkedin /> },
  { name: 'X', href: 'https://x.com/thedhanyosmi', icon: <FaXTwitter /> },
  { name: 'Telegram', href: 'https://t.me/dhanyosmi', icon: <FaTelegram /> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));

    const handleScroll = () => {
      const sections = navItems.map((item) => item.href);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If the mobile menu is open, its closing animation (a height/layout
    // change on a fixed-position panel) cancels an in-progress smooth
    // scroll almost immediately. Close it first and wait for that exit
    // animation to finish before starting the scroll.
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
  };

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <nav className="flex flex-col gap-0.5">
      {navItems.map((item) => (
        <div key={item.href}>
          <div className="relative flex items-center">
            <button
              onClick={() => {
                scrollToSection(item.href);
                onClick?.();
              }}
              className="flex-1 relative text-left pl-3.5 pr-2 py-1.5 text-[17px] text-[var(--th-ink)] hover:text-[var(--th-muted)] transition-colors duration-150"
            >
              {activeSection === item.href && (
                <span className="absolute left-0 top-1 bottom-1 w-[2px] rounded-full bg-[var(--th-ink)]" />
              )}
              {item.name}
            </button>
          </div>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop fixed sidebar */}
      <aside className="hidden md:flex md:flex-col fixed top-0 left-0 bottom-0 w-60 overflow-y-auto px-7 pt-10 pb-8 border-r border-[var(--th-line)] bg-[var(--th-surface)] z-20 transition-colors duration-200">
        <button onClick={() => scrollToSection('about')} className="block mb-9 w-fit">
          <img
            src="/dhany.jpg"
            alt="Dhanyosmi"
            className="w-28 h-28 rounded-full object-cover border border-[var(--th-line)]"
          />
        </button>

        <NavLinks />

        <a
          href="https://t.me/dhanyosmi"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-[var(--th-fill)] text-[var(--th-on-ink)] text-sm font-semibold hover:bg-[var(--th-fill-hover)] transition-colors duration-200"
        >
          Request an audit
        </a>

        <a
          href={HIRE_ME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2.5 inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-[var(--th-ink)] text-[var(--th-ink)] text-sm font-semibold hover:bg-[var(--th-fill)] hover:text-[var(--th-on-ink)] transition-colors duration-200"
        >
          Hire me
        </a>

        <div className="flex items-center gap-3.5 mt-6 text-[var(--th-muted)]">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="text-lg hover:text-[var(--th-ink)] transition-colors duration-150"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          aria-label="Switch colour scheme"
          className="mt-6 inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full border border-[var(--th-line)] text-[var(--th-muted)] text-xs font-semibold hover:border-[var(--th-ink)] hover:text-[var(--th-ink)] transition-colors duration-150"
        >
          {isDark ? <FaSun /> : <FaMoon />}
          {isDark ? 'Light' : 'Dark'}
        </button>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--th-surface)] border-b border-[var(--th-line)] transition-colors duration-200">
        <div className="flex items-center justify-between px-4 h-16">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu" className="text-xl text-[var(--th-ink)]">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <button onClick={() => scrollToSection('about')}>
            <img
              src="/dhany.jpg"
              alt="Dhanyosmi"
              className="w-9 h-9 rounded-full object-cover border border-[var(--th-line)]"
            />
          </button>
          <button onClick={toggleTheme} aria-label="Switch colour scheme" className="text-lg text-[var(--th-muted)]">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-[var(--th-line)]"
            >
              <div className="px-5 py-5 space-y-4">
                <NavLinks onClick={() => setIsOpen(false)} />
                <a
                  href="https://t.me/dhanyosmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 rounded-full bg-[var(--th-fill)] text-[var(--th-on-ink)] font-semibold text-sm"
                >
                  Request an audit
                </a>
                <a
                  href={HIRE_ME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 rounded-full border border-[var(--th-ink)] text-[var(--th-ink)] font-semibold text-sm"
                >
                  Hire me
                </a>
                <div className="flex items-center justify-center gap-5 text-[var(--th-muted)] pt-1">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="text-xl hover:text-[var(--th-ink)] transition-colors duration-150"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
