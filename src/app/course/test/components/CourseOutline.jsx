import React from 'react';
import './CourseOutline.css';

function CourseOutline() {
  const timelineData = [
    {
      symbol: "♠",
      title: "Month 1: (Community & Conceptual Design)",
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
      symbol: "♦",
      title: "Month 2: (Storyboard Design)",
      topics: [
        "Workflow",
        "Storyboard Design"
      ],
    },
    {
      symbol: "♣",
      title: "Month 3: (Foundation)",
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
      symbol: "♥",
      title: "Month 4: (Mini Project)",
      topics: [
        "C# Programming",
        "Mini Project Design"
      ],
    },
    {
      symbol: "♦",
      title: "Month 5: (Development)",
      topics: [
        "C# Programming#2",
        "Mini Project Presentation"
      ],
    },
    {
      symbol: "♣",
      title: "Month 6: (Teamwork)",
      topics: [
        "Setup Team",
        "Project Management",
        "Hamster Hub Game Jam#5"
      ],
    },
    {
      symbol: "♥",
      title: "Month 7: (Project Development)",
      topics: [
        "Intermediate C#",
        "Class & Object",
        "Advanced Level Design",
        "Project Design"
      ],
    },
    {
      symbol: "♠",
      title: "Month 8: (Basic Visual Effect)",
      topics: [
        "Block-base Programming",
        "Shader Graph",
        "Lighting & Visual Effect",
        "National Software Contest (NSC-2025)"
      ],
    },
    {
      symbol: "♣",
      title: "Month 9: (Advanced Graphics)",
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
    <>
      <input type="checkbox" id="timeline-checkbox" className="hidden-checkbox" />
      <div className="course-timeline">
        <h1 className='timeline-title'>Course Timeline</h1>
        {timelineData.map((month, index) => (
          <div
            key={index}
            className={`timeline ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <h2>{month.title}</h2>
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
            More
          </label>
        </div>
        <div className='line'></div>
      </div>
    </>
  );
}

export default CourseOutline;