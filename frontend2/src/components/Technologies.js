import React from 'react'
import logo from "../assets/logo.webp";

const Technologies = () => {
  return (
    <div>
        <hr className="border-0 h-0.5 bg-purple-500 my-4"></hr>
            <br></br>
            <br></br>
           
            <motion.div
              
              className="flex flex-wrap items-center justify-between m-16"
            >
              
              <div className="items-center justify-center  ">
              <img src={logo} alt="Company Logo" className="w-28 h-26 lg:ml-16  items-center justify-center" />
              <p className="text-white text-bold text-center justify-center">Offdef Cyber Solutions LLP</p>
              <p className="text-slate-300 font-normal items-center ml-3  tracking-tight">Course, programme, website content<br></br> and curriculum listed are subject to<br></br> change without prior notice.</p>
             </div>
             <div className="items-left justify-left ">
              <p className="text-white text-bold items-center justify-center lg:ml-3">Company</p>
              <br></br>
              
              <a className="text-slate-300 font-normal items-center ml-3  tracking-tight">About</a>
              <br></br>
              <br></br>
              <a className="text-slate-300 font-normal items-center ml-3  tracking-tight">Blog</a>
              <br></br>
              <br></br>
              <a className="text-slate-300 font-normal items-center ml-3  tracking-tight">Become a Mentor</a>
              <br></br>
              <br></br>
              <a className="text-slate-300 font-normal items-center ml-3  tracking-tight">FAQ</a>
             </div>
             <div className="items-left justify-left ">
              <p className="text-white text-bold items-center justify-center lg:ml-3">Offerings</p>
              <br></br>
              
              <a className="text-slate-300 font-normal items-center ml-3  tracking-tight">Academy</a>
              <br></br>
              <br></br>
              <a className="text-slate-300 font-normal items-center ml-3  tracking-tight">Enterprise</a>
              <br></br>
              <br></br>
              <a className="text-slate-300 font-normal items-center ml-3  tracking-tight"></a>
              <br></br>
              <br></br>
              <a className="text-slate-300 font-normal items-center ml-3  tracking-tight"></a>
             </div>
             <div className="items-left justify-left ">
              <p className="text-white text-bold items-center justify-center lg:ml-3 ">Contact Us</p>
              <br></br>
              
              <a className="text-slate-300 font-normal items-center ml-3  tracking-tight">+91 99538 59662</a>
              <br></br>
              <br></br>
              <a className="text-slate-300 font-normal items-center ml-3  tracking-tight">support@offdef.com</a>
              <br></br>
              <br></br>
              <a className="text-slate-300 font-normal items-center ml-3  tracking-tight">LLP IN: ACD-8141</a>
              <br></br>
              <br></br>
              <a className="text-slate-300 font-normal items-center ml-3  tracking-tight">GST:  36AAIFO7509E1Z7</a>
             </div>
              
              
            </motion.div>
           
            
            <hr className="border-0 h-0.5 bg-purple-500 my-4"></hr>
            <footer className="flex flex-wrap item-center justify-center m-4">
              <p className="text-slate-100 font-normal items-center ml-3  tracking-tight" >Copyright © 2023 offdef.com </p>

            </footer>
            
      
    </div>
  )
}

export default Technologies
