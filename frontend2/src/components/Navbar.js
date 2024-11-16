// import "./Navbar.css"
// import logo from "../assets/kevinRushLogo.png"
// const Navbar = () => {
//     return <nav className="bg-purple-400 mb-20 flex item-center justify-between py-6">
//         <div className="flex flex-shrink-0 items-center">
//             <img className="mx-2" src={logo} alt="logo" />
//         </div>
//         <div className="social">
//                     <a id="linkedin" href="https://www.linkedin.com/in/vinayak-jadhav-5743a4289/"><img src="/linkedin.png" alt=""/> </a>
//                     <a href="https://www.instagram.com/_vinayak_308/?hl=en"><img src="/instagram.png" alt=""/> </a>
//                     <a href="https://github.com/VINAYAK308"><img src="/github.png" alt=""/> </a>
//                     <a href="https://x.com/_vinayak_308"><img src="/twitter.avif" alt=""/> </a>
//         </div>

//     </nav>
// };

// export default Navbar;

// import logo from "../assets/logo.webp";
// import {Routes , Route} from 'react-router-dom';
// import Dashboard from "./dashboard"; 
// const Navbar = () => {
//   return (
//     <nav className="flex items-center justify-between py-5 px-10 bg-black">
//       {/* Logo Section */}
//       <div className="flex items-center">
//         <img src={logo} alt="Company Logo" className="w-19 h-16" />
//       </div>

//       {/* Dashboard Button Section */}
//       <div className="flex items-center gap-4">
//         <a href="./dashboard.jsx" className="bg-blue-600  text-white py-2 px-4 rounded hover:bg-purple-600 font-normal transition-all duration-300 transform hover:scale-105">
//         Dashboard
//         </a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS for styling
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="flex items-center justify-between py-5 px-10 bg-black">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="w-28 h-26 lg:ml-4" />
        </div>

        {/* Dashboard Button Section */}
        <div className="flex items-center gap-4">
        <Link className='bg-blue-600  text-white py-2 px-4 rounded hover:bg-purple-600 font-normal transition-all duration-300 transform hover:scale-105' to="/dashboard">Dashboard</Link>
        </div>    
      </nav>
    </header>
  );
};

export default Navbar;


