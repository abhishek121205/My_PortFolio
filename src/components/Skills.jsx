import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaDatabase, FaCode, FaBrain } from 'react-icons/fa'

export default function Skills() {
  const skills = [
    {
      title: "Web Development",
      icon: <FaCode />,
      skills: "HTML, CSS, jQuery, Bootstrap, JavaScript, Node.js, React.js"
    },
    {
      title: "Programming Languages",
      icon: <FaJs />,
      skills: "HTML, C, JavaScript"
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: "MongoDB, MySQL"
    },
    {
      title: "Other Skills",
      icon: <FaBrain />,
      skills: "Basic DSA knowledge"
    }
  ]

  return (
    <section className="mb-16 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="p-4 border dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300 transform hover:scale-105"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-500 text-xl">{skill.icon}</span>
              <h4 className="font-semibold text-gray-700 dark:text-gray-200">{skill.title}</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{skill.skills}</p>
          </div>
        ))}
      </div>
    </section>
  )
}