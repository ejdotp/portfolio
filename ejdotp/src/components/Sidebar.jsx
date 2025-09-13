import React from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition-transform transform hover:scale-110">
        {children}
    </a>
);

export default function Sidebar({ currentPage, setCurrentPage, personalInfo, pageConfig }) {

    const handleNavClick = (page, sectionId) => {
        if (currentPage !== page) {
            setCurrentPage(page);
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handlePageClick = (page) => {
        if (page === 'resume') {
            window.open('https://drive.google.com/file/d/1ec5mPw-2mhzKP6qThaqQc8RbntkDlq-X/view?usp=sharing', '_blank');
        } else {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <aside className="hidden lg:block w-1/5 h-screen sticky top-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm p-8 border-r border-gray-200 dark:border-gray-800">
            <div className="flex flex-col h-full">
                <h1 className="text-2xl font-bold mb-2 text-black dark:text-white">The Daily Portfolio</h1>
                <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mb-8">Engineer Edition</p>

                <nav className="flex-grow">
                    <ul>
                        {Object.entries(pageConfig).map(([pageKey, pageValue]) => (
                            <li key={pageKey} className="mb-3">
                                <button
                                    onClick={() => handlePageClick(pageKey)}
                                    className={`font-bold text-lg w-full text-left ${currentPage === pageKey ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-400'} hover:text-black dark:hover:text-white`}
                                >
                                    {pageValue.title}
                                </button>
                                {currentPage === pageKey && pageValue.sections.length > 0 && (
                                    <ul className="mt-2">
                                        {pageValue.sections.map(section => (
                                            <li key={section.id} className="pl-6">
                                                <button onClick={() => handleNavClick(pageKey, section.id)} className="text-sm text-gray-600 dark:text-gray-500 hover:text-black dark:hover:text-white w-full text-left">
                                                    - {section.title}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="font-sans">
                    <div className="flex space-x-6 mb-4">
                        <div className="flex space-x-6 mb-4">
                            <SocialIcon href="mailto:jagadeeswarpatro@gmail.com">
                                <Mail size={24} />
                            </SocialIcon>
                            <SocialIcon href={personalInfo.github}>
                                <Github size={24} />
                            </SocialIcon>
                            <SocialIcon href={personalInfo.linkedin}>
                                <Linkedin size={24} />
                            </SocialIcon>
                            <SocialIcon href={personalInfo.instagram}>
                                <Instagram size={24} />
                            </SocialIcon>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}