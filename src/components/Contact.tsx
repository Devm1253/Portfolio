import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:Devm1253@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6 text-cyan-400">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm actively seeking internship opportunities and open to discussing new projects, technical ideas, or collaborations. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:Devm1253@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-all group"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-pink-500/20 p-3 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <span>Devm1253@gmail.com</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/dev-mondal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-pink-400 transition-all group"
              >
                <div className="bg-gradient-to-br from-pink-500/20 to-cyan-500/20 p-3 rounded-lg group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all">
                  <Linkedin className="text-pink-400" size={24} />
                </div>
                <span>https://www.linkedin.com/in/dev-mondal/</span>
              </a>

              <a 
                href="https://github.com/Devm1253"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-all group"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-pink-500/20 p-3 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                  <Github className="text-cyan-400" size={24} />
                </div>
                <span>github.com/Devm1253</span>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg focus:border-pink-400 focus:outline-none focus:shadow-lg focus:shadow-pink-500/20 text-white transition-all backdrop-blur-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg focus:border-pink-400 focus:outline-none focus:shadow-lg focus:shadow-pink-500/20 text-white transition-all backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg focus:border-pink-400 focus:outline-none focus:shadow-lg focus:shadow-pink-500/20 text-white resize-none transition-all backdrop-blur-sm"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg hover:from-cyan-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 hover:shadow-pink-500/50 cursor-pointer"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-400 pt-8 border-t border-cyan-500/20">
          <p>© {new Date().getFullYear()} Dev Mondal. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}