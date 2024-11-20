import React from 'react';
import { getCourses } from "@/utils/api";
import Navbar from "@/app/components/Navbar";
import Footer from '@/app/components/Footer';

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
    <div>
      <Navbar />
      <h1>{course.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: course.detail }} />
      
      <h2>Course Details</h2>
      <p>Course Number: {course.no}</p>
      <p>Price: {course.price} THB</p>
      <p>Discount Price: {course.discount} THB</p>
      <p>Age Group: {course.age}</p>
      <p>Start Date: {course.startdate}</p>
      <p>Time: {course.time}</p>
      <p>Seats: {course.seat}</p>
      <p>Remark: {course.remark}</p>
        <Footer />
    </div>
  );
}