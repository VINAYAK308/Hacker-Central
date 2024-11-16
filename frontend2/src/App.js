import Navbar from './components/Navbar'
import Hero from './components/hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //added  by trj
// import Home from './components/pages/Home'; //added by trj
// import About from './components/pages/About';
import Dashboard from './components/pages/Dashboard1';
import UserDashboard from './components/pages/user-dashboard';
import AdminDashboard from './components/pages/admin-dashboard.js';
import SuperadminDashboard from './components/pages/Superadmin-dashboard';
// import Menu from "./admin-dashboard.jsx";
import UserManagement from "./components/pages/user-management";
import CourseManagement from "./components/pages/course-management";
import CourseAssignment from "./components/pages/course-assignment";


import StudentProfile from './components/pages/StudentProfile';
import EnrolledCourses from './components/pages/EnrolledCourses';
import CourseMaterials from './components/pages/CourseMaterials';
import Exams from './components/pages/Exams';
import Certificates from './components/pages/Certificates';


// import {Router,Route} from "react-router-dom" // added by trj
const App = () => {
  

  return (
    // <div className="overflow-x-hidden text-neutral-600 antialiased slec bg-black selection:text-cyan-900">
    //   <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

    //   <Navbar />
    //   <Hero/>

    // </div>


    //added by trj
    <Router>
      <main>
      <div className="overflow-x-hidden text-neutral-600 antialiased slec bg-black selection:text-cyan-900">
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}

        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/Superadmin-dashboard" element={<SuperadminDashboard />} />
          {/* <Route path="/" element={<Menu />} /> */}
        <Route path="/user-management.jsx" element={<UserManagement />} />
        <Route path="/course-management.jsx" element={<CourseManagement />} />
        <Route path="/course-assignment.jsx" element={<CourseAssignment />} />
        
        <Route path="/pages/StudentProfile" element={<StudentProfile />} />
        <Route path="/pages/EnrolledCourses" element={<EnrolledCourses />} />
        <Route path="/components/pages/CourseMaterials" element={<CourseMaterials />} />
        <Route path="/components/pages/Exams" element={<Exams />} />
        <Route path="/components/pages/Certificates" element={<Certificates />} />
        <Route path="/Exams" element={<Exams />} />
          
        </Routes>
        

      </div>
      
      </main>
      
    </Router>
    

    //ended by trj
  )
}

export default App
