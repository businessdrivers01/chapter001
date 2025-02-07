import React from 'react'
import { motion } from 'framer-motion'
import { marketingPackages } from './marketingPackages'
import Button from '@src/Components/Button'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100
        }
    }
}

const Packages: React.FC = () => {
    const openWhatsApp = (packageName: string) => {
        const message = encodeURIComponent(`I'm interested in the ${packageName}. Can you provide more information?`)
        window.open(`https://wa.me/923035256390?text=${message}`, '_blank')
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
                    variants={cardVariants}
                    className="text-5xl md:text-7xl font-extrabold text-center text-white mb-12"
                >
                    Our Packages
                </motion.h1>

                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {marketingPackages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-white bg-opacity-10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-white mb-4">{pkg.name}</h2>
                                <p className="text-gray-300 mb-4">{pkg.overview}</p>
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-white mb-2">Pricing</h3>
                                    {Object.entries(pkg.pricing).map(([key, value]) => (
                                        <p key={key} className="text-gray-300">
                                            <span className="capitalize">{key}:</span> {value}
                                        </p>
                                    ))}
                                </div>
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-white mb-2">Benefits</h3>
                                    <ul className="list-disc list-inside text-gray-300">
                                        {pkg.benefits.map((benefit, i) => (
                                            <li key={i}>{benefit}</li>
                                        ))}
                                    </ul>
                                </div>
                                {pkg.performanceGuarantee && (
                                    <p className="text-green-400 font-semibold mb-4">
                                        Performance Guarantee: {pkg.performanceGuarantee}
                                    </p>
                                )}


                                <div className="text-center py-4">
                                    <Button
                                        onClick={
                                            () => openWhatsApp(pkg.name)}
                                        title='Contact Us Now'
                                    />

                                </div>


                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Packages