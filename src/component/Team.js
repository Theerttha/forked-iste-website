import React, { useState, useEffect, useRef } from 'react';
import ProfJeena from '../assets/ProfJeenaJohn.jpg';
import Abdu from '../assets/Abdu-Convenor.jpg';
import Sweda from '../assets/SWEDA-SECRETARY.jpg';
import Rachel from '../assets/Rachel-Treasurer.jpg';
import Shafiya from '../assets/Execom/Department/Architecture/Shafiya.jpg'
import Mazha from '../assets/Execom/Department/Architecture/Mazha.jpg'
import Jyoshna from '../assets/Execom/Department/Architecture/Jyoshna.jpg'
import Saliya from '../assets/Execom/Department/Architecture/Saliya -Technical co lea.jpg'
import linkedin from '../assets/linkedin.svg';
import './Team.css';

// Sample team data with categories and subcategories
const teamData = {
  'Main Execom': [
    {
      id: 1,
      name: 'Prof. Jeena John',
      role: 'Faculty Advisor',
      image: ProfJeena,
      linkedin: 'https://www.linkedin.com/in/jeena-john-6420b3171'
    },
    {
      id: 2,
      name: 'Abdullah Rishad',
      role: 'Convenor',
      image: Abdu,
      linkedin: 'https://www.linkedin.com/in/abdullah-rishad-721195162/'
    },
    {
      id: 3,
      name: 'Sweda Dinesh',
      role: 'Secretary',
      image: Sweda,
      linkedin: 'https://www.linkedin.com/in/sweda-dinesh-9b354b21b/'
    },
    {
      id: 4,
      name: 'Rachel Babu',
      role: 'Treasurer',
      image: Rachel,
      linkedin: 'https://www.linkedin.com/in/rachel-babu-9a9909247/'
    }
  ],
 
    'Architecture':[
    {
      id: 5,
      name: 'Fathima Shafiya',
      role: 'Head',
      image: Shafiya,
      linkedin: ''
    },
    {
      id: 6,
      name: 'Mazha K S',
      role: 'Vice Head',
      image: Mazha,
      linkedin: ''
    },
    {
      id: 7,
      name: 'Jyoshna J Nair',
      role: 'Technical Lead',
      image: Jyoshna,
      linkedin: ''
    },
    {
      id: 8,
      name: 'Saliya',
      role: 'Technical co lead',
      image: Saliya,
      linkedin: ''
    }

    ]
  }


// Category structure for organized dropdown
const categoryStructure = [
  { 
    type: 'main', 
    key: 'Main Execom', 
    label: 'Main Execom' 
  },
  { 
    type: 'header', 
    label: 'Department' 
  },
  { 
    type: 'sub', 
    key: 'Architecture', 
    label: 'Architecture' 
  }
];

// Simple ChevronDown component to avoid external dependency
const ChevronDown = ({ className }) => (
  <svg 
    className={className}
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="6,9 12,15 18,9"></polyline>
  </svg>
);

export default function Team() {
  const [isVisible, setVisible] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Main Execom');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const domRef = useRef();
  const dropdownRef = useRef();

  useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observerRefValue = domRef.current;
    if (observerRefValue) {
      observer.observe(observerRefValue);
    }
    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  //const categories = Object.keys(teamData);
  const currentMembers = teamData[selectedCategory] || [];

  const renderDropdownOptions = () => {
    return categoryStructure.map((item, index) => {
      if (item.type === 'header') {
        return (
          <div key={index} className="filter-category-header">
            {item.label}
          </div>
        );
      } else if (item.type === 'main') {
        return (
          <div
            key={item.key}
            className={`filter-option ${selectedCategory === item.key ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(item.key);
              setIsDropdownOpen(false);
            }}
          >
            {item.label}
          </div>
        );
      } else if (item.type === 'sub') {
        return (
          <div
            key={item.key}
            className={`filter-subcategory ${selectedCategory === item.key ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(item.key);
              setIsDropdownOpen(false);
            }}
          >
            {item.label}
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className={`container fade-in-section ${isVisible ? 'is-visible' : ''}`}
         ref={domRef} 
         id='team'>
      
      <div className="mainHeadDiv">
        <h1 className="mainHead">ISTE GECT EXECOM'23</h1>
      </div>

      {/* Filter Dropdown */}
      <div className="filter-container">
        <div className="filter-dropdown" ref={dropdownRef}>
          <button 
            className="filter-button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedCategory}
            <ChevronDown 
              className={`chevron-icon ${isDropdownOpen ? 'rotated' : ''}`}
            />
          </button>
          
          <div className={`filter-dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
            {renderDropdownOptions()}
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="team-grid">
        <div className="team-grid-container">
          {currentMembers.map((member) => (
            <div key={member.id} className="team-member-container">
              <div className="subHeadDiv">
                <h1 className="subHead">{member.role}</h1>
              </div>
              
              <div className="imgNameDiv">
                <div className="imgDiv">
                  <img className="img1" src={member.image} alt={member.name} />
                </div>
                <div className="imgShade"></div>
                <div className="detailsDiv">
                  <h1 className="name">{member.name}</h1>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <img className="linkedinIcon" src={linkedin} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}