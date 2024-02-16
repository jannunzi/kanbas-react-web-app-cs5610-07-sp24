import React from "react";
import { useParams } from "react-router-dom";
import courses from "../Database/courses.json";

function Courses() {
  const params = useParams();
  const { courseId } = useParams();
  const course = courses.find((c) => c._id === courseId);

  return (
    <div>
      <pre>
        <code>{JSON.stringify(params, null, 2)}</code>
      </pre>
      <h2>Courses {course?.name}</h2>
      <pre>
        <code>{JSON.stringify(course, null, 2)}</code>
      </pre>
    </div>
  );
}

export default Courses;
