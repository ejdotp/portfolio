import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import MobileNav from '../components/MobileNav.jsx';

const projects = [
    {
        title: "Coding Forum",
        description: "A full-stack technical discussion platform with Stack Overflow-style Q&A features, built using the PERN (PostgreSQL, Express.js, React.js, Node.js) stack.",
        githubLink: "https://github.com/Ariston-Studios/ForumWebApp",
        liveLink: "#"
    },
    {
        title: "Hospital Management System",
        description: "A DevOps project focused on automating the deployment of a containerized full-stack application on AWS using Docker, ECR, and a secure VPC architecture.",
        githubLink: "https://github.com/AgileAmigos/healthcare-hms",
        liveLink: "#"
    },
];

const hobbies = {
    title: "Creations & Captures",
    description: "A glimpse into my creative side. When I'm not coding, I enjoy exploring the world through my camera lens and creating handcrafted items.",
    images: [
        { src: "/images/a.webp", alt: "Lonavla" },
        { src: "/images/b.webp", alt: "Shaniwar Wada" },
        { src: "/images/c.webp", alt: "Brick who?" },
        { src: "/images/d.webp", alt: "Macro Lady" },
        { src: "/images/e.webp", alt: "Soda Pop" },
    ],
}

const Section = ({ id, title, children }) => (
    <section id={id} className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold border-b-4 border-black dark:border-gray-600 pb-2 mb-6">{title}</h2>
        <div className="font-sans text-base leading-relaxed space-y-4">
            {children}
        </div>
    </section>
);

// --- Carousel Component for Creations Section ---
const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative w-full h-64">
            <div className="w-full h-full rounded-sm shadow-md overflow-hidden">
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                    key={currentIndex}
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/EFEFEF/333333?text=Image' }}
                />
            </div>
            <div className="absolute bottom-2 right-2 flex gap-2">
                <button onClick={goPrevious} className="bg-white/70 dark:bg-black/70 p-2 rounded-full hover:bg-white dark:hover:bg-black transition">
                    <ArrowLeft size={20} />
                </button>
                <button onClick={goNext} className="bg-white/70 dark:bg-black/70 p-2 rounded-full hover:bg-white dark:hover:bg-black transition">
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};


export default function HomePage({ setCurrentPage, pageConfig }) {
    return (
        <div className="space-y-12">
            <section id="aboutme" className="mb-16 scroll-mt-24">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <img
                        src="/images/1.webp"
                        alt="E. Jagadeeswar Patro"
                        className="w-75 h-48 md:w-48 md:h-56 object-cover rounded-sm shadow-md flex-shrink-0"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/192x224/EFEFEF/333333?text=E.J.P' }}
                    />
                    <div className="font-sans text-base leading-relaxed space-y-4 text-center md:text-left">
                        <p>My journey into the world of technology began when the Atal Tinkering Labs initiative first arrived at my school, sparking an immediate fascination with the potential of IoT. This newfound passion led me to create award-winning projects and earned me a selection for a national workshop by Intel and AIM.</p>
                        <p>Driven by that initial spark, I pursued a degree in Computer Science Engineering to dive deeper into programming. Today, I specialize in building robust full-stack applications and have a strong foundation in DevOps practices.</p>
                        <p>Much like the intricate, layered storytelling in films like 'Everything Everywhere All at once,' I enjoy bringing together different technologies to create a cohesive and impactful whole. In my free time, you'll find me traveling to new places or creating handcrafted pieces.</p>
                    </div>
                </div>
            </section>

            <Section id="projects" title="Featured Projects">
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <div key={index} className="border-b border-gray-300 dark:border-gray-700 pb-6 last:border-b-0">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="flex items-center gap-4 mt-4">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-black rounded-md hover:bg-black dark:hover:bg-white transition-colors">View Code</a>
                                {/* <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-800 dark:border-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Live Demo</a> */}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="cocurricular" title="Co-curricular Work">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold">Volunteer at Youth for Sustainability (YFS)</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">August 2020 - August 2021</p>
                        <ul className="list-disc list-outside space-y-2 ml-5">
                            <li>Designed and donated an eco-friendly board game to educate children on sustainability.</li>
                            <li>Conducted awareness sessions on sustainable habits in remote villages, promoting environmental consciousness.</li>
                            <li>Researched and curated articles for a climate news bulletin, helping to disseminate important information.</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-2/5 h-60 rounded-sm shadow-md flex-shrink-0 bg-gray-200 dark:bg-gray-800">
                        <img
                            src="/images/2.webp"
                            alt="YFS activity"
                            className="w-full h-full object-cover rounded-sm"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/256x192/EFEFEF/333333?text=Activity' }}
                        />
                    </div>
                </div>
            </Section>

            <Section id="gallery-preview" title="Creations & Captures">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 md:order-1">
                        <p className="mb-4">{hobbies.description}</p>
                        <p>See more in the <button onClick={() => setCurrentPage('gallery')} className="hover:underline font-semibold">Gallery</button>.</p>
                    </div>
                    <div className="w-full md:w-96 flex-shrink-0 md:order-2">
                        <Carousel images={hobbies.images} />
                    </div>
                </div>
            </Section>

            <footer className="text-center font-sans text-xs text-gray-500 dark:text-gray-400 mt-16 pt-8 border-t-2 border-black dark:border-gray-600">
                {/* Mobile-Only Footer Navigation */}
                <div className="lg:hidden">
                    <MobileNav pageConfig={pageConfig} setCurrentPage={setCurrentPage} isFooter={true} />
                </div>
                <p>&copy; {new Date().getFullYear()} E. Jagadeeswar Patro. All Rights Reserved.</p>
            </footer>
        </div>
    );
}