import React from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => (
    <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
        aria-label="Toggle dark mode"
    >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
);

export default function Header({ name, location, isDarkMode, toggleDarkMode, currentVol }) {
    const currentDate = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <header className="mb-12">
            {/* Main Header with Centered Name */}
            <div className="relative flex justify-center items-center border-y-2 border-black dark:border-gray-600 py-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-center">{name}</h1>
                <div className="absolute right-0">
                    <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                </div>
            </div>

            {/* Restored Newspaper-style Sub-header */}
            <div className="flex justify-between items-center font-sans text-xs sm:text-sm py-2 border-b-2 border-black dark:border-gray-600">
                <span>Vol. {currentVol}</span>
                <span className="hidden sm:inline">{currentDate}</span>
                <span className="hidden sm:inline">{location}</span>
                <span>Page 1</span>
            </div>
        </header>
    );
}