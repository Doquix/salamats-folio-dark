
import React from 'react';
import { Code, Palette, Database, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      skills: ["Laravel", "Flask", "Bootstrap", "Tailwind CSS", "WordPress", "Shopify"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design & Tools",
      skills: ["Figma", "Canva", "Microsoft Office"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Tools",
      skills: ["ChatGPT", "Claude", "Gemini", "DeepSeek"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-portfolio-dark-light/50 section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and tools that I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-portfolio-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-portfolio-accent">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-portfolio-text mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-portfolio-text-muted">
            Always learning and exploring new technologies to stay current with industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
