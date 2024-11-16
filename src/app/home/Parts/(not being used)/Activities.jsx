import React from "react";
import "./Activities.css";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "National Project 2025",
    price: "฿14,990",
    description: "รับสมัครเข้าร่วมโครงการ Project Express: Special",
    studyingDay: "8 พ.ย. เวลา: 19:00-21:00",
    image: "https://hamsterhub.co/asset/image/course/cover/NP2025.png",
    link: "https://hamsterhub.co/course/942",
  },
  {
    id: 2,
    title: "Jumpstart to Programming World",
    price: "฿490",
    description: "Introduction to programming for absolute beginners.",
    studyingDay: "9 พ.ย. เวลา: 14:00-17:00",
    image: "https://hamsterhub.co/asset/image/course/cover/JPHC.png",
    link: "#",
  },
  {
    id: 3,
    title: "Project Express+Ultra",
    price: "฿9,990",
    description: "Learn to create standout projects for your portfolio.",
    studyingDay: "9 พ.ย. 2567 เวลา: 10:00-12:00",
    image: "https://hamsterhub.co/asset/image/course/cover/PXSPU.png",
    link: "#",
  },
];

const CourseCard = ({ title, price, description, studyingDay, image, link }) => {
  return (
    <a href={link} target="_blank" className="course-card">
      <img src={image} alt={title} className="course-image" />
      <div className="course-info">
        <h5 className="course-title">{title}</h5>
        
        <p className="course-description">{description}</p>
        <p className="course-studying-day"> {studyingDay}</p>
        <h4 className="course-price">{price}</h4>
      </div>
    </a>
  );
};

const CourseList = () => {
  return (
    <div className="course-list">
      {blogs.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          price={course.price}
          description={course.description}
          studyingDay={course.studyingDay}
          image={course.image}
          link={course.link}
        />
      ))}
    </div>
  );
};

function Activities() {
  return (
    <div className="cards">
      <h3>คอร์สเรียนของเรา</h3>
      <CourseList />
      <Link href="/course" target="_blank" className="trans-btn">
        เพิ่มเติม
      </Link>
    </div>
  );
}

export default Activities;
