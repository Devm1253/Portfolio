import { Code2, ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "LeaseGuard",
      description: "A comprehensive property and lease management platform featuring secure workflow automation, document records, and automated scheduling integrations.",
      technologies: [
        "React Native",
        "Django REST Framework",
        "MongoDB",
        "Claude API",
        "GitHub Actions",
        "Figma"
      ],
      url: "https://github.com/jaskaranbhogal/LeaseGuard"
    },
    {
      title: "Dealership Application",
      description: "A desktop vehicle dealership GUI built with JavaFX and Scene Builder. Features categorised inventory filtering across SUVs, sedans, sports cars, and trucks with detailed specification views.",
      technologies: ["Java", "JavaFX", "FXML", "Scene Builder", "Maven"],
      url: "https://github.com/Devm1253/Dealership"
    },
    {
      title: "Car Maintenance Tracker",
      description: "A client-side vehicle tracking application to log service records, calculate maintenance costs, and generate mileage-based service interval reminders with persistent local storage.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Web Storage API", "DOM Manipulation"],
      url: "https://github.com/Devm1253/Car-Maintenance-Tracker"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 p-6 rounded-lg border border-cyan-500/30 hover:border-pink-500/50 transition-all hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-pink-500/20 p-2 rounded-lg">
                    <Code2 className="text-cyan-400" size={24} />
                  </div>
                  <h3 className="text-xl text-pink-400 font-medium">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-cyan-300 rounded-full text-xs border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-pink-400 transition-all pt-4 border-t border-cyan-500/20 w-fit"
                >
                  <Github size={16} />
                  <span>View Repository</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}