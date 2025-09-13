import React from 'react';

export default function MobileNav({ pageConfig, setCurrentPage, isFooter = false }) {

    const handlePageClick = (page) => {
        if (page === 'resume') {
            window.open('https://drive.google.com/file/d/1ec5mPw-2mhzKP6qThaqQc8RbntkDlq-X/view?usp=sharing', '_blank');
        } else {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`w-full font-sans p-4 ${isFooter ? 'mt-8' : 'border-b-2 border-black dark:border-gray-600 mb-8'}`}>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                {Object.entries(pageConfig).map(([pageKey, pageValue]) => (
                    <li key={pageKey}>
                        <button
                            onClick={() => handlePageClick(pageKey)}
                            className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white uppercase tracking-wider"
                        >
                            {pageValue.title}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}