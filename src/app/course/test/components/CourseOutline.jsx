import React from "react";
import "./CourseOutline.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function CourseOutline() {
  const timelineData = [
    {
      title: "Conceptual Design",
      topics: [
        "Inspiration",
        "Buddy System",
        "Story Telling",
        "Gameplay & Mechanic Design (Game)",
        "Conceptual Design",
        "Global Game Jam Competition",
      ],
    },
    {
      title: "Storyboard Design",
      topics: ["Workflow", "Storyboard Design"],
    },
    {
      title: "Foundation",
      topics: [
        "Basic Programming with C#",
        "Unity",
        "Basic Modeling with Blender",
        "Animation",
        "Basic UI & UX",
      ],
    },
    {
      title: "Mini Project",
      topics: [
        "Mini-Team Setup",
        "Intermediate C# Programming",
        "Mini Project Design",
      ],
    },
    {
      title: "Development",
      topics: ["Advanced C# Programming", "Mini Project Presentation"],
    },
    {
      title: "Teamwork",
      topics: [
        "Team Setup",
        "Project Management",
        "Hamster Hub Game Jam#5",
      ],
    },
    {
      title: "Project Development",
      topics: [
        "OOP Concept",
        "Class & Object",
        "Advanced Level Design",
        "Project Design",
        "National Software Contest (NSC-2025)",
      ],
    },
    {
      title: "Basic Visual Effect",
      topics: [
        "Block-base Programming",
        "Shader Graph",
        "Lighting & Visual Effect",
      ],
    },
    {
      title: "Advanced Graphics",
      topics: [
        "Advanced Terrain",
        "Advanced Lighting & Shader",
        "Advanced Visual Effect",
        "Post Processing",
        "Final Presentation",
      ],
    },
  ];

  return (
    <div className="course-outline">
      <input
        type="checkbox"
        id="timeline-checkbox"
        className="hidden-checkbox"
      />
      <div className="course-timeline">
        <div className="timeline-title">
          <h3> National Project's Timeline </h3>
          <p>
            แผนการตั้งแต่พื้นฐานจำเป็น
            สร้างความแตกต่างสู่ผลงานสุดยอดของประเทศใน 9 เดือน
            พร้อมโปรแกรมการแข่งขันที่น่าสนใจทั้งปี 2025
          </p>
        </div>

        {timelineData.map((month, index) => (
          <div
            key={index}
            className={`timeline ${index % 2 === 0 ? "left" : "right"}`}
          >
            <h5>Month {index + 1}</h5>
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
            <FaChevronDown id="down" />
            <FaChevronUp id="up" />
          </label>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default CourseOutline;
