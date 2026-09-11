import { Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImage from "../assets/profile.jpg";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl lg:text-6xl">
              I'm a Software Engineer
              <span className="inline-block ml-2">👋</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl">
              Hello, I'm{" "}
              <span className="text-cyan-400">Dev Mondal</span>, a Computer Science major at
              Farmingdale State College. I love using AI to build apps and learning how things
              actually work under the hood. I'm currently pursuing internship opportunities and
              always excited to take on new challenges and grow as a developer.
            </p>

            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/Devm1253" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View Dev Mondal's GitHub profile"
                className="text-white hover:text-cyan-400 transition-all hover:scale-110"
              >
                <Github size={32} />
              </a>
              <a 
                href="https://www.linkedin.com/in/dev-mondal/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View Dev Mondal's LinkedIn profile"
                className="text-white hover:text-pink-400 transition-all hover:scale-110"
              >
                <Linkedin size={32} />
              </a>
              <a 
                href="mailto:Devm1253@gmail.com"
                aria-label="Email Dev Mondal"
                className="text-white hover:text-cyan-400 transition-all hover:scale-110"
              >
                <Mail size={32} />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToContact}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg hover:from-cyan-600 hover:to-pink-600 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
              >
                Contact Me
              </button>
              <a
                href="https://github.com/Devm1253"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-slate-900 rounded-lg hover:bg-cyan-400 hover:text-white transition-all"
              >
                View My Work
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/30">
              <ImageWithFallback 
                src={profileImage}
                alt="Dev Mondal"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}