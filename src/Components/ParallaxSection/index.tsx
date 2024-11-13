import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import { pop } from '@src/utils/animations'
import Triangle from '@src/Components/Triangle'

interface ParallaxSectionProps {
    id: string
    title: string
    description: string
    imgSrc: string
    imgAlt: string
    bgColor?: string
    textColor?: string
    reverse?: boolean
}

export default function ParallaxSection({
    id,
    title,
    description,
    imgSrc,
    imgAlt,
    bgColor,
    textColor,
    reverse = false
}: ParallaxSectionProps) {
    return (
        <section
            id={id}
            className={`w-full min-h-screen relative ${bgColor} ${textColor} overflow-hidden`}
        >
            <ParallaxBanner className="h-screen">
                <ParallaxBannerLayer speed={-20}>
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        className={`absolute top-[28%] w-[30vw] hidden md:block ${reverse ? "ml-32" : "right-0 mr-32"}`}
                    // style={{ top: '47%', transform: 'translateY(-50%) translateX(70%)' }}
                    />
                </ParallaxBannerLayer>
                <ParallaxBannerLayer speed={-30}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[70%] lg:w-[80%] mx-auto flex flex-col lg:flex-row items-center justify-between">
                            {/* Title for mobile */}
                            <motion.div
                                variants={pop}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                className="w-full lg:hidden mb-8"
                            >
                                <h3 className="font-heading-narrow font-extrabold leading-[0.85em] tracking-[0.01em] uppercase mb-[0.2em] text-[55px] text-center">
                                    {title}
                                </h3>
                            </motion.div>

                            {/* Desktop layout */}
                            <div className={`hidden lg:flex w-full ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
                                <Triangle
                                    className={`fixed top-8 ${reverse ? '-right-36  -rotate-90' : '-left-36'} hidden md:block`}
                                />
                                <Parallax speed={10} className={`w-1/2 ${reverse ? 'text-right -mr-28' : 'text-left -ml-28'}`}>
                                    <motion.h3
                                        variants={pop}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: true }}
                                        className="hidden lg:block mb-11 font-extrabold leading-[0.85em] tracking-[0.01em] uppercase text-[56px] lg:text-[40px]"
                                    >
                                        {title}
                                    </motion.h3>

                                    <motion.div
                                        variants={pop}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: true }}
                                        className={`lg:max-w-[500px] mb-28 text-lg lg:text-xl font-light ${reverse ? 'ml-auto' : ''}`}
                                    >
                                        {description.split('\n').map((line, index) => (
                                            <p key={index} className="mb-2">{line}</p>
                                        ))}
                                    </motion.div>
                                </Parallax>
                            </div>

                            {/* Mobile layout */}
                            <div className="lg:hidden w-full">
                                <motion.div
                                    variants={pop}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    className="mb-5 text-lg font-light"
                                >
                                    {description.split('\n').map((line, index) => (
                                        <p key={index} className="mb-2">{line}</p>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        </section>
    )
}