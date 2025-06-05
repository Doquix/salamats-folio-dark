
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Github, ExternalLink, Calendar } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const ProjectCarousel = () => {
  const projects = [
    {
      title: "XUHSO Inventory System",
      period: "Mar 2024 – May 2024",
      description: "Comprehensive inventory management system for Xavier University Health Services Office. Built with Laravel and Bootstrap, featuring Twilio SMS alerts for low stock notifications and deployed on Render for reliable cloud hosting.",
      technologies: ["Laravel", "Bootstrap", "Twilio SMS", "MySQL", "Render"]
    },
    {
      title: "XU SLP Website",
      period: "Apr 2024 – Mar 2024",
      description: "Responsive website for Xavier University's Service Learning Program Office. Features a modern interface for program information, student project showcase, and comprehensive resource management using the LAMP stack.",
      technologies: ["Laravel", "Bootstrap", "MySQL", "Apache", "PHP"]
    },
    {
      title: "Artwork Web Service",
      period: "Nov – Dec 2023",
      description: "RESTful API service built with Flask for artwork management and gallery functionality. Features comprehensive Swagger documentation and efficient MySQL database integration for artwork data storage and retrieval.",
      technologies: ["Flask", "Python", "MySQL", "Swagger", "REST API"]
    },
    {
      title: "Booking Management System",
      period: "Nov 2023",
      description: "Theatre booking system developed with Flask and MongoDB for efficient reservation management. Features real-time availability checking, user-friendly booking interface, and robust data management capabilities.",
      technologies: ["Flask", "MongoDB", "Python", "JavaScript"]
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
            A showcase of my recent professional work, demonstrating expertise in full-stack development 
            and modern web technologies with real-world applications.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 2
              }
            }}
            className="pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-portfolio-dark-light border border-portfolio-dark-lighter rounded-xl overflow-hidden card-hover h-full">
                  <div className="px-[18px] py-[18px]">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-portfolio-text">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-portfolio-accent text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.period}
                      </div>
                    </div>
                    
                    <p className="text-portfolio-text-muted mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
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
