import React from 'react';
import { motion } from 'framer-motion';

interface Milestone {
  year: string;
  title: string;
  description: string;
  image?: string;  // Optional image for each milestone
}

const milestones: Milestone[] = [
  {
    year: '2015',
    title: 'Founding of Chapter-001',
    description: `Chapter-001 was founded with a vision to lead innovative solutions in business and social impact, beginning a journey marked by determination and ambition.`,
    image: '/founding.jpg'
  },
  {
    year: '2018',
    title: 'Expansion and Growth',
    description: `Successfully expanded into new industries, introducing groundbreaking projects and building a dedicated team that shared a commitment to excellence.`,
    image: '/expansion.jpg'
  },
  {
    year: '2021',
    title: 'Recognition and Awards',
    description: `Recognized as a leader in industry innovation, receiving accolades and awards that celebrated the impact of our work on both local and international levels.`,
    image: '/awards.jpg'
  },
  {
    year: 'Present',
    title: 'Continuing the Legacy',
    description: `With a focus on the future, Chapter-001 remains committed to growth, innovation, and making a positive difference in the communities we serve.`,
    image: '/future.jpg'
  }
];

const Legacy: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-16  text-white"
    >
      <h1 className="text-5xl font-extrabold text-center mb-16">Our Legacy</h1>
      <p className="text-center max-w-3xl mx-auto text-lg mb-12 text-gray-300">
        Over the years, Chapter-001 has built a legacy grounded in innovation, integrity, and impactful change. Here are some of the key milestones and achievements that define who we are today.
      </p>
      <div className="max-w-5xl mx-auto space-y-12">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            {/* Image, if available */}
            {milestone.image && (
              <img
                src={milestone.image}
                alt={milestone.title}
                className="w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
              />
            )}
            {/* Milestone details */}
            <div>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-2">{milestone.year}</h2>
              <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
              <p className="text-gray-300">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Legacy;
