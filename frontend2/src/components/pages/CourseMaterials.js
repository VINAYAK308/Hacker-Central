



import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaVideo, FaChevronDown, FaChevronRight, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const fetchCourses = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          courseName: 'Cybersecurity Fundamentals',
          chapters: [
            {
              chapter: 'Chapter 1: Introduction to Cybersecurity',
              modules: [
                {
                  title: 'Module 1: What is Cybersecurity?',
                  pdf: 'link_to_cybersecurity_pdf_1.pdf',
                  video: 'link_to_cybersecurity_video_1.mp4',
                },
                {
                  title: 'Module 2: Importance of Cybersecurity',
                  pdf: 'link_to_cybersecurity_pdf_2.pdf',
                  video: 'link_to_cybersecurity_video_2.mp4',
                },
              ],
            },
            {
              chapter: 'Chapter 2: Cyber Threats',
              modules: [
                {
                  title: 'Module 1: Types of Cyber Attacks',
                  pdf: 'link_to_cybersecurity_pdf_3.pdf',
                  video: 'link_to_cybersecurity_video_3.mp4',
                },
                {
                  title: 'Module 2: Preventing Cyber Attacks',
                  pdf: 'link_to_cybersecurity_pdf_4.pdf',
                  video: 'link_to_cybersecurity_video_4.mp4',
                },
              ],
            },
            {
              chapter: 'Chapter 3: Cybersecurity Best Practices',
              modules: [
                {
                  title: 'Module 1: Implementing Security Policies',
                  pdf: 'link_to_cybersecurity_pdf_5.pdf',
                  video: 'link_to_cybersecurity_video_5.mp4',
                },
                {
                  title: 'Module 2: Password and Authentication Techniques',
                  pdf: 'link_to_cybersecurity_pdf_6.pdf',
                  video: 'link_to_cybersecurity_video_6.mp4',
                },
              ],
            },
          ],
        },
        {
          courseName: 'Advanced Network Security',
          chapters: [
            {
              chapter: 'Chapter 1: Network Security Fundamentals',
              modules: [
                {
                  title: 'Module 1: Secure Network Design',
                  pdf: 'link_to_network_security_pdf_1.pdf',
                  video: 'link_to_network_security_video_1.mp4',
                },
                {
                  title: 'Module 2: Firewall and VPN Configuration',
                  pdf: 'link_to_network_security_pdf_2.pdf',
                  video: 'link_to_network_security_video_2.mp4',
                },
              ],
            },
            {
              chapter: 'Chapter 2: Wireless Security',
              modules: [
                {
                  title: 'Module 1: Securing Wireless Networks',
                  pdf: 'link_to_network_security_pdf_3.pdf',
                  video: 'link_to_network_security_video_3.mp4',
                },
                {
                  title: 'Module 2: Wireless Encryption Methods',
                  pdf: 'link_to_network_security_pdf_4.pdf',
                  video: 'link_to_network_security_video_4.mp4',
                },
              ],
            },
          ],
        },
        {
          courseName: 'Ethical Hacking Essentials',
          chapters: [
            {
              chapter: 'Chapter 1: Ethical Hacking Introduction',
              modules: [
                {
                  title: 'Module 1: Ethical Hacking Basics',
                  pdf: 'link_to_ethical_hacking_pdf_1.pdf',
                  video: 'link_to_ethical_hacking_video_1.mp4',
                },
                {
                  title: 'Module 2: Hacking Methodologies',
                  pdf: 'link_to_ethical_hacking_pdf_2.pdf',
                  video: 'link_to_ethical_hacking_video_2.mp4',
                },
              ],
            },
            {
              chapter: 'Chapter 2: Vulnerability Assessment Techniques',
              modules: [
                {
                  title: 'Module 1: Scanning and Mapping Networks',
                  pdf: 'link_to_ethical_hacking_pdf_3.pdf',
                  video: 'link_to_ethical_hacking_video_3.mp4',
                },
                {
                  title: 'Module 2: Identifying Vulnerabilities',
                  pdf: 'link_to_ethical_hacking_pdf_4.pdf',
                  video: 'link_to_ethical_hacking_video_4.mp4',
                },
              ],
            },
          ],
        },
        {
          courseName: 'Cloud Security Practices',
          chapters: [
            {
              chapter: 'Chapter 1: Cloud Security Basics',
              modules: [
                {
                  title: 'Module 1: Securing Cloud Infrastructure',
                  pdf: 'link_to_cloud_security_pdf_1.pdf',
                  video: 'link_to_cloud_security_video_1.mp4',
                },
                {
                  title: 'Module 2: Cloud Threat Management',
                  pdf: 'link_to_cloud_security_pdf_2.pdf',
                  video: 'link_to_cloud_security_video_2.mp4',
                },
              ],
            },
            {
              chapter: 'Chapter 2: Incident Response in the Cloud',
              modules: [
                {
                  title: 'Module 1: Cloud Incident Response Plan',
                  pdf: 'link_to_cloud_security_pdf_3.pdf',
                  video: 'link_to_cloud_security_video_3.mp4',
                },
                {
                  title: 'Module 2: Post-Incident Recovery in Cloud',
                  pdf: 'link_to_cloud_security_pdf_4.pdf',
                  video: 'link_to_cloud_security_video_4.mp4',
                },
              ],
            },
          ],
        },
      ]);
    }, 1000); // Simulated loading time
  });
};

const CourseMaterials = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
      } catch (err) {
        setError('Failed to load courses.');
      } finally {
        setLoading(false);
      }
    };
    loadCourses();
  }, []);

  const handleCourseClick = (course) => {
    setSelectedCourse(selectedCourse === course ? null : course);
    setSelectedChapter(null); // Reset selected chapter
    setSelectedModule(null); // Reset selected module
  };

  const handleChapterClick = (chapter) => {
    setSelectedChapter(selectedChapter === chapter ? null : chapter);
    setSelectedModule(null); // Reset selected module
  };

  const handleModuleClick = (module) => {
    setSelectedModule(selectedModule === module ? null : module);
  };

  const handleBackClick = () => {
    navigate('/user-dashboard'); // Navigate to Student Dashboard
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="flex flex-col items-center">
          <div className="loader w-16 h-16 border-4 border-white border-dotted rounded-full animate-spin mb-4"></div>
          <p className="text-white">Loading courses...</p>
        </div>
      </div>
    );
  }

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4"
    >
      <h2 className="text-3xl mb-4">Cybersecurity Courses</h2>
      {selectedModule || selectedChapter || selectedCourse ? (
        <button
          onClick={handleBackClick}
          className="mb-4 flex items-center text-blue-400 hover:text-blue-600"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
      ) : null}
      <div className="w-full max-w-3xl">
        {courses.map((course, index) => (
          <div key={index} className="mb-6 p-4 border border-gray-700 rounded-md">
            <h3
              className="text-2xl cursor-pointer hover:text-blue-400 flex justify-between items-center"
              onClick={() => handleCourseClick(course)}
            >
              {course.courseName}
              {selectedCourse === course ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              )}
            </h3>
            {selectedCourse === course && (
              <div className="mt-2 pl-4">
                {course.chapters.map((chapter, chapterIndex) => (
                  <div key={chapterIndex} className="mb-4">
                    <h4
                      className="text-xl cursor-pointer hover:text-blue-400 flex justify-between items-center"
                      onClick={() => handleChapterClick(chapter)}
                    >
                      {chapter.chapter}
                      {selectedChapter === chapter ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </h4>
                    {selectedChapter === chapter && (
                      <div className="ml-4">
                        {chapter.modules.map((module, moduleIndex) => (
                          <div key={moduleIndex}>
                            <h5
                              className="cursor-pointer hover:text-blue-400"
                              onClick={() => handleModuleClick(module)}
                            >
                              {module.title}
                            </h5>
                            {selectedModule === module && (
                              <div className="flex flex-col mt-1 pl-2">
                                <a
                                  href={module.pdf}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center mb-1 text-blue-400 hover:underline"
                                >
                                  <FaFilePdf className="mr-1" /> Download PDF
                                </a>
                                <a
                                  href={module.video}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center text-blue-400 hover:underline"
                                >
                                  <FaVideo className="mr-1" /> Watch Video
                                </a>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CourseMaterials;
