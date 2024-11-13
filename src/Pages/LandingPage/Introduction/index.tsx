import { motion } from 'framer-motion';

export default function Introduction() {
    return (
        <div className="relative flex flex-col items-center justify-center py-16 px-8 bg-gradient-to-br from-navy-800 via-slate-700 to-navy-900 min-h-screen w-full text-white">
            <motion.div
                className="text-center max-w-3xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-cyan-500 mb-6">
                    Welcome to Chapter 001 Pakistan
                </h1>

                <p className="text-lg md:text-xl text-cyan-200 mb-6">
                    Your premier marketing agency in Pakistan. We are a team of experts dedicated to helping businesses like yours succeed in the competitive market. Our services include digital marketing, social media management, SEO, website development, and PR handling.
                </p>

                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-teal-300">
                    Discover How We Can Help You
                </h2>

                <p className="text-lg md:text-xl text-cyan-200">
                    At Chapter 001 Pakistan, we understand that every business is unique and has its own specific needs. That's why we offer customized solutions tailored to your business goals. Whether you're looking to increase your online presence, build a strong social media strategy, improve your website's search engine ranking, create a stunning website, or manage your reputation, we've got you covered.
                </p>
            </motion.div>
        </div>
    );
}
