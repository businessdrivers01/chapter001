import { motion } from 'framer-motion'
import { Lightbulb, Users, Rocket } from 'lucide-react'
import OurTeam from './OurTeam'
import OurLegacy from './OurLegacy'

export default function About() {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

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
  }

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

        <motion.div variants={itemVariants} className="text-white text-lg md:text-xl text-center mb-16">
          <p>
            At Chapter 001 Pakistan, we believe in empowering businesses to reach their full potential. Our mission is to provide innovative and effective marketing solutions that help businesses in Pakistan grow and succeed. We're passionate about what we do, and we're committed to delivering exceptional results for our clients.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center border-2 p-8 rounded border-red-500">
            <Lightbulb className="text-5xl text-white mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Innovative Solutions</h3>
            <p className="text-white">We bring fresh ideas to the table, helping your business stand out.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center border-2 p-8 rounded border-red-500">
            <Users className="text-5xl text-white mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Expert Team</h3>
            <p className="text-white">Our experienced professionals are dedicated to your success.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center border-2 p-8 rounded border-red-500">
            <Rocket className="text-5xl text-white mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Proven Results</h3>
            <p className="text-white">We deliver measurable outcomes that drive your business forward.</p>
          </motion.div>
        </motion.div>


      </motion.div>
      <OurTeam />
      <OurLegacy />
    </div>
  )
}