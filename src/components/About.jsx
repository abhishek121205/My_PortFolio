import { FaCode, FaLaptopCode, FaDatabase, FaBrain } from 'react-icons/fa'

export default function About() {
  return (
    <section className="mb-16 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
        <FaCode className="text-blue-500" /> About Me
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        A highly motivated and dedicated developer with a solid academic background and a passion for technology. 
        Currently pursuing a Bachelor of Computer Applications (BCA) while actively learning full-stack web development. 
        Proficient in a range of programming languages and technologies, eager to leverage technical skills and knowledge 
        in challenging roles.
      </p>
    </section>
  )
}