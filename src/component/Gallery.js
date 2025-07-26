import React, { useState } from 'react'
import "./GalleryModified.css";
import Slider from 'react-slick';
import content from './Data';
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { FaRegCalendarAlt, FaVideo } from "react-icons/fa";

// import { FaRegCalendarAlt,FaAngleRight,FaAngleLeft,FaMapMarkerAlt} from "react-icons/fa";
/*
export default function Gallery() {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observerRefValue = domRef.current;
    observer.observe(observerRefValue);
    return () => observer.unobserve(observerRefValue);
  }, []);
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <AiFillRightCircle style={{ height: "3vw", width: "3vw" }} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick} >
        <AiFillLeftCircle style={{ height: "3vw", width: "3vw" }} />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: true,
    lazyload: true,
    speed: 300,
    slideToShow: 0,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Maingallery" id='events'>
      <div className={`heading fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}><h1 className='galleryHeading' style={{ textAlign: 'center', color: 'white' }}>
          Previous Events</h1></div>

      <div className='Gallery' style={{ color: 'white' }}>

        <Slider {...settings}>

          {content.map((element, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide flex" : "slide flex"}>
              <div className="carousel">
                <div className='part1'>
                  <img src={element.image} alt={element.image} />
                </div>
                <div className="part2">
                  <h2 className='content' style={{ fontSize: '3vw' }}>{element.title}</h2>
                  <p classsName="content2">{element.content}</p>
                  <p style={{ color: 'rgb(209 80 232)', fontSize: '2vw', marginTop: '2vw' }} className='calender'><FaRegCalendarAlt style={{ marginRight: '10px', color: 'rgb(209 80 232)' }} />{element.date}</p>
                  <p style={{ fontSize: '1.5vw' }} className="state"><FaVideo style={{ marginRight: '1vw', marginLeft: '.3vw', height: '1.2vw' }} />{element.state}</p>

                </div>
              </div>







            </div>

          ))}






        </Slider>


      </div>


    </div>
  )
}


*/

export default function Gallery() {
  const [isVisible, setVisible] = React.useState(true);
  const [activeItems, setActiveItems] = React.useState(new Set());
  const domRef = React.useRef();
  
  React.useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observerRefValue = domRef.current;
    observer.observe(observerRefValue);
    console.log(isVisible);
    return () => observer.unobserve(observerRefValue);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          setActiveItems(prev => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(index);
            } else {
              newSet.delete(index);
            }
            return newSet;
          });
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));
    console.log(activeItems);
    return () => {
      timelineItems.forEach(item => observer.unobserve(item));
    };
  },[]);

  return (
    <div className="Maingallery" id='events'>
      <div className={`heading fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}>
        <h1 className='galleryHeading' style={{ textAlign: 'center', color: 'white' }}>
          Previous Events
        </h1>
      </div>

      <div className='timeline-container'>
        <div className='timeline-line'></div>
        
        {content.map((element, idx) => (
          <div 
            key={idx} 
            className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
            data-index={idx}
          >
            <div className='timeline-content'>
              <div className={`timeline-marker-${activeItems.has(idx) ? 'active' : ''}-${idx % 2 === 0 ? 'left' : 'right'}`}></div>
              
              <div className='event-card'>
                <div className='event-image'>
                  <img src={element.image} alt={element.title} />
                </div>
                
                <div className="event-details">
                  <h2 className='event-title'>{element.title}</h2>
                  <p className="event-description">{element.content}</p>
                  
                  <div className='event-meta'>
                    <p className='event-date'>
                      <FaRegCalendarAlt className='icon' />
                      {element.date}
                    </p>
                    <p className="event-state">
                      <FaVideo className='icon' />
                      {element.state}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}