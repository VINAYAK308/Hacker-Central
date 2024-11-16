
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const ModuleManagement = ({ module, onDeleteModule, onAddContent }) => {
//   return (
//     <motion.li
//       className="border-l border-gray-700 pl-4 ml-2 mb-3"
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: -20 }}
//       transition={{ duration: 0.2 }}
//     >
//       <div className="flex justify-between items-center">
//         <h4 className="text-lg font-semibold">{module.name}</h4>
//         <button onClick={onDeleteModule} className="text-red-500 hover:text-red-600">
//           Delete Module
//         </button>
//       </div>
//       <div className="flex space-x-2 mb-2">
//         <button onClick={() => onAddContent('Video')} className="bg-blue-400 px-2 py-1 rounded hover:bg-blue-500">
//           Add Video
//         </button>
//         <button onClick={() => onAddContent('PDF')} className="bg-purple-400 px-2 py-1 rounded hover:bg-purple-500">
//           Add PDF
//         </button>
//         <button onClick={() => onAddContent('Text')} className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500">
//           Add Text
//         </button>
//       </div>
//       <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-300">
//         {module.content.map(content => (
//           <motion.li
//             key={content.id}
//             className="flex items-center justify-between"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 10 }}
//             transition={{ duration: 0.2 }}
//           >
//             <span>
//               {content.type} Content: 
//               <a href={content.url} target="_blank" rel="noopener noreferrer" className="text-blue-300 ml-1">
//                 {content.name}
//               </a>
//             </span>
//             <div className="flex space-x-2">
//               <a href={content.url} target="_blank" rel="noopener noreferrer" download className="text-green-400 hover:text-green-500">
//                 Download
//               </a>
//               <a href={content.url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-400">
//                 View
//               </a>
//             </div>
//           </motion.li>
//         ))}
//       </ul>
//     </motion.li>
//   );
// };

// const CourseManagement = () => {
//   const [courses, setCourses] = useState([]);
//   const [newCourseName, setNewCourseName] = useState('');

//   const addCourse = () => {
//     if (newCourseName.trim()) {
//       const newCourse = {
//         id: Date.now(),
//         name: newCourseName,
//         modules: []
//       };
//       setCourses(prevCourses => [...prevCourses, newCourse]);
//       setNewCourseName('');
//     } else {
//       alert('Course name cannot be empty');
//     }
//   };

//   const deleteCourse = (courseId) => {
//     setCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
//   };

//   const addModule = (courseId) => {
//     const updatedCourses = courses.map(course => {
//       if (course.id === courseId) {
//         return {
//           ...course,
//           modules: [
//             ...course.modules,
//             { id: Date.now(), name: `Module ${course.modules.length + 1}`, content: [] }
//           ]
//         };
//       }
//       return course;
//     });
//     setCourses(updatedCourses);
//   };

//   const deleteModule = (courseId, moduleId) => {
//     const updatedCourses = courses.map(course => {
//       if (course.id === courseId) {
//         return {
//           ...course,
//           modules: course.modules.filter(module => module.id !== moduleId)
//         };
//       }
//       return course;
//     });
//     setCourses(updatedCourses);
//   };

//   const addContent = (courseId, moduleId, type) => {
//     const contentInput = document.createElement('input');
//     contentInput.type = 'file';
//     contentInput.accept = type === 'Video' ? 'video/*' : type === 'PDF' ? 'application/pdf' : 'text/plain';

//     contentInput.onchange = (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         const url = URL.createObjectURL(file);
//         const content = {
//           id: Date.now(),
//           type,
//           name: file.name,
//           url
//         };

//         // Update the courses state dynamically
//         const updatedCourses = courses.map(course => {
//           if (course.id === courseId) {
//             return {
//               ...course,
//               modules: course.modules.map(module => {
//                 if (module.id === moduleId) {
//                   return {
//                     ...module,
//                     content: [...module.content, content]
//                   };
//                 }
//                 return module;
//               })
//             };
//           }
//           return course;
//         });
//         setCourses(updatedCourses);
//       }
//     };

//     contentInput.click();
//   };

//   return (
//     <motion.div
//       className="text-white p-6 bg-gray-900 rounded-lg"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.2 }}
//     >
//       <h2 className="text-2xl mb-4 font-semibold">Course Management</h2>
//       <p className="mb-6">Manage courses, create new courses, edit existing courses, and assign users to courses.</p>

//       {/* Add Course Form */}
//       <div className="mb-4 flex">
//         <input
//           type="text"
//           placeholder="New Course Name"
//           value={newCourseName}
//           onChange={(e) => setNewCourseName(e.target.value)}
//           className="text-gray-900 px-3 py-2 rounded mr-2 flex-grow"
//         />
//         <button onClick={addCourse} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//           Add Course
//         </button>
//       </div>

//       {/* List Courses */}
//       <motion.ul className="space-y-4">
//         {courses.map(course => (
//           <motion.li
//             key={course.id}
//             className="border border-gray-700 rounded p-4"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//           >
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="text-xl font-bold">{course.name}</h3>
//               <button onClick={() => deleteCourse(course.id)} className="text-red-500 hover:text-red-600">Delete Course</button>
//             </div>
//             <button
//               onClick={() => addModule(course.id)}
//               className="bg-green-500 text-white px-3 py-1 rounded mb-3 hover:bg-green-600"
//             >
//               Add Module
//             </button>

//             {/* List Modules */}
//             <motion.ul className="pl-4 space-y-2">
//               {course.modules.map(module => (
//                 <ModuleManagement
//                   key={module.id}
//                   module={module}
//                   onDeleteModule={() => deleteModule(course.id, module.id)}
//                   onAddContent={(type) => addContent(course.id, module.id, type)}
//                 />
//               ))}
//             </motion.ul>
//           </motion.li>
//         ))}
//       </motion.ul>
//     </motion.div>
//   );
// };

// export default CourseManagement;

import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const AdminDashboard = () => {
  const [courseName, setCourseName] = useState('');
  const [modules, setModules] = useState([
    {
      name: '',
      chapters: [
        {
          name: '',
          pdf: null,
          video: null,
          pdfUploaded: false,
          videoUploaded: false,
          playgroundURL: '',
          quiz: [],
        },
      ],
    },
  ]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCourseNameChange = (e) => setCourseName(e.target.value);

  const handleModuleChange = (index, field, value) => {
    setModules((prevModules) => {
      const updatedModules = [...prevModules];
      updatedModules[index][field] = value;
      return updatedModules;
    });
  };

  const handleChapterChange = (moduleIndex, chapterIndex, field, value) => {
    setModules((prevModules) => {
      const updatedModules = [...prevModules];
      updatedModules[moduleIndex].chapters[chapterIndex][field] = value;
      return updatedModules;
    });
  };

  const handleFileChange = (moduleIndex, chapterIndex, fileType, file) => {
    if (file) {
      setModules((prevModules) => {
        const updatedModules = [...prevModules];
        updatedModules[moduleIndex].chapters[chapterIndex][fileType] = file;
        updatedModules[moduleIndex].chapters[chapterIndex][`${fileType}Uploaded`] = true;
        return updatedModules;
      });
    }
  };

  const addModule = () => {
    setModules((prevModules) => [
      ...prevModules,
      {
        name: '',
        chapters: [
          {
            name: '',
            pdf: null,
            video: null,
            pdfUploaded: false,
            videoUploaded: false,
            playgroundURL: '',
            quiz: [],
          },
        ],
      },
    ]);
  };

  const addChapter = (moduleIndex) => {
    setModules((prevModules) => {
      const updatedModules = [...prevModules];
      updatedModules[moduleIndex].chapters.push({
        name: '',
        pdf: null,
        video: null,
        pdfUploaded: false,
        videoUploaded: false,
        playgroundURL: '',
        quiz: [],
      });
      return updatedModules;
    });
  };

  const handleQuizXLSUpload = (moduleIndex, chapterIndex, file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const quizQuestions = jsonData.slice(1).map((row) => ({
        question: row[0],
        options: [row[1], row[2], row[3], row[4]],
        correctOption: row[5],
      }));

      setModules((prevModules) => {
        const updatedModules = [...prevModules];
        updatedModules[moduleIndex].chapters[chapterIndex].quiz = quizQuestions;
        return updatedModules;
      });
    };
    reader.readAsArrayBuffer(file);
  };

  const handleCreateCourse = (e) => {
    e.preventDefault();
    setLoading(true);
    setCourses((prevCourses) => [...prevCourses, { name: courseName, modules }]);
    resetForm();
    setLoading(false);
  };

  const resetForm = () => {
    setCourseName('');
    setModules([{ name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false, playgroundURL: '', quiz: [] }] }]);
  };

  const viewFile = (file) => {
    const url = URL.createObjectURL(file);
    window.open(url, '_blank');
  };

  const deleteFile = (moduleIndex, chapterIndex, fileType) => {
    setModules((prevModules) => {
      const updatedModules = [...prevModules];
      updatedModules[moduleIndex].chapters[chapterIndex][fileType] = null;
      updatedModules[moduleIndex].chapters[chapterIndex][`${fileType}Uploaded`] = false;
      return updatedModules;
    });
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-200">
      <h1 className="text-3xl font-bold text-blue-300 mb-6">Manage Course</h1>
      <form onSubmit={handleCreateCourse} className="space-y-6">
        <div>
          <label className="block text-lg font-medium">Course Name</label>
          <input
            type="text"
            value={courseName}
            onChange={handleCourseNameChange}
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
          />
        </div>
        {modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="mb-6">
            <label className="block text-lg font-medium">Module {moduleIndex + 1} Name</label>
            <input
              type="text"
              value={module.name}
              onChange={(e) => handleModuleChange(moduleIndex, 'name', e.target.value)}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
            />
            {module.chapters.map((chapter, chapterIndex) => (
              <div key={chapterIndex} className="mt-6">
                <label className="block text-md font-medium">Chapter {chapterIndex + 1} Name</label>
                <input
                  type="text"
                  value={chapter.name}
                  onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'name', e.target.value)}
                  className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
                />

                <label className="block mt-4 text-md font-medium">Upload PDF</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleFileChange(moduleIndex, chapterIndex, 'pdf', e.target.files[0])}
                  className="mt-1 block w-full border-x-2 border-y-2 rounded-xl"
                />
                {chapter.pdfUploaded && (
                  <button
                    type="button"
                    onClick={() => viewFile(chapter.pdf)}
                    className="mt-2 text-blue-500 hover:underline"
                  >
                    View PDF
                  </button>
                )}

                <label className="block mt-4 text-md font-medium">Upload Video</label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleFileChange(moduleIndex, chapterIndex, 'video', e.target.files[0])}
                  className="mt-1 block w-full border-x-2 border-y-2 rounded-xl"
                />
                {chapter.videoUploaded && (
                  <div className="mt-2">
                    <video controls className="w-full max-w-md" src={URL.createObjectURL(chapter.video)} />
                  </div>
                )}

                <label className="block mt-4 text-md font-medium">Upload Quiz (XLS)</label>
                <input
                  type="file"
                  accept=".xls,.xlsx"
                  onChange={(e) => handleQuizXLSUpload(moduleIndex, chapterIndex, e.target.files[0])}
                  className="mt-1 block w-full border-x-2 border-y-2 rounded-xl"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addChapter(moduleIndex)}
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Chapter
            </button>
          </div>
        ))}
        <div className='flex gap-4'>
        <button
          type="button"
          onClick={addModule}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Module
        </button>
        <button
          type="submit"
          className={`mt-6 ${loading ? 'bg-gray-500' : 'bg-green-500'} text-white px-4 py-2 rounded`}
          disabled={loading}
        >
          {loading ? 'Creating Course...' : 'Create Course'}
        </button>
        </div>
      </form>

      <div className="mt-12">
        <h1 className="text-2xl font-bold text-blue-200">Existing Courses</h1>
        <ul className="mt-4">
          {courses.map((course, index) => (
            <li key={index} className="mt-2">
              <h2 className="text-xl font-semibold text-blue-300">{course.name}</h2>
              {course.modules.map((module, mIndex) => (
                <div key={mIndex} className="pl-4">
                  <h3 className="text-lg font-medium text-blue-400">Module {mIndex + 1}: {module.name}</h3>
                  {module.chapters.map((chapter, cIndex) => (
                    <div key={cIndex} className="pl-8">
                      <h4 className="text-md font-medium text-blue-500">Chapter {cIndex + 1}: {chapter.name}</h4>
                      {chapter.pdfUploaded && (
                        <button onClick={() => viewFile(chapter.pdf)} className="mt-2 text-blue-400 hover:underline">View PDF</button>
                      )}
                      {chapter.videoUploaded && (
                        <div className="mt-2">
                          <video controls className="w-full max-w-md" src={URL.createObjectURL(chapter.video)} />
                        </div>
                      )}
                      {chapter.quiz.length > 0 && (
                        <div className="mt-4">
                          <h5 className="text-blue-400">Quiz:</h5>
                          <ul>
                            {chapter.quiz.map((q, qIndex) => (
                              <li key={qIndex}>
                                Q{qIndex + 1}: {q.question} - Correct Option: {q.correctOption}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
