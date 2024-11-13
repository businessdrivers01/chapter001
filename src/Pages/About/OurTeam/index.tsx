import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: 'Miss Ayesh Paras', role:
      `PRESIDENT CHAPTER-001,
     CEO BUSINESS DRIVERS 01, 
     CHAIRPERSON 9 GIG VISION GROUP`, image: '/ayesh.jpg'
  },
  {
    name: 'Moeez Athar', role: `CREATIVE HEAD CHAPTER-001,
     CO FOUNDER 9GIGVISION GROUP`, image: '/moeez.jpg'
  },
  {
    name: 'Shanzay Athar', role: `Operation head at chapter-001,
     Masters of publications strategy`, image: '/shanzay.jpg'
  },

];

const OurTeam: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-5xl font-extrabold text-center text-white mb-12">
        Our Team
      </h1>
      <h2 className="text-3xl  text-center text-white mb-12">
        The Masterminds
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
        {team.map((member, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-red-500 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold">{member.name}</h2>
                <p className="text-lg">{member.role.split('\n').map((line, index) => (
                  <p key={index} className="mb-2">{line}</p>
                ))}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurTeam;
