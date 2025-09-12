import React from 'react';

// Instructions: To add your images, place them in a `public/images` folder 
// and change the src to "/images/your-image-name.jpg"
const galleryImages = [
    { src: "/images/a.jpg", alt: "A beautiful landscape shot" },
    { src: "/images/b.jpg", alt: "A handmade craft item" },
    { src: "/images/c.jpg", alt: "A portrait photograph" },
    { src: "/images/d.jpg", alt: "Another craft item" },
    { src: "/images/e.jpg", alt: "Cityscape photography" },
];


export default function GalleryPage() {
    return (
        <div>
            <section id="gallery" className="scroll-mt-24">
                <h2 className="text-3xl font-bold border-b-4 border-black dark:border-gray-600 pb-2 mb-8">Gallery</h2>
                <p className="font-sans text-base leading-relaxed mb-8">
                    A collection of moments captured and things created. This is a visual diary of my hobbies outside of the tech world, from traveling and photography to hands-on crafting.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="aspect-w-1 aspect-h-1">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
