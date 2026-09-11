import { Globe, Cpu, Database, Wrench } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web & Mobile App Development",
      description: "Building responsive web and mobile interfaces using modern technologies like React, React Native, TypeScript, and Tailwind CSS."
    },
    {
      icon: Database,
      title: "Backend & API Engineering",
      description: "Developing robust backend services, RESTful APIs, and database models with Python, Django REST Framework, SQL, and MongoDB."
    },
    {
      icon: Cpu,
      title: "Applied AI & Automation",
      description: "Integrating intelligent API workflows (Claude API, Gemini API) and developing local NLP tools for text and data analysis."
    },
    {
      icon: Wrench,
      title: "Process Automation & Support",
      description: "Creating scripts, troubleshooting documentation, and automated reporting dashboards to optimize operational workflows."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          What I Can Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-slate-900/50 p-8 rounded-lg border border-cyan-500/30 hover:border-pink-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-sm"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-pink-500/20 p-3 rounded-lg w-fit mb-4">
                  <IconComponent className="text-cyan-400" size={28} />
                </div>
                <h3 className="text-2xl text-pink-400 mb-3 font-medium">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}