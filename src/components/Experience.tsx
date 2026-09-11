import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Operations & IT Intern",
      company: "Amneal Pharmaceuticals",
      location: "Brookhaven, NY",
      period: "June 2025 – August 2025",
      responsibilities: [
        "Monitored internal systems, resolved operational issues, and maintained troubleshooting documentation to ensure smooth workflows.",
        "Created weekly data analysis reports and dashboards to track operational trends and system insights for leadership review.",
        "Developed automation scripts using Python and SQL to streamline process documentation and improve data reporting accuracy."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-center mb-16 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 p-8 rounded-lg border border-pink-500/30 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-pink-500/20 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-cyan-500/20 to-pink-500/20 p-3 rounded-lg">
                  <Briefcase className="text-cyan-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-2xl text-pink-400 font-medium">{exp.title}</h3>
                    <span className="text-cyan-400">{exp.period}</span>
                  </div>
                  <p className="text-xl text-gray-300">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                </div>
              </div>
              
              <ul className="space-y-2 ml-14">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-300 flex gap-3 text-sm leading-relaxed">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}