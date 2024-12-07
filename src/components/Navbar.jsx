import { FaMoon, FaSun } from 'react-icons/fa'

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          Abhishek Khachar
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  )
}