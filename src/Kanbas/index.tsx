import { Routes, Route } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigator from "./Navigation";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigator />
      <div>
        <Routes>
          <Route path="Account" element={<h2>Account</h2>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId" element={<Courses />} />
          <Route path="Calendar" element={<h2>Calendar</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default Kanbas;
