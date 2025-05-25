
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ExternalLink, Github } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const ProjectCarousel = () => {
  const projects = [
    {
      title: "XU SLP Website",
      description: "Front-end development of a comprehensive website for the Service Learning Program Office using the LAMP stack. Features responsive design and user-friendly interface for program information and resources.",
      technologies: ["Laravel", "MySQL", "Apache", "PHP", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "XUHSO Inventory Management System",
      description: "Full-stack web application built with Laravel and Bootstrap for health services office inventory management. Integrated with PostgreSQL database and deployed using Docker containers.",
      technologies: ["Laravel", "Bootstrap", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Artwork Webservice",
      description: "RESTful API service built with Flask framework for artwork management and gallery functionality. Utilizes MySQL database for efficient data storage and retrieval.",
      technologies: ["Flask", "Python", "MySQL", "REST API"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Booking Management System",
      description: "Online booking system developed with Flask and MongoDB for efficient appointment and reservation management. Features real-time availability and user-friendly booking interface.",
      technologies: ["Flask", "MongoDB", "Python", "JavaScript"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise in full-stack development and modern web technologies.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-portfolio-dark-light border border-portfolio-dark-lighter rounded-xl overflow-hidden card-hover h-full">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-portfolio-text mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-portfolio-text-muted mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="skill-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href={project.link}
                        className="flex items-center gap-2 bg-portfolio-accent hover:bg-portfolio-accent-light text-portfolio-dark px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                      <a 
                        href={project.github}
                        className="flex items-center gap-2 border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-dark px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
