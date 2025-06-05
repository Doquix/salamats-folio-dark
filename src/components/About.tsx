
import React from 'react';
import { GraduationCap, Briefcase, Users } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "BS Information Technology",
      organization: "Xavier University – Ateneo de Cagayan",
      period: "Aug 2021 – Present",
      description: "Currently pursuing a Bachelor's degree in Information Technology with a GPA of 3.15. Relevant coursework includes Networking, DBMS, OOP, Software Engineering, Machine Learning, and Data Structures & Algorithms."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Web Developer",
      organization: "Office of the Vice President for Higher Education",
      period: "June 2024 – May 2025",
      description: "Built clearance management features with Laravel Eloquent ORM and Flask authorization. Integrated announcements panel and feedback survey UI. Deployed features via API with Docker and Git."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Data Encoder",
      organization: "LGU Jasaan",
      period: "Sep 2024 – Mar 2025",
      description: "Encoded fuel data, maintained detailed logs, and prepared Program of Works (POWs) for local government engineering projects."
    }
  ];

  return (
    <section id="about" className="py-20 section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-portfolio-text">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-portfolio-text-muted max-w-3xl mx-auto leading-relaxed">
            A passionate full-stack web developer from Cagayan de Oro, Philippines, specializing in Laravel and Flask development. 
            I create innovative digital solutions with modern technologies and continuously expand my expertise to deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-portfolio-dark-light border border-gray-200 dark:border-portfolio-dark-lighter rounded-xl p-6 card-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-portfolio-accent/10 p-3 rounded-lg mr-4">
                  <div className="text-portfolio-accent">
                    {experience.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-portfolio-text">
                    {experience.title}
                  </h3>
                  <p className="text-portfolio-accent text-sm font-medium">
                    {experience.organization}
                  </p>
                  <p className="text-gray-500 dark:text-portfolio-text-muted text-xs">
                    {experience.period}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-portfolio-text-muted leading-relaxed">
                {experience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-50 dark:bg-portfolio-dark-light border border-gray-200 dark:border-portfolio-dark-lighter rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-portfolio-text mb-4">
              Professional Certifications
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="skill-tag">Civil Service Exam – Professional Level</span>
              <span className="skill-tag">CCNAv7: Switching, Routing, and Wireless Essentials</span>
              <span className="skill-tag">CCNAv7: Introduction to Networks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
