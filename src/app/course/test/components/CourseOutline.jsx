import React from 'react';
import './CourseOutline.css';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function CourseOutline() {
  const timelineData = [
    {
      title: "Community & Conceptual Design",
      topics: [
        "Inspiration",
        "Ask Three then me",
        "Community & Buddy",
        "Story Telling",
        "Gameplay & Mechanic Design (Game)",
        "UX & UI Design (App)",
        "Conceptual Design"
      ],
  
    },
    {
    
      title: "Storyboard Design",
      topics: [
        "Workflow",
        "Storyboard Design"
      ],
    },
    {
     
      title: "Foundation",
      topics: [
        "Basic Programming with Python",
        "Unity",
        "Basic Modeling with Blender",
        "Animation",
        "Basic UI & UX",
        "Global Game Jam Competition"
      ],
    },
    {

      title: "Mini Project",
      topics: [
        "C# Programming",
        "Mini Project Design"
      ],
    },
    {
  
      title: "Development",
      topics: [
        "C# Programming#2",
        "Mini Project Presentation"
      ],
    },
    {
   
      title: "Teamwork",
      topics: [
        "Setup Team",
        "Project Management",
        "Hamster Hub Game Jam#5"
      ],
    },
    {
    
      title: "Project Development",
      topics: [
        "Intermediate C#",
        "Class & Object",
        "Advanced Level Design",
        "Project Design"
      ],
    },
    {
      
      title: "Basic Visual Effect",
      topics: [
        "Block-base Programming",
        "Shader Graph",
        "Lighting & Visual Effect",
        "National Software Contest (NSC-2025)"
      ],
    },
    {
   
      title: "Advanced Graphics",
      topics: [
        "Advanced Terrain",
        "Advanced Lighting & Shader",
        "Advanced Visual Effect",
        "Post Processing",
        "Final Presentation"
      ],
    }
  ];

  return (
    <div className="course-outline">
      <input type="checkbox" id="timeline-checkbox" className="hidden-checkbox" />
      <div className="course-timeline">
        <h2 className='timeline-title'>Timeline</h2>
        {timelineData.map((month, index) => (
          <div
            key={index}
            className={`timeline ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <h5>Month {index+1}</h5>
            <h3>{month.title}</h3>
            
            <ul>
              {month.topics.map((topic, idx) => (
                <li key={idx}>
                  <p>{topic}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        <div className="button-container">
          <label htmlFor="timeline-checkbox" className="checkbox-label">
            <FaChevronDown id='down' />
            <FaChevronUp id='up' />
          </label>
        </div>
        <div className='line'></div>
      </div>
    </div>
  );
}

export default CourseOutline;