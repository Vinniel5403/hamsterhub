import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CourseHero from "./components/CourseHero";
import CourseGet from "./components/CourseGet";
import CourseOutline from "./components/CourseOutline";
import Slider from "@/app/components/Slider";
import CourseContent from "./components/CourseContent";
import CourseTag from "./components/CourseTag";

// Import JSON data
import courseData from "@/utils/test.json";


function Page({ params }) {
  const data = courseData;
  // Find the course matching the params.id
  const course = data.find((item) => item.no === params.CourseId);

  // If no course is found, show an error or fallback
  if (!course) {
    return (
      <div>
        <h1>Course Not Found</h1>
        <p>No course found with the specified ID: {params.CourseId}</p>
      </div>
    );
  }

  return (
    <div className="course-page">
      <Navbar />
      <CourseHero courseData={course.courseDetail} />
      <CourseContent content={course.content} courseDetail={course.courseDetail} />
      <CourseGet get={course.get} />
      <CourseOutline timeline={course.timeline} />
      <CourseTag courseData={course.courseDetail} />
      <Slider items={course.items} />
      <Footer />
    </div>
  );
}


export default Page;