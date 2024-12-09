import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CourseDetail = () => {
  const { id } = useParams(); 
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/courses/${id}`);
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course) return <p>Loading course details...</p>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <h3>Videos</h3>
      <ul>
        {course.videos.map((video, index) => (
          <li key={index}>
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              {video.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetail;
