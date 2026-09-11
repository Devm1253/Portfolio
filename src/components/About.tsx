import { GraduationCap } from "lucide-react";

export function About() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Farmingdale State College",
      location: "Farmingdale, NY",
      year: "Expected Dec 2027"
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-xl text-gray-300 text-center">
            I'm a Computer Science student at Farmingdale State College focused on software engineering
            and intelligent systems. I enjoy building practical web and software applications, exploring how
            modern tech works under the hood, and solving challenging engineering problems. I am actively
            seeking internship opportunities to contribute to impactful engineering teams.
          </p>

          <div className="mt-16">
            <h3 className="text-3xl mb-8 flex items-center gap-3">
              <GraduationCap className="text-cyan-400" size={36} />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-slate-900/50 p-6 rounded-lg border border-cyan-500/30 hover:border-pink-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h4 className="text-xl text-cyan-400">{edu.degree}</h4>
                    <span className="text-pink-400">{edu.year}</span>
                  </div>
                  <p className="text-gray-300">{edu.school}</p>
                  <p className="text-gray-400">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}