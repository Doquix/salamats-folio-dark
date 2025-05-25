
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const initGSAPAnimations = () => {
  // Hero section animations
  gsap.fromTo('.hero-title', 
    { 
      opacity: 0, 
      y: 50 
    }, 
    { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: 'power2.out',
      delay: 0.2
    }
  );

  gsap.fromTo('.hero-subtitle', 
    { 
      opacity: 0, 
      y: 30 
    }, 
    { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: 'power2.out',
      delay: 0.5
    }
  );

  gsap.fromTo('.hero-buttons', 
    { 
      opacity: 0, 
      y: 20 
    }, 
    { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: 'power2.out',
      delay: 0.8
    }
  );

  // Section animations on scroll
  gsap.utils.toArray('.section-animate').forEach((section: any) => {
    gsap.fromTo(section, 
      { 
        opacity: 0, 
        y: 50 
      }, 
      {
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Card hover animations
  gsap.utils.toArray('.card-hover').forEach((card: any) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { 
        scale: 1.05, 
        duration: 0.3, 
        ease: 'power2.out' 
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, { 
        scale: 1, 
        duration: 0.3, 
        ease: 'power2.out' 
      });
    });
  });
};

export const animateSkillTags = () => {
  gsap.utils.toArray('.skill-tag').forEach((tag: any, index) => {
    gsap.fromTo(tag, 
      { 
        opacity: 0, 
        scale: 0.8 
      }, 
      {
        opacity: 1, 
        scale: 1, 
        duration: 0.5, 
        ease: 'back.out(1.7)',
        delay: index * 0.1,
        scrollTrigger: {
          trigger: tag,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
};
