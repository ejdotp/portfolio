import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

// A reusable button component for the timeline
const TimelineButton = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-3 py-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
        {children}
        <ExternalLink size={14} className="ml-1.5" />
    </a>
);

export default function CareerPage() {
    const timelineEvents = [
        {
            date: "Jan 2026 - Present",
            title: "Graduate Engineer Trainee",
            company: "GyanSys Inc.",
            description: "Upcoming role focusing on enterprise solutions and technology consulting.",
            buttons: [
                { text: "Visit Website", href: "https://www.gyansys.com/" },
                { text: "Certificate", href: "https://drive.google.com/file/d/1aSCXTfWtyHvLSHaN3lYI0PzvfRLn15wj/view?usp=sharing" }
            ]
        },
        {
            date: "Dec 2025 - Aug 2025",
            title: "Research & Development Intern",
            company: "Samsung R&D Institute India",
            description: "Collaborated in a team of 5 to enhance character consistency in AI-generated images using diffusion models. Conducted quantitative analysis and user studies to benchmark improvements.",
            buttons: [
                { text: "Visit Website", href: "https://research.samsung.com/sri-b" }
            ]
        },
        {
            date: "2022 - 2026",
            title: "B.Tech, Computer Science Engineering",
            company: "Institute of Technical Education and Research, SOA",
            description: "Pursuing undergraduate degree with a current CGPA of 9.16. Relevant coursework in Data Structures, Algorithms, DBMS, and Networking.",
            buttons: [
                { text: "Visit Website", href: "https://www.soa.ac.in/iter" },
                { text: "View Marksheet", href: "https://drive.google.com/file/d/1lUFzJSPkNYU_EQx-GjnOYCsibkJzVyOf/view?usp=sharing" }
            ]
        },
        {
            date: "2020 - 2022",
            title: "Class 12 (Senior Secondary)",
            company: "DAV Public School, Kalinga Nagar",
            description: "Completed senior secondary education with a focus on science and mathematics, scoring 83.8%.",
            buttons: [
                { text: "Visit Website", href: "https://davsan.org.in/" },
                { text: "View Marksheet", href: "https://drive.google.com/file/d/1mz7Bpieqixlmw0Wt6BwwOKVYPrzfyfDB/view?usp=sharing" }
            ]
        },
        {
            date: "2020",
            title: "Class 10 (Secondary)",
            company: "DAV Public School, Kalinga Nagar",
            description: "Completed secondary education with a focus on science, scoring 91.7%.",
            buttons: [
                { text: "Visit Website", href: "https://davsan.org.in/" },
                { text: "View Marksheet", href: "https://drive.google.com/file/d/1uskGfwxKlrgrE0Pb9wQorJCHG8cgGmY0/view?usp=sharing" }
            ]
        },
    ];

    return (
        <section id="careertimeline">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8 border-b pb-2">Career & Education</h2>
            <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-4">
                {timelineEvents.map((event, index) => (
                    <div key={index} className="mb-10 ml-8">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900 text-blue-800">
                            <Star size={16} />
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">{event.date} at {event.company}</time>
                        <p className="mb-4 text-base font-normal text-gray-600 dark:text-gray-300">{event.description}</p>

                        {/* Buttons Section */}
                        <div className="flex flex-wrap">
                            {event.buttons.map((button, btnIndex) => (
                                <TimelineButton key={btnIndex} href={button.href}>
                                    {button.text}
                                </TimelineButton>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};