import React from 'react';
import { motion } from "framer-motion"
import { blogs } from './blogs';

// Define the prop types for the Blog component
interface BlogProps {
    title: string;
    date: string; // or Date if you prefer
    bannerImage: string;
    content: string;
    contentImage: string;
}

const Blog: React.FC<BlogProps> = ({ title, date, bannerImage, content, contentImage }) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    return (
        <article className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <img loading='lazy' src={bannerImage} alt={title} className="w-full h-64 object-cover" />
            <div className="p-6">
                <h2 className="text-2xl font-bold text-navy-500 mb-2">
                    {title} <span className="text-sm font-normal text-gray-500">(Updated {currentMonth} {currentYear})</span>
                </h2>
                <p className="text-navy-500 mb-4">{formattedDate}</p>
                <div className="prose max-w-none">
                    <p className="mb-4">{content.substring(0, content.indexOf('.') + 1)}</p>
                    <img loading='lazy' src={contentImage} alt="Related content" className="w-full h-48 object-cover rounded-md mb-4" />
                    <p className='text-navy-500'>{content.substring(content.indexOf('.') + 1)}</p>
                </div>
            </div>
        </article>
    );
};


const Blogs = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-600 via-navy-800 to-navy-900 px-4 py-12"
        >
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-teal-300 mb-12 py-4">
                    Blogs
                </h1>
                <p className="text-white text-lg md:text-xl text-center mb-16">
                    Stay informed with the latest trends and insights in technology and design.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <Blog key={blog.id} {...blog} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Blogs;
