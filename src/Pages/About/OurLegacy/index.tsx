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
    year: '2018',
    title: 'Foundation and Vision',
    description: `Established as a creative agency dedicated to impactful design and digital storytelling. Set the foundation with a passionate team and a commitment to helping brands grow.`,
    image: '/logo-white-updated.png'
  },
  {
    year: '2019',
    title: 'Early Growth and Portfolio Building',
    description: `Secured initial projects and gained traction, building a diverse portfolio of clients. Expanded our team and capabilities, enhancing our service offerings.`,
    image: '/logo-white-updated.png'
  },
  {
    year: '2020',
    title: 'Adapting to Global Changes',
    description: `Navigated the challenges of the pandemic by shifting to remote work and expanding digital services. Supported clients in maintaining a strong online presence during a challenging year.`,
    image: '/logo-white-updated.png'
  },
  {
    year: '2021',
    title: 'Peak Performance and Industry Recognition',
    description: `Gained recognition for our creativity and commitment, completing milestone projects and establishing strategic partnerships. Built a reputation for delivering quality and creativity across various industries.`,
    image: '/logo-white-updated.png'
  },
  {
    year: '2022',
    title: 'Setback and Reflection',
    description: `Experienced operational challenges that prompted us to refine our focus and streamline our processes. This year’s hurdles led to valuable insights, setting the stage for a stronger comeback.`,
    image: '/logo-white-updated.png'
  },
  {
    year: '2023',
    title: 'Major Setback and Reinvention',
    description: `Faced a significant downturn that tested our agency’s resilience and adaptability. Took this period as an opportunity to critically evaluate our business model, restructure operations, and redefine our core values. Learned valuable lessons from this challenging year, emerging with a renewed strategy and a clearer vision for the future.`,
    image: '/logo-white-updated.png'
  },
  {
    year: '2024',
    title: 'Recovery and New Beginnings',
    description: `Leveraged the hard-earned lessons from 2023 to reestablish our presence in the market with a fresh, client-focused approach. Reaffirmed our commitment to innovation, creativity, and building long-term client relationships as we look toward sustained growth.`,
    image: '/logo-white-updated.png'
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
                className="w-32 h-32 object-contain rounded-lg mb-4 md:mb-0 md:mr-6"
              />
            )}
            {/* Milestone details */}
            <div>
              <h2 className="text-2xl font-bold text-red-500 mb-2">{milestone.year}</h2>
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
