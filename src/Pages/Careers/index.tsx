import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

interface Job {
    title: string;
    location: string;
}

const jobs: Job[] = [
    { title: 'Creative Executive', location: 'Remote' },
    { title: 'Business Development Manager', location: 'Remote' },
    { title: 'Business Development Executive', location: 'Remote' },
    { title: 'Junior Publicist', location: 'Remote' },
];

const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Careers: React.FC = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen bg-gradient-to-br from-slate-800 via-navy-900 to-black py-12 px-4 sm:px-6 lg:px-8"
        >
            <motion.h1
                variants={itemVariants}
                className="text-5xl font-extrabold text-center text-white mb-12"
            >
                Open Positions
            </motion.h1>

            <motion.div
                variants={containerVariants}
                className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {jobs.map((job, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
                    >
                        <h2 className="text-2xl font-semibold text-white mb-2">
                            {job.title}
                        </h2>
                        <p className="text-white text-opacity-80">{job.location}</p>
                    </motion.div>
                ))}
            </motion.div>

            <div className="flex justify-center py-12">
            <NavLink to={"/app/contact"}>
                <button
                    className='btn'>Apply Now</button>
            </NavLink>
            </div>


        </motion.div>
    );
};

export default Careers;
