import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { marketingPackages } from "./marketingPackages";
import Button from "@src/Components/Button";
import { ChevronDown, ChevronUp } from "lucide-react";

// Animation variants for container and cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const Packages: React.FC = () => {
  // State to track which package is currently expanded
  const [expandedPackage, setExpandedPackage] = useState<number | null>(null);

  // Function to open WhatsApp chat with pre-filled message
  const openWhatsApp = (packageName: string) => {
    const message = encodeURIComponent(
      `I'm interested in the ${packageName}. Can you provide more information?`
    );
    window.open(`https://wa.me/923035256390?text=${message}`, "_blank");
  };

  // Function to toggle package expansion
  const toggleExpand = (index: number) => {
    setExpandedPackage((prevExpanded) =>
      prevExpanded === index ? null : index
    );
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
          variants={cardVariants}
          className="text-5xl md:text-7xl font-extrabold text-center text-white mb-12"
        >
          Our Packages
        </motion.h1>

        {/* Grid layout for package cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {marketingPackages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`bg-white bg-opacity-10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col ${
                expandedPackage === index ? "col-span-full" : ""
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {pkg.name}
                </h2>
                <p className="text-gray-300 mb-4">{pkg.overview}</p>
              </div>

              {/* Expanded content */}
              <AnimatePresence>
                {expandedPackage === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-300"
                  >
                    {/* Components section */}
                    {pkg.components && (
                      <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-white my-6">
                          Components
                        </h3>
                        {Object.entries(pkg.components).map(([key, value]) => (
                          <div key={key} className="mb-2">
                            <h4 className="text-xl font-semibold text-white capitalize mt-4 mb-2">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </h4>
                            <ul className="list-disc list-inside ml-4">
                              {value?.map((item, i) => (
                                <li key={i} className="mb-2">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Package Tiers section */}
                    {pkg.packageTiers && (
                      <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-white my-6">
                          Package Tiers
                        </h3>
                        {Object.entries(pkg.packageTiers).map(
                          ([key, value]) => (
                            <div key={key} className="mb-2">
                              <h4 className="text-xl font-semibold text-white capitalize mt-4 mb-2">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </h4>
                              <p>Price: {value.price}</p>
                              {value.includesAllFrom && (
                                <p>
                                  Includes all from: {value.includesAllFrom}
                                </p>
                              )}
                              {Object.entries(value).map(
                                ([subKey, subValue]) => {
                                  if (
                                    Array.isArray(subValue) &&
                                    subKey !== "includesAllFrom"
                                  ) {
                                    return (
                                      <div key={subKey}>
                                        <h5 className="text-xl font-semibold text-white capitalize mt-4 mb-2">
                                          {subKey
                                            .replace(/([A-Z])/g, " $1")
                                            .trim()}
                                        </h5>
                                        <ul className="list-disc list-inside ml-4">
                                          {subValue.map((item, i) => (
                                            <li key={i} className="mb-2">
                                              {item}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    );
                                  }
                                  return null;
                                }
                              )}
                            </div>
                          )
                        )}
                      </div>
                    )}

                    {/* Package Options section */}
                    {pkg.packageOptions && (
                      <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-white my-6">
                          Package Options
                        </h3>
                        {Object.entries(pkg.packageOptions).map(
                          ([key, value]) => (
                            <div key={key} className="mb-2">
                              <h4 className="text-xl font-semibold text-white capitalize mt-4 mb-2">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </h4>
                              {Object.entries(value).map(
                                ([subKey, subValue]) => {
                                  if (Array.isArray(subValue)) {
                                    return (
                                      <div key={subKey}>
                                        <h5 className="text-xl font-semibold text-white capitalize mt-4 mb-2">
                                          {subKey
                                            .replace(/([A-Z])/g, " $1")
                                            .trim()}
                                        </h5>
                                        <ul className="list-disc list-inside ml-4">
                                          {subValue.map((item, i) => (
                                            <li key={i} className="mb-2">
                                              {item}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    );
                                  } else if (
                                    typeof subValue === "object" &&
                                    subValue !== null
                                  ) {
                                    return (
                                      <div key={subKey}>
                                        <h5 className="text-xl font-semibold text-white capitalize mt-4 mb-2">
                                          {subKey
                                            .replace(/([A-Z])/g, " $1")
                                            .trim()}
                                        </h5>
                                        {Object.entries(subValue).map(
                                          ([nestedKey, nestedValue]) => (
                                            <p key={nestedKey}>
                                              {nestedKey}:{" "}
                                              {typeof nestedValue === "string"
                                                ? nestedValue
                                                : JSON.stringify(nestedValue)}
                                            </p>
                                          )
                                        )}
                                      </div>
                                    );
                                  }
                                  return null;
                                }
                              )}
                            </div>
                          )
                        )}
                      </div>
                    )}

                    {/* Pricing section */}
                    {pkg.pricing && (
                      <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-white my-6">
                          Pricing
                        </h3>
                        {pkg.pricing.onboardingCharges && (
                          <p>
                            Onboarding Charges: {pkg.pricing.onboardingCharges}
                          </p>
                        )}
                        {pkg.pricing.commission && (
                          <p>Commission: {pkg.pricing.commission}</p>
                        )}
                      </div>
                    )}

                    {/* Benefits section */}
                    {pkg.benefits && (
                      <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-white my-6">
                          Benefits
                        </h3>
                        <ul className="list-disc list-inside ml-4">
                          {pkg.benefits.map((benefit, i) => (
                            <li key={i} className="mb-2">
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Performance Guarantee section */}
                    {pkg.performanceGuarantee && (
                      <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-white my-6">
                          Performance Guarantee
                        </h3>
                        <p>{pkg.performanceGuarantee}</p>
                      </div>
                    )}

                    {/* Expectations section */}
                    {pkg.expectations && (
                      <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-white my-6">
                          Expectations
                        </h3>
                        <ul className="list-disc list-inside ml-4">
                          {pkg.expectations.map((expectation, i) => (
                            <li key={i} className="mb-2">
                              {expectation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Why Choose Us section */}
                    {pkg.whyChooseUs && (
                      <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-white my-6">
                          Why Choose Us
                        </h3>
                        <ul className="list-disc list-inside ml-4">
                          {pkg.whyChooseUs.map((reason, i) => (
                            <li key={i} className="mb-2">
                              {reason}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Card footer with buttons */}
              <div className="flex justify-between items-center p-6 mt-auto">
                <Button
                  onClick={() => openWhatsApp(pkg.name)}
                  title="Contact Us Now"
                />
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  {expandedPackage === index ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Packages;

// import React, { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { marketingPackages } from './marketingPackages'
// import Button from '@src/Components/Button'
// import { ChevronDown, ChevronUp } from 'lucide-react'

// const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.1
//         }
//     }
// }

// const cardVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             type: 'spring',
//             stiffness: 100
//         }
//     }
// }

// const Packages: React.FC = () => {
//     const [expandedPackage, setExpandedPackage] = useState<number | null>(null)

//     const openWhatsApp = (packageName: string) => {
//         const message = encodeURIComponent(`I'm interested in the ${packageName}. Can you provide more information?`)
//         window.open(`https://wa.me/923035256390?text=${message}`, '_blank')
//     }

//     const toggleExpand = (index: number) => {
//         setExpandedPackage(expandedPackage === index ? null : index)
//     }

//     return (
//         <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-600 via-navy-800 to-navy-900 py-12 px-4 sm:px-6 lg:px-8">
//             <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 variants={containerVariants}
//                 className="max-w-4xl mx-auto"
//             >
//                 <motion.h1
//                     variants={cardVariants}
//                     className="text-5xl md:text-7xl font-extrabold text-center text-white mb-12"
//                 >
//                     Our Packages
//                 </motion.h1>

//                 <motion.div
//                     variants={containerVariants}
//                     className="space-y-8"
//                 >
//                     {marketingPackages.map((pkg, index) => (
//                         <motion.div
//                             key={index}
//                             variants={cardVariants}
//                             className="bg-white bg-opacity-10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
//                         >
//                             <div className="p-6">
//                                 <h2 className="text-2xl font-bold text-white mb-4">{pkg.name}</h2>
//                                 <p className="text-gray-300 mb-4">{pkg.overview}</p>

//                                 {pkg.pricing && (
//                                     <div className="mb-4">
//                                         <h3 className="text-xl font-semibold text-white mb-2">Pricing</h3>
//                                         {pkg.pricing.onboardingCharges && (
//                                             <p className="text-gray-300">Onboarding Charges:<span className='font-bold'> {pkg.pricing.onboardingCharges}</span>
//                                             </p>
//                                         )}
//                                         {pkg.pricing.commission && (
//                                             <p className="text-gray-300">Commission: <span
//                                                 className='font-bold'
//                                             >{pkg.pricing.commission}</span>

//                                             </p>
//                                         )}
//                                     </div>
//                                 )}
//                                 {pkg.packageOptions && (
//                                     <div className="mb-4">
//                                         <h3 className="text-xl font-semibold text-white mb-2">Package Options</h3>
//                                         {Object.entries(pkg.packageOptions).map(([key, value]) => (
//                                             <div key={key} className="mb-2">
//                                                 <h4 className="text-lg text-white capitalize font-bold">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
//                                                 <p className="text-gray-300 font-bold">
//                                                     {value.pricing.setupFee && `Setup Fee: ${value.pricing.setupFee}`}
//                                                     {value.pricing.commission && `, Commission: ${value.pricing.commission}`}
//                                                 </p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                                 {pkg.packageTiers && (
//                                     <div className="mb-4">
//                                         <h3 className="text-xl font-bold text-white mb-2">Package Tiers</h3>
//                                         {Object.entries(pkg.packageTiers).map(([key, value]) => (
//                                             <div key={key} className="mb-2">
//                                                 <h4 className="text-lg font-semibold text-white capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
//                                                 <p className="text-gray-300 font-bold">Price: {value.price}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}

//                                 {pkg.benefits && (
//                                     <div className="mb-4">
//                                         <h3 className="text-xl font-semibold text-white mb-2">Benefits</h3>
//                                         <ul className="list-disc list-inside text-gray-300">
//                                             {pkg.benefits.slice(0, 3).map((benefit, i) => (
//                                                 <li key={i}>{benefit}</li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 )}

//                                 {pkg.performanceGuarantee && (
//                                     <p className="text-green-400 font-semibold mb-4">
//                                         Performance Guarantee: {pkg.performanceGuarantee}
//                                     </p>
//                                 )}

//                                 <div className="flex justify-between items-center mt-4">
//                                     <Button
//                                         onClick={() => openWhatsApp(pkg.name)}
//                                         title='Contact Us Now'
//                                     />
//                                     <button
//                                         onClick={() => toggleExpand(index)}
//                                         className="text-white hover:text-gray-300 transition-colors duration-200"
//                                     >
//                                         {expandedPackage === index ? (
//                                             <ChevronUp className="w-6 h-6" />
//                                         ) : (
//                                             <ChevronDown className="w-6 h-6" />
//                                         )}
//                                     </button>
//                                 </div>

//                                 <AnimatePresence>
//                                     {expandedPackage === index && (
//                                         <motion.div
//                                             initial={{ opacity: 0, height: 0 }}
//                                             animate={{ opacity: 1, height: 'auto' }}
//                                             exit={{ opacity: 0, height: 0 }}
//                                             transition={{ duration: 0.3 }}
//                                             className="mt-4 text-gray-300"
//                                         >
//                                             {pkg.components && (
//                                                 <div className="mb-4">
//                                                     <h3 className="text-xl font-semibold text-white mb-2">Components</h3>
//                                                     {Object.entries(pkg.components).map(([key, value]) => (
//                                                         <div key={key} className="mb-2">
//                                                             <h4 className="text-lg font-semibold text-white capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
//                                                             <ul className="list-disc list-inside">
//                                                                 {value?.map((item, i) => (
//                                                                     <li key={i}>{item}</li>
//                                                                 ))}
//                                                             </ul>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             )}

//                                             {pkg.packageOptions && (
//                                                 <div className="mb-4">
//                                                     <h3 className="text-xl font-semibold text-white mb-2">Package Options</h3>
//                                                     {Object.entries(pkg.packageOptions).map(([key, value]) => (
//                                                         <div key={key} className="mb-2">
//                                                             <h4 className="text-lg font-bold text-white capitalize">{key}</h4>
//                                                             <p>Pricing: {value.pricing.setupFee ? `Setup Fee: ${value.pricing.setupFee}, ` : ''}
//                                                                 {value.pricing.monthlyRetainer ? `Monthly Retainer: ${value.pricing.monthlyRetainer}, ` : ''}
//                                                                 {value.pricing.commission ? `Commission: ${value.pricing.commission}` : ''}</p>
//                                                             {value.minimumAdSpend && <p>Minimum Ad Spend: {value.minimumAdSpend}</p>}
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             )}

//                                             {pkg.packageTiers && (
//                                                 <div className="mb-4">
//                                                     <h3 className="text-xl font-semibold text-white mb-2">Package Tiers</h3>
//                                                     {Object.entries(pkg.packageTiers).map(([key, value]) => (
//                                                         <div key={key} className="mb-2">
//                                                             <h4 className="text-lg font-bold text-white capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
//                                                             <p className="text-gray-300 font-bold">Price: {value.price}</p>
//                                                             {value.includesAllFrom && (
//                                                                 <p className="text-gray-300">Includes all from: {value.includesAllFrom}</p>
//                                                             )}
//                                                             {Object.entries(value).map(([subKey, subValue]) => {
//                                                                 if (Array.isArray(subValue) && subKey !== 'includesAllFrom') {
//                                                                     return (
//                                                                         <div key={subKey} className="mt-2">
//                                                                             <h5 className="text-md font-semibold text-white capitalize">{subKey.replace(/([A-Z])/g, ' $1').trim()}</h5>
//                                                                             <ul className="list-disc list-inside">
//                                                                                 {subValue.map((item, i) => (
//                                                                                     <li key={i}>{item}</li>
//                                                                                 ))}
//                                                                             </ul>
//                                                                         </div>
//                                                                     )
//                                                                 }
//                                                                 return null
//                                                             })}
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             )}

//                                             {pkg.expectations && (
//                                                 <div className="mb-4">
//                                                     <h3 className="text-xl font-semibold text-white mb-2">Expectations</h3>
//                                                     <ul className="list-disc list-inside">
//                                                         {pkg.expectations.map((expectation, i) => (
//                                                             <li key={i}>{expectation}</li>
//                                                         ))}
//                                                     </ul>
//                                                 </div>
//                                             )}

//                                             {pkg.timeline && (
//                                                 <div className="mb-4">
//                                                     <h3 className="text-xl font-semibold text-white mb-2">Timeline</h3>
//                                                     {pkg.timeline.month1 && <p>Month 1: {pkg.timeline.month1}</p>}
//                                                     {pkg.timeline.month2to3 && <p>Month 2-3: {pkg.timeline.month2to3}</p>}
//                                                 </div>
//                                             )}

//                                             {pkg.whyChooseUs && (
//                                                 <div className="mb-4">
//                                                     <h3 className="text-xl font-semibold text-white mb-2">Why Choose Us</h3>
//                                                     <ul className="list-disc list-inside">
//                                                         {pkg.whyChooseUs.map((reason, i) => (
//                                                             <li key={i}>{reason}</li>
//                                                         ))}
//                                                     </ul>
//                                                 </div>
//                                             )}

//                                             {pkg.packageDetails && (
//                                                 <div className="mb-4">
//                                                     <h3 className="text-xl font-semibold text-white mb-2">Package Details</h3>
//                                                     {pkg.packageDetails.duration && (
//                                                         <p className="text-gray-300">Duration: {pkg.packageDetails.duration}</p>
//                                                     )}
//                                                     {pkg.packageDetails.paymentTerms && (
//                                                         <div>
//                                                             <h4 className="text-lg font-semibold text-white">Payment Terms</h4>
//                                                             <ul className="list-disc list-inside">
//                                                                 {pkg.packageDetails.paymentTerms.map((term, i) => (
//                                                                     <li key={i}>{term}</li>
//                                                                 ))}
//                                                             </ul>
//                                                         </div>
//                                                     )}
//                                                 </div>
//                                             )}

//                                             {pkg.callToAction && (
//                                                 <div className="mb-4">
//                                                     <p className="text-white font-semibold">{pkg.callToAction}</p>
//                                                 </div>
//                                             )}
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </motion.div>
//         </div>
//     )
// }

// export default Packages
