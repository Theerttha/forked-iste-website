import React, { useEffect, useRef } from 'react';
import './Achievments.css'
import Ignifex from '../assets/Achievements/Ignifex.JPG'
const Achievements = () => {
  const sectionRefs = useRef([]);

  // Achievement data - replace with your actual content and images
  const achievements = [
    {
      id: 1,
      title: "NEXORA Champions",
      content: "Champions of 24th annual state students'convention of kerala section held at MBCET",
      image: "./"
    },
    {
      id: 2,
      title: "IGNIFEX Champions",
      content: "Champions of 23rd annual state students'convention of kerala section held at GEC Kozhikode",
      image:Ignifex // Replace with your image path
    },
    {
      id: 3,
      title: "ATHENA Champions",
      content: "Champions of 22nd annual state students'convention of kerala section held at TKM",
      image: "./" // Replace with your image path
    },
   
  ];

  useEffect(() => {
    const fadeInOnScroll = () => {
      sectionRefs.current.forEach(section => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          const sectionVisible = 150;
          
          if (sectionTop < window.innerHeight - sectionVisible) {
            section.classList.add('is-visible');
          }
        }
      });
    };

    // Initial check
    fadeInOnScroll();

    // Add scroll listener
    window.addEventListener('scroll', fadeInOnScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', fadeInOnScroll);
    };
  }, []);

  return (
    <section className="achievements-section">
      <h1 
        className="achievements-title fade-in-section"
        ref={el => sectionRefs.current[0] = el}
      >
        Our Achievements
      </h1>
      
      {achievements.map((achievement, index) => (
        <div 
          key={achievement.id}
          className="achievement-card fade-in-section"
          ref={el => sectionRefs.current[index + 1] = el}
        >
          <div className="achievement-content">
            <h2>{achievement.title}</h2>
            <p>{achievement.content}</p>
          </div>
          <div className="achievement-image">
            <img 
              src={achievement.image} 
              alt={achievement.title}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300/333333/ffffff?text=Achievement+Image';
              }}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Achievements;