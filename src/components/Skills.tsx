import { Code, Database, Sparkles, Terminal, Layers } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C#", "HTML/CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      skills: ["React Native", "Django", "Django REST Framework", "JavaFX", "Tailwind CSS"]
    },
    {
      title: "AI & Cloud Integrations",
      icon: Sparkles,
      skills: ["Claude API", "Gemini API"]
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"]
    },
    {
      title: "Developer Tools & DevOps",
      icon: Terminal,
      skills: ["Git", "GitHub Actions", "Docker", "Scene Builder", "Maven", "VS Code", "Vite"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-center mb-16 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-slate-900/50 p-6 rounded-lg border border-pink-500/30 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-pink-500/20 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-pink-500/20 to-cyan-500/20 p-2 rounded-lg">
                    <IconComponent className="text-pink-400" size={24} />
                  </div>
                  <h3 className="text-xl text-cyan-400 font-medium">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-slate-950/50 text-gray-300 rounded-lg text-sm border border-cyan-500/30 hover:border-pink-400/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}