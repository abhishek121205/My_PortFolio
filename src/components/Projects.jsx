import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { BookOpen, Building2, ExternalLink, FileJson, ShoppingCart } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      icon: <ShoppingCart className="w-6 h-6 text-blue-500" />,
      tech: "HTML, CSS, Bootstrap, JavaScript",
      description: "Interactive e-commerce platform with product filtering ,searching, sorting, Add to cart and more functionalities including dark mode.",
      link: "https://abhishek121205.github.io/E_Commerce_Js/",
      github: "https://github.com/abhishek121205/E_Commerce_Js"
    },
    {
      title: "Blog Website",
      icon: <BookOpen className="w-6 h-6 text-green-500" />,
      tech: "Node.js, Express.js, MongoDB, ejs",
      description: "Full-stack blog platform with user authentication and CRUD operations. Authentication includes passport js authentication.",
      link: "https://blogpassport-nodejs.onrender.com",
      github: "https://github.com/abhishek121205/BlogPassport_NodeJs"
    },
    {
      title: "Portfolio Using CSS & JQuery",
      icon: <Building2 className="w-6 h-6 text-orange-500" />,
      tech: "Css, JQuery, Media Query, Bootstrap",
      description: "A professional portfolio which includes about, resume, testimoial and more pages with interactive sidebar and an asthetic design which also includes the feature for dark mode",
      link: "https://abhishek121205.github.io/Jq-Css_Portfolio/",
      github: "https://github.com/abhishek121205/Jq-Css_Portfolio"
    },
    {
      title: "Role-Based E-Commerce Management System",
      icon: <ShoppingCart className="w-6 h-6 text-yellow-500" />,
      tech: "Node.js, Express.js, Node.js, Express.js, MongoDB, JSON Web Token, Bootstrap",
      description: "A comprehensive web application designed to manage products and categories with role-based access control. The system allows users to sign up, log in, and perform CRUD operations based on their assigned roles (e.g., Admin or User).Admin users can manage products and categories, while standard users have restricted access",
      link: "https://rolebased-nodejs.onrender.com",
      github: "https://github.com/abhishek121205/RoleBased_NodeJs"
    },
    {
      title: "JavaScript Projects",
      icon: <FileJson className="w-6 h-6 text-yellow-500" />,
      tech: "Javascript, HTML, CSS",
      description: "A gallery of projects in which projects are made using Javascript, html and css",
      link: "https://projects-js.onrender.com",
      github: "https://github.com/abhishek121205/Projects_Js"
    },
    {
      title: "React.JS-CRUD With Json Server",
      icon: <FileJson className="w-6 h-6 text-yellow-500" />,
      tech: "React.Js, Bootstrap, Json-server",
      description: "CRUD operations using React.js and json-server.It also includes functionality for changing roles using Context Api and have an enhancing design which is created using boostrap",
      link: "https://reactjs-crudwithjsonserver-wrvi.onrender.com/",
      github: "https://github.com/abhishek121205/ReactJs_CrudWithJsonServer"
    },
  ]

  return (
    <section className="mb-16 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              {project.icon}
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{project.title}</h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.tech}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}