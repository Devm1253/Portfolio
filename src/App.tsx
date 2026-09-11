import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white flex flex-col">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects/>
      <Skills/> 
      <Services/> 
      <Contact />
    </div>
  );
}