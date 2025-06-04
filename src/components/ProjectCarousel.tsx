
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Github } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const ProjectCarousel = () => {
  const projects = [
    {
      title: "XU SLP Website",
      description: "Front-end developer of a comprehensive website for the Service Learning Program Office using the LAMP stack. Features responsive design and user-friendly interface for program information and resources.",
      technologies: ["Laravel", "MySQL", "Apache", "PHP", "Bootstrap"],
      
    },
    {
      title: "XUHSO Inventory Management System",
      description: "Full-stack web application built with Laravel and Bootstrap for health services office inventory management. Integrated with PostgreSQL database and deployed using Docker containers.",
      technologies: ["Laravel", "Bootstrap", "PostgreSQL", "Docker"],
      
    },
    {
      title: "Artwork Webservice",
      description: "RESTful API service built with Flask framework for artwork management and gallery functionality. Utilizes MySQL database for efficient data storage and retrieval.",
      technologies: ["Flask", "Python", "MySQL", "REST API"],
  
    },
    {
      title: "Booking Management System",
      description: "Online booking system developed with Flask and MongoDB for efficient appointment and reservation management. Features real-time availability and user-friendly booking interface.",
      technologies: ["Flask", "MongoDB", "Python", "JavaScript"],
     
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
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-portfolio-text mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-portfolio-text-muted mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="skill-tag text-xs">
                          {tech}
                        </span>
                      ))}
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
