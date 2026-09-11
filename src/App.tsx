import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white flex items-center justify-center">
       <Navigation />
      <Hero />
    </div>
  );
}