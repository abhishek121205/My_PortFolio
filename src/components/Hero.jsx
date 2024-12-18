import { FaGithub, FaEnvelope, FaPhone, FaDownload, FaLinkedin } from 'react-icons/fa'
import { handleDownload } from '../utils/downloadResume'
import profileImage from "../assets/image/profile-2.jpg"
export default function Hero() {
  return (
    <section className="text-center mb-16 animate-fadeIn">
      <div className="relative inline-block mb-8">
        <img
          // src="https://avatars.githubusercontent.com/u/97677133"
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 object-cover rounded-full border-4 border-blue-500 shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
        Full Stack Developer
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a
          href="mailto:abhikhachar07@gmail.com"
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-105"
        >
          <FaEnvelope className="text-xl" /> abhikhachar07@gmail.com
        </a>
        <a
          href="tel:+919714476909"
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-105"
        >
          <FaPhone className="text-xl" /> +91 9714476909
        </a>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://github.com/abhishekx1212"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
        >
          <FaGithub className="text-xl" /> GitHub
        </a>
        <a
          href="http://www.linkedin.com/in/abhishek-Khachar1212"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          <FaLinkedin className="text-xl" /> LinkedIn
        </a>
        <button 
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
        >
          <FaDownload className="text-xl" /> Download Resume
        </button>
      </div>
    </section>
  )
}