
import React from 'react';
import { GraduationCap, Briefcase, Users } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "BS Information Technology",
      organization: "Xavier University – Ateneo de Cagayan",
      description: "Currently pursuing a Bachelor's degree in Information Technology, building a strong foundation in computer science and software development."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Internship Experience",
      organization: "LGU Jasaan Engineering Office",
      description: "Gained practical experience in software development and project management while working with local government engineering projects."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Student Assistant",
      organization: "Xavier University",
      description: "Developed leadership and organizational skills while supporting various university departments and student activities."
    }
  ];

  return (
    <section id="about" className="py-20 section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto leading-relaxed">
            A passionate web developer from the Philippines, dedicated to creating innovative digital solutions 
            and continuously learning new technologies to build better user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="bg-portfolio-dark-light border border-portfolio-dark-lighter rounded-xl p-6 card-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-portfolio-accent/10 p-3 rounded-lg mr-4">
                  <div className="text-portfolio-accent">
                    {experience.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-portfolio-text">
                    {experience.title}
                  </h3>
                  <p className="text-portfolio-accent text-sm">
                    {experience.organization}
                  </p>
                </div>
              </div>
              <p className="text-portfolio-text-muted leading-relaxed">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
