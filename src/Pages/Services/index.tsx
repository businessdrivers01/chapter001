'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Image, TrendingUp, Hash, Search, Laptop, Speaker, Video, User, Shield, BarChart, FileText } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        id: 0,
        title: "Graphic Design",
        icon: <Image />,
        description: "Our graphic design services aim to create visually appealing designs that effectively communicate your brand's message.",
        items: [
            "Logo design",
            "Brand identity development",
            "Print design (brochures, business cards)",
            "Social media graphics",
            "Infographics",
            "Packaging design"
        ]
    },
    {
        id: 1,
        title: "Digital Marketing",
        icon: <TrendingUp />,
        description: "Our digital marketing services are designed to help you reach your target audience and achieve your business goals.",
        items: ["PPC advertising", "Email marketing", "Content marketing", "Social media marketing"]
    },
    {
        id: 2,
        title: "Social Media Management",
        icon: <Hash />,
        description: "Our social media management services are designed to help you build a strong online presence and engage with your audience.",
        items: ["Social media optimization", "Social media advertising", "Content creation", "Engagement and community management"]
    },
    {
        id: 3,
        title: "SEO",
        icon: <Search />,
        description: "Our SEO services are designed to help you improve your website's search engine ranking and drive more traffic to your site.",
        items: ["On-page optimization", "Off-page optimization", "Technical SEO", "Local SEO"]
    },
    {
        id: 4,
        title: "Website Development",
        icon: <Laptop />,
        description: "Our website development services are designed to help you create a stunning website that converts.",
        items: ["Custom website design", "Website redesign", "E-commerce solutions", "Website maintenance"]
    },
    {
        id: 5,
        title: "PR Handling",
        icon: <Speaker />,
        description: "Our PR handling services are designed to help you manage your reputation and communicate effectively with your audience.",
        items: ["Media relations", "Crisis communication", "Reputation management", "Event planning"]
    },
    {
        id: 6,
        title: "Conversion Rate Optimization (CRO)",
        icon: <TrendingUp />, 
        description: "Our CRO services focus on optimizing your website to increase conversions and improve user experience.",
        items: ["A/B testing", "User experience optimization", "Funnel analysis", "Conversion tracking"]
    },
    {
        id: 7,
        title: "Video Marketing",
        icon: <Video />, 
        description: "Our video marketing services help you engage your audience with visually compelling content.",
        items: ["Video content creation", "YouTube optimization", "Video ads", "Animated videos"]
    },
    {
        id: 8,
        title: "Influencer and Affiliate Marketing",
        icon: <User />, 
        description: "Our influencer and affiliate marketing services connect your brand with industry leaders and affiliates.",
        items: ["Influencer outreach", "Affiliate program setup", "Partnership management", "Brand collaborations"]
    },
    {
        id: 9,
        title: "Online Reputation Management (ORM)",
        icon: <Shield />, 
        description: "Our ORM services focus on protecting and enhancing your online reputation.",
        items: ["Review monitoring", "Crisis management", "Reputation repair", "Brand image building"]
    },
    {
        id: 10,
        title: "Analytics and Reporting",
        icon: <BarChart />, 
        description: "Our analytics and reporting services provide insights into your business's digital performance.",
        items: ["Website analytics", "Campaign performance", "User behavior analysis", "Data-driven strategy development"]
    },
    {
        id: 11,
        title: "Content Marketing",
        icon: <FileText />, 
        description: "Our content marketing services help your brand engage and inform audiences through high-quality, valuable content.",
        items: ["Content strategy development", "Blog and article writing", "Video content creation", "Social media content", "SEO-optimized content"]
    }
];


export default function Services() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-600 via-navy-800 to-navy-900 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-7xl mx-auto"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-extrabold text-center text-white mb-12"
                >
                    Our Services
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-white text-lg md:text-xl text-center mb-16"
                >
                    We offer a range of services designed to help businesses like yours succeed.
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            className="relative bg-white bg-opacity-10 rounded-xl p-6 shadow-xl cursor-pointer overflow-hidden group transition-transform duration-500 hover:bg-navy-500"
                            onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                        >
                            <div className="flex items-center mb-4">
                                <div className="text-4xl text-white font-bold mr-4">
                                    {service.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-white">
                                    {service.title}
                                </h2>
                            </div>
                            <p className="text-white mb-4">{service.description}</p>

                            <AnimatePresence>
                                {expandedId === service.id && (
                                    <motion.ul
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-white ml-6 list-disc"
                                    >
                                        {service.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="mb-2">
                                                {item}
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>

                            {/* Button appears on hover */}
                            <div className="absolute inset-0 flex items-center justify-center bg-navy-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <NavLink to="/contact">
                                    <button className="btn ">
                                        Contact
                                    </button>
                                </NavLink>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <div className="flex justify-center py-12">
                <NavLink to="/contact">
                    <button className="btn !px-24">
                        Make Your Customized Plan
                    </button>
                </NavLink>
            </div>
        </div>
    );
}
