import PropTypes from 'prop-types';

export default function DarkModeToggle({ darkMode = false, setDarkMode = () => {} }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}

DarkModeToggle.propTypes = {
  darkMode: PropTypes.bool,
  setDarkMode: PropTypes.func,
};