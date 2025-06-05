
import React from 'react';
import { Code, Palette, Database, Brain, Settings, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Languages",
      skills: ["Python", "PHP", "JavaScript", "SQL"]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Frameworks & Libraries",
      skills: ["Laravel", "Flask", "Vue.js", "Bootstrap", "Tailwind CSS"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases & Storage",
      skills: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Development Tools",
      skills: ["Git", "Docker", "VSCode", "IntelliJ IDEA", "Postman", "phpMyAdmin"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Design & Documentation",
      skills: ["Figma", "Draw.io", "Canva", "Swagger"]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Platforms & OS",
      skills: ["Linux", "Render", "Docker", "WordPress", "Shopify"]
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
            A comprehensive toolkit of modern technologies and professional tools that I use to deliver 
            robust full-stack solutions and exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
            Continuously learning and exploring cutting-edge technologies to stay ahead of industry trends 
            and deliver innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
