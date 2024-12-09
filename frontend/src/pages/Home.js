import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get("http://localhost:5000/api/courses");
      setCourses(data);
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Available Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <a href={`/courses/${course._id}`}>{course.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
