import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCourse, deleteCourse } from "./coursesReducer";
import { useState } from "react";

function CoursesRedux() {
  const courses = useSelector((store: any) => store.coursesReducer.courses);
  const [courseTitle, setCourseTitle] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Courses Redux</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            className="btn btn-primary w-50 float-end"
            onClick={() => dispatch(addCourse({ title: courseTitle }))}
          >
            Add Course
          </button>
          <input
            className="form-control w-50"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
          />
        </li>
        {courses.map((course: any, index: number) => (
          <li key={index} className="list-group-item">
            <button onClick={() => dispatch(deleteCourse(course.id))}>
              Delete
            </button>
            {course.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesRedux;
