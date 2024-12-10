import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

interface Job {
    title: string;
    location: string;
    salary: string;
    requirements: string[];
}

const jobs: Job[] = [
    {
        title: 'Experienced Ad Manager',
        location: 'Remote',
        salary: '35,000 PKR/month',
        requirements: [
            'Proven experience in managing ad campaigns across social media and digital platforms.',
            'Strong understanding of analytics tools and ad performance metrics.',
            'Ability to create, monitor, and optimize ad strategies to maximize reach and ROI.'
        ]
    },
    {
        title: 'Customer Care Representative',
        location: 'Remote',
        salary: '20,000 PKR/month',
        requirements: [
            'Excellent communication and interpersonal skills.',
            'Prior experience in customer service or support roles preferred.',
            'Ability to handle customer inquiries professionally and resolve issues promptly, ensuring high levels of satisfaction.'
        ]
    },
    {
        title: 'Chapter Face',
        location: 'On-Site (3 days per week)',
        salary: '30,000 PKR/month',
        requirements: [
            'Confident, personable, and presentable with a strong presence.',
            'Experience in representing brands or handling public relations.',
            'Able to engage professionally with clients and partners on behalf of Chapter-001.'
        ]
    }
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
                Join Our Growing Team at Chapter-001 Pakistan!
            </motion.h1>

            <motion.div
                variants={containerVariants}
                className="max-w-4xl mx-auto grid grid-cols-1 gap-8"
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
                        <p className="text-white text-opacity-80 mb-2">{job.location}</p>
                        <p className="text-white text-opacity-80 mb-4">{job.salary}</p>
                        <h3 className="text-white font-semibold mb-2">Requirements:</h3>
                        <ul className="text-white text-opacity-80 list-disc ml-6">
                            {job.requirements.map((req, reqIndex) => (
                                <li key={reqIndex}>{req}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>

            <div className="flex justify-center py-12">
                <NavLink to={"/contact"}>
                    <button className="btn">Apply Now</button>
                </NavLink>
            </div>
        </motion.div>
    );
};

export default Careers;
