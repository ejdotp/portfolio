import React from 'react';
import { Sun, Moon, Github, Linkedin } from 'lucide-react';
import MobileNav from './MobileNav.jsx';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => (
    <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
        aria-label="Toggle dark mode"
    >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
);

const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
        {children}
    </a>
);


export default function Header({ personalInfo, isDarkMode, toggleDarkMode, currentVol, currentPageNumber, pageConfig, setCurrentPage }) {
    const currentDate = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <header className="mb-12">
            <div className="relative flex justify-center items-center border-y-2 border-black dark:border-gray-600 py-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-center">{personalInfo.name}</h1>

                <div className="hidden lg:flex absolute right-0">
                    <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                </div>
            </div>

            <div className="flex justify-between items-center font-sans text-xs sm:text-sm py-2 border-b-2 border-black dark:border-gray-600">

                <span className="flex-1 text-left">Vol. {currentVol}</span>

                <div className="hidden lg:flex items-center gap-4 text-center">
                    <span>{currentDate}</span>
                    <span className="font-bold">&bull;</span>
                    <span>{personalInfo.location}</span>
                </div>

                <div className="lg:hidden flex items-center justify-center flex-1">
                    <SocialIcon href={personalInfo.github}><Github size={20} /></SocialIcon>
                    <SocialIcon href={personalInfo.linkedin}><Linkedin size={20} /></SocialIcon>
                    <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                </div>

                <span className="flex-1 text-right">Page {currentPageNumber}</span>
            </div>

            <div className="lg:hidden">
                <MobileNav pageConfig={pageConfig} setCurrentPage={setCurrentPage} />
            </div>
        </header>
    );
}