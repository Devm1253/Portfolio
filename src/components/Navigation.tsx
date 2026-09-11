import { useState, useEffect } from 'react';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className={`px-6 py-2 rounded-full transition-all ${
              activeSection === 'home' 
                ? 'border-2 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/50' 
                : 'text-white hover:text-cyan-400'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className={`px-6 py-2 rounded-full transition-all ${
              activeSection === 'about' 
                ? 'border-2 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/50' 
                : 'text-white hover:text-cyan-400'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className={`px-6 py-2 rounded-full transition-all ${
              activeSection === 'experience' 
                ? 'border-2 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/50' 
                : 'text-white hover:text-cyan-400'
            }`}
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className={`px-6 py-2 rounded-full transition-all ${
              activeSection === 'projects' 
                ? 'border-2 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/50' 
                : 'text-white hover:text-cyan-400'
            }`}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`px-6 py-2 rounded-full transition-all ${
              activeSection === 'contact' 
                ? 'border-2 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/50' 
                : 'text-white hover:text-cyan-400'
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}