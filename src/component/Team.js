import React, { useState, useEffect, useRef } from 'react';
import ProfJeena from '../assets/ProfJeenaJohn.jpg';
//import Abdu from '../assets/Abdu-Convenor.jpg';

import images from "../assets/Execom/index"
import linkedin from '../assets/linkedin.svg';
import './Team.css';

// Sample team data with categories and subcategories
const teamData = {
  'Office Bearers': [
    {
      id: 1,
      name: 'Prof. Jeena John',
      role: 'Staff In-Charge',
      image: ProfJeena,
      linkedin: 'https://www.linkedin.com/in/jeena-john-6420b3171'
    },
    {
      id: 2,
      name: 'Akshay S',
      role: 'Convenor',
      image: images.AKSHAY_S_CONVENOR,
      linkedin: 'https://www.linkedin.com/in/abdullah-rishad-721195162/'
    },
    {
      id: 3,
      name: 'Krishna S',
      role: 'Secretary',
      image: images.Diya_S_Nair_Joint_Secretary,
      linkedin: 'https://www.linkedin.com/in/sweda-dinesh-9b354b21b/'
    },
    {
      id: 4,
      name: 'Alen Joseph',
      role: 'Treasurer',
      image: images.Alen_Joseph_Treasurer,
      linkedin: 'https://www.linkedin.com/in/rachel-babu-9a9909247/'
    }
  ],
  'Office Bearers2': [
    {
      id: 37,
      name: 'Abhinav R',
      role: 'Joint Convenor',
      image: images.ABHINAV_R_Joint_Convenor,
      linkedin: 'https://www.linkedin.com/in/jeena-john-6420b3171'
    },

    {
      id: 38,
      name: 'Adithyan V',
      role: 'Joint Convenor',
      image: images.ADITHYAN_V_Joint_Convenor,
      linkedin: 'https://www.linkedin.com/in/abdullah-rishad-721195162/'
    },
    {
      id: 39,
      name: 'Diya S Nair',
      role: 'Joint Secretary',
      image: images.Diya_S_Nair_Joint_Secretary,
      linkedin: 'https://www.linkedin.com/in/sweda-dinesh-9b354b21b/'
    },
    {
      id: 40,
      name: 'Vignesh R Pillai',
      role: 'Joint Secretary',
      image: images.Vignesh_R_Pillai__Joint_Secretary,
      linkedin: 'https://www.linkedin.com/in/sweda-dinesh-9b354b21b/'
    },
    {
      id: 41,
      name: 'Gouri Kalyani S',
      role: 'Joint Treasurer',
      image: images.Diya_S_Nair_Joint_Secretary,
      linkedin: 'https://www.linkedin.com/in/rachel-babu-9a9909247/'
    },
    {
      id: 42,
      name: 'Adhil CK',
      role: 'Media Lead',
      image: images.Diya_S_Nair_Joint_Secretary,
      linkedin: 'https://www.linkedin.com/in/rachel-babu-9a9909247/'
    },
    {
      id: 43,
      name: 'Jophin George',
      role: 'Media Lead',
      image: images.Diya_S_Nair_Joint_Secretary,
      linkedin: 'https://www.linkedin.com/in/rachel-babu-9a9909247/'
    },
    {
      id: 44,
      name: 'Anna Regi',
      role: 'Office Secretary',
      image: images.Anna_Regi__Office_Secretary,
      linkedin: 'https://www.linkedin.com/in/rachel-babu-9a9909247/'
    },
    {
      id: 45,
      name: 'Akshay Saju',
      role: 'Chief Technical Officer',
      image:images.Akshay_saju__cto,
      linkedin: 'https://www.linkedin.com/in/rachel-babu-9a9909247/'
    },
    {
      id: 46,
      name: 'Aswathi R',
      role: 'Event Lead',
      image: images.ASWATHI_R__EVENT_LEAD__CHEMICAL___4th_year,
      linkedin: 'https://www.linkedin.com/in/rachel-babu-9a9909247/'
    },
    {
      id: 47,
      name: 'Theerttha S',
      role: 'Web Lead',
      image: images.Theerttha_S_Web_Lead,
      linkedin: 'https://www.linkedin.com/in/rachel-babu-9a9909247/'
    },
    {
      id: 48,
      name: 'Hemanth Krishna',
      role: 'Web Lead',
      image:images.Hemanth_Krishna___Web_Lead,
      linkedin: 'https://www.linkedin.com/in/rachel-babu-9a9909247/'
    }
  ],
  'Executive Committee':[
    {
      id: 49,
      name: 'Alka Gireesh',
      image: images.Alka_Gireesh_Executive_Commitee,
      linkedin: ''
    },
    {
      id: 50,
      name: 'Anie P S',
      image: images.Anie_P_S_Executive_member_,
      linkedin: ''
    },
    {
      id: 51,
      name: 'Anjana Madhu',
      image: images.Diya_S_Nair_Joint_Secretary,
      linkedin: ''
    },
    {
      id: 52,
      name: 'Krishnarjun V V',
      image: images.Krishnarjun_V_V_Executive_Committee,
      linkedin: ''
    },
    {
      id: 53,
      name: 'Sreeram P',
      image: images.Sreeram_P_Executive_Committee_,
      linkedin: ''
    }

    ],
 
    'Architecture':[
    {
      id: 5,
      name: 'Fathima Shafiya',
      role: 'Head',
      image:images.Shafiya,
      linkedin: ''
    },
    {
      id: 6,
      name: 'Mazha K S',
      role: 'Vice Head',
      image: images.Mazha__K__S__Vice_head,
      linkedin: ''
    },
    {
      id: 7,
      name: 'Jyoshna J Nair',
      role: 'Technical Lead',
      image: images.P_Joshna___Vice_head,
      linkedin: ''
    },
    {
      id: 8,
      name: 'Saliya',
      role: 'Technical co lead',
      image: images.Saliya__Technical_co_lead,
      linkedin: ''
    }

    ],
    'Chemical':[
    {
      id: 9,
      name: 'Nourin P M',
      role: 'Head',
      image: images.Nourin_P_M_Forum_Head,
      linkedin: ''
    },
    {
      id: 10,
      name: 'Diya D',
      role: 'Vice Head',
      image: images.DIYA_D_Vice_head,
      linkedin: ''
    },
    {
      id: 11,
      name: 'Gokul H',
      role: 'Technical Lead',
      image: images.Gokul_H_technical_lead,
      linkedin: ''
    },
    {
      id: 12,
      name: 'Karishma',
      role: 'Technical co lead',
      image: images.Karishma_P_V___Tech_Co_Lead,
      linkedin: ''
    }

    ],
    'Civil':[
    {
      id: 13,
      name: 'K Nagesh Kannoth',
      role: 'Head',
      image: images.Diya_S_Nair_Joint_Secretary,
      linkedin: ''
    },
    {
      id: 14,
      name: 'Anikhitha J',
      role: 'Vice Head',
      image: images.Anikhitha_Vice_head,
      linkedin: ''
    },
    {
      id: 15,
      name: 'Shanum Gaddafi',
      role: 'Technical Lead',
      image: images.Shanum_Technical_Lead,
      linkedin: ''
    },
    {
      id: 16,
      name: 'Thejas Surendran',
      role: 'Technical co lead',
      image: images.Thejas_Surendran_technical_co_lead,
      linkedin: ''
    }

    ],
    'CSE':[
    {
      id: 17,
      name: 'Adwaith Shameer',
      role: 'Head',
      image: images.Adwaith_Shameer___Forum_Head_,
      linkedin: ''
    },
    {
      id: 18,
      name: 'Aparna Jose',
      role: 'Vice Head',
      image: images.Aparna_Jose_Vice_Head,
      linkedin: ''
    },
    {
      id: 19,
      name: 'Christeena Geejo',
      role: 'Technical Lead',
      image: images.Christeena_Geejo_Technical_lead,
      linkedin: ''
    },
    {
      id: 20,
      name: 'Sooraj K R',
      role: 'Technical co lead',
      image: images.Sooraj_K_R_Technical_Co_Lead,
      linkedin: ''
    }

    ],
    'ECE':[
    {
      id: 21,
      name: 'Deva Nanda V',
      role: 'Head',
      image: images.DEVA_NANDA_V___HEAD,
      linkedin: ''
    },
    {
      id: 22,
      name: 'Kasinath A V',
      role: 'Vice Head',
      image: images.Kasinath_av__vice_head_dept,
      linkedin: ''
    },
    {
      id: 23,
      name: 'Hrudhik N V',
      role: 'Technical Lead',
      image: images.Hrudik_N_V_Technical_lead,
      linkedin: ''
    },
    {
      id: 24,
      name: 'Nandakishore R S',
      role: 'Technical co lead',
      image: images.NANDAKISHORE_RS_Technical_co_lead,
      linkedin: ''
    }

    ],
    'EEE':[
    {
      id: 25,
      name: 'Nandana Nair',
      role: 'Head',
      image: images.Nandana_Nair_EEE_forum_head,
      linkedin: ''
    },
    {
      id: 26,
      name: 'P Joshna',
      role: 'Vice Head',
      image: images.P_Joshna___Vice_head,
      linkedin: ''
    },
    {
      id: 27,
      name: 'Aswani Santhosh T',
      role: 'Technical Lead',
      image: images.Aswani_Santhosh_T_Techincal_Lead,
      linkedin: ''
    },
    {
      id: 28,
      name: 'Akash M Vijay',
      role: 'Technical co lead',
      image: images.Diya_S_Nair_Joint_Secretary,
      linkedin: ''
    }

    ],
    'Mechanical':[
    {
      id: 29,
      name: 'Sreehari P S',
      role: 'Head',
      image: images.Sreehari_P_S_Head,
      linkedin: ''
    },
    {
      id: 30,
      name: 'Tharun M',
      role: 'Vice Head',
      image: images.Tharun_M____Vice_head,
      linkedin: ''
    },
    {
      id: 31,
      name: 'Dinijith I D',
      role: 'Technical Lead',
      image: images.Dinijith_I_D__Technical_lead,
      linkedin: ''
    },
    {
      id: 32,
      name: 'Zahan P P',
      role: 'Technical co lead',
      image: images.Diya_S_Nair_Joint_Secretary,
      linkedin: ''
    }

    ],
    'Production':[
    {
      id: 33,
      name: 'Gouri Priya M',
      role: 'Head',
      image: images.Gouri_Priya_M___Head,
      linkedin: ''
    },
    {
      id: 34,
      name: 'Devika Satheesh',
      role: 'Vice Head',
      image: images.Devika_Satheesh_Vice_Head,
      linkedin: ''
    },
    {
      id: 35,
      name: 'Shreyaa S B',
      role: 'Technical Lead',
      image: images.Shreyaa_SB__Tech_lead,
      linkedin: ''
    },
    {
      id: 36,
      name: 'Felix Puthumana',
      role: 'Technical co lead',
      image: images.Felix_Puthumana_Technical_Co_lead,
      linkedin: ''
    }

    ],
    'Junior Execom':[
    {
      id: 54,
      name: 'Abdulla Nihan K',

      image: images.Diya_S_Nair_Joint_Secretary,
      linkedin: ''
    },
    {
      id: 55,
      name: 'Anjima Parakkal',
      image: images.Anjima_P_junior_execom,
      linkedin: ''
    },
    {
      id: 56,
      name: 'Aparna Chandhran E M',
      image: images.Aparna_Chandran_EM__Junior_Execome__Civil,
      linkedin: ''
    },
    {
      id: 57,
      name: 'Athul E R',
      image: images.Athul_E_R_junior_excom_EE,
      linkedin: ''
    },
    {
      id: 58,
      name: 'Bibin Sunny',
      image: images.Bibin_Sunny_junior_execom_PE_,
      linkedin: ''
    },
    {
      id: 59,
      name: 'Jerin K Jaison',
      image: images.Jerin_K_Jaison_Junior_execom,
      linkedin: ''
    },
    {
      id: 60,
      name: 'Mamtha Shaji',
      image: images.Mamtha_Shaji_Junior_Execom__ECE_,
      linkedin: ''
    },
    {
      id: 61,
      name: 'Swetha K Nambiar',
      image: images.Diya_S_Nair_Joint_Secretary,
      linkedin: ''
    },
    {
      id: 62,
      name: 'Vishnu Sarang',
      image: images.Vishnu_Sarang_Junior_Execom,
      linkedin: ''
    }

    ]
  
  }


// Category structure for organized dropdown
const categoryStructure = [
  { 
    type: 'main', 
    key: 'Office Bearers', 
    label: 'Office Bearers' 
  },
  {
    type:'main',
    key:'Office Bearers2',
    label:'Office Bearers'
  },
  {
    type:'main',
    key:'Executive Committee',
    label:'Executive Committee'
  },
  { 
    type: 'header', 
    label: 'Department' 
  },
  { 
    type: 'sub', 
    key: 'Architecture', 
    label: 'Architecture' 
  },
  { 
    type: 'sub', 
    key: 'Chemical', 
    label: 'Chemical' 
  },
  { 
    type: 'sub', 
    key: 'Civil', 
    label: 'Civil' 
  },
  { 
    type: 'sub', 
    key: 'CSE', 
    label: 'CSE' 
  },
    { 
    type: 'sub', 
    key: 'ECE', 
    label: 'ECE' 
  },
  { 
    type: 'sub', 
    key: 'EEE', 
    label: 'EEE' 
  },
  { 
    type: 'sub', 
    key: 'Mechanical', 
    label: 'Mechanical' 
  },
  { 
    type: 'sub', 
    key: 'Productiom', 
    label: 'Production' 
  },
  {
    type:"header",
    label:"Junior Execom"
  },
  {
    type:'sub',
    key:'Junior Execom',
    label:'Junior Execom'
  },
  
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
  const [selectedCategory, setSelectedCategory] = useState('Office Bearers');
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
              
              <div className="memberCard">
              <div className="imageContainer">
                <img className="memberImage" src={member.image} alt={member.name} />
                <div className="imageOverlay"></div>
              </div>
              <div className="cardContent">
                <h1 className="memberName">{member.name}</h1>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedinLink">
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