import { motion } from 'framer-motion';
import { Target, HelpCircle, Award } from 'lucide-react';
import OurTeam from './OurTeam';
import OurLegacy from './OurLegacy';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const cardContent = [
    {
      icon: <HelpCircle className="text-5xl text-navy-500 mb-4" />,
      title: 'Who are we?',
      description:
        'Welcome to Chapter 001 Pakistan, your premier marketing agency in Pakistan. We are a team of experts dedicated to helping businesses like yours succeed in the competitive market. Our services include digital marketing, social media management, SEO, website development, and PR handling.',
    },
    {
      icon: <Target className="text-5xl text-navy-500 mb-4" />,
      title: 'How We Can Help You?',
      description:
        "At Chapter 001 Pakistan, we understand that every business is unique and has its own specific needs. That's why we offer customized solutions tailored to your business goals. Whether you're looking to increase your online presence, build a strong social media strategy, improve your website's search engine ranking, create a stunning website, or manage your reputation, we've got you covered.",
    },
    {
      icon: <Award className="text-5xl text-navy-500 mb-4" />,
      title: 'Our Expertise',
      description:
        "Our team of experts has years of experience in marketing and communications, and we're dedicated to delivering exceptional results for our clients. We stay up-to-date with the latest industry trends and best practices to ensure that our clients receive the best possible service.",
    },
  ];

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
          About Us
        </motion.h1>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:px-48"
        >
          <motion.div
            variants={itemVariants}
            className="relative group overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer flex items-center justify-center"
          >
            <div className="p-16 md:p-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-navy-500">
                Our Mission
              </h2>
            </div>
            <div className="absolute inset-0 bg-red-500 bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-left p-6 font-semibold text-base">
                Our Mission is to provide creative solutions that amplify brand
                identity, foster genuine connections, and drive engagement,
                ensuring our clients achieve lasting success in the digital
                landscape.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative group overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer flex items-center justify-center"
          >
            <div className="p-16 md:p-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-navy-500">
                Our Vision
              </h2>
            </div>
            <div className="absolute inset-0 bg-red-500 bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-left p-6 font-semibold text-base">
                Our Vision is to be recognized as a top creative agency that
                transforms brands through innovative storytelling, delivering
                excellence that inspires both businesses and their audiences
                worldwide.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {cardContent.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer flex items-center justify-center py-12"
            >
              <div className="p-10 flex items-center flex-col">
                {card.icon}
                <h3 className="text-2xl font-bold mb-4 text-navy-500">
                  {card.title}
                </h3>
              </div>
              <div className="absolute inset-0 bg-red-500 bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-left p-6 font-semibold text-base">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <OurTeam />
      <OurLegacy />
    </div>
  );
}
