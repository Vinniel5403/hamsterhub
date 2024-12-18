import React from 'react';
import { getCourses } from "@/utils/api";
import Navbar from "@/app/components/Navbar";
import Footer from '@/app/components/Footer';
import "./CourseId.css";

export default async function Course({ params }) {
  const data = await getCourses();
  
  const course = data.find((item) => item.no === params.CourseId);
  
  if (!course) {
    return (
      <div>
        <h1>Course Not Found</h1>
        <p>No course found with the specified ID: {params.CourseId}</p>
      </div>
    );
  }
  
  return (
    <div className="course-id">
      <Navbar />

      <div className="course-content">
      <h1>{course.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: course.detail }} className='course-detail' />

      </div>
        <Footer />
    </div>
  );
}