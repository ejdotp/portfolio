import React, 'react';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import CareerPage from './pages/CareerPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';


const personalInfo = {
    name: "E. Jagadeeswar Patro",
    location: "Bhubaneswar, Odisha",
    linkedin: "https://linkedin.com/in/ejdotp",
    github: "https://github.com/ejdotp",
    instagram: "https://instagram.com/ejdotp",
};

const pageConfig = {
    home: {
        title: 'Home', sections: [
            { id: 'aboutme', title: 'About Me' },
            { id: 'projects', title: 'Projects' },
            { id: 'cocurricular', title: 'Co-curricular' },
            { id: 'gallery-preview', title: 'Creations' }
        ]
    },
    career: {
        title: 'Career', sections: [
            { id: 'careertimeline', title: 'Timeline' }
        ]
    },
    gallery: { title: 'Gallery', sections: [] },
    resume: { title: 'Resume', sections: [] },
};

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    const [currentPage, setCurrentPage] = useState(() => {
        const savedPage = localStorage.getItem('currentPage');
        return savedPage && Object.keys(pageConfig).includes(savedPage) ? savedPage : 'home';
    });

    React.useEffect(() => {
        const theme = isDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    React.useEffect(() => {
        localStorage.setItem('currentPage', currentPage);
    }, [currentPage]);


    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage setCurrentPage={setCurrentPage} pageConfig={pageConfig} />;
            case 'career':
                return <CareerPage />;
            case 'gallery':
                return <GalleryPage />;
            default:
                return <HomePage setCurrentPage={setCurrentPage} pageConfig={pageConfig} />;
        }
    };

    const currentVol = 3;
    const pageKeys = Object.keys(pageConfig);
    const currentPageNumber = pageKeys.indexOf(currentPage) + 1;

    return (
        <div className={isDarkMode ? 'dark' : ''}>
            <div className="font-serif text-[#333] dark:text-[#E0E0E0] min-h-screen transition-colors duration-500">
                <div className="flex">
                    <Sidebar
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        personalInfo={personalInfo}
                        pageConfig={pageConfig}
                    />
                    <main className="w-full lg:w-4/5">
                        <div className="max-w-6xl mx-auto p-4 sm:p-8 md:p-12">
                            <Header
                                personalInfo={personalInfo}
                                isDarkMode={isDarkMode}
                                toggleDarkMode={toggleDarkMode}
                                currentVol={currentVol}
                                currentPageNumber={currentPageNumber}
                                pageConfig={pageConfig}
                                setCurrentPage={setCurrentPage}
                            />
                            {renderPage()}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
