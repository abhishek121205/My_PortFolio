import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  return (
    <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
        <FaGraduationCap className="text-blue-500" /> Education
      </h3>
      <div className="space-y-6">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
            Bachelor of Computer Applications (BCA)
          </h4>
          <p className="text-gray-600 dark:text-gray-300">Vidhyadeep University - Ongoing</p>
        </div>
        <div className="transform hover:scale-105 transition-transform duration-300">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
            Higher Secondary Certificate (HSC)
          </h4>
          <p className="text-gray-600 dark:text-gray-300">Sanskar Bharti Vidhyalaya</p>
        </div>
      </div>
    </section>
  )
}