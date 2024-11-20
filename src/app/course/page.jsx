import { getCourses } from "@/utils/api";
import Navbar from "../components/Navbar";

export default async function Course() {
  const data = await getCourses();
  return (
    <div>
      <Navbar />
      <h1>Course</h1>
      {data.map((item) => (
        <p key={item.no}>{item.no} {item.name}</p>
      ))}
    </div>
  );
}
