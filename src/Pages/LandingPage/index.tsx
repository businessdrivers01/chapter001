import { motion } from 'framer-motion'
import Button from "@src/Components/Button"
import TrustedBy from '@src/Components/TrustedBy'
// import ParallaxPage from '@src/Pages/ParallaxPage'
import { NavLink } from 'react-router-dom';
// import CustomSlider from '@src/Components/CustomSlider';

// import image1 from '@src/assets/newImages/image1.jpg';
// import image2 from '@src/assets/newImages/image2.jpg';
// import image3 from '@src/assets/newImages/image3.jpg';
// import image4 from '@src/assets/newImages/image4.jpg';
// import image5 from '@src/assets/newImages/image5.jpg';
// import image6 from '@src/assets/newImages/image6.jpg';
// import image7 from '@src/assets/newImages/image7.jpg';
// import image8 from '@src/assets/newImages/image8.jpg';
// import image9 from '@src/assets/newImages/image9.png';
// import image10 from '@src/assets/newImages/image10.jpg';
// import image11 from '@src/assets/newImages/image11.jpg';
// import image12 from '@src/assets/newImages/image12.jpg';
// import image13 from '@src/assets/newImages/image13.jpg';

// import Introduction from './Introduction'

export default function LandingPage() {


    // const slides = [
    //     { image: image1, alt: 'Slide 1' },
    //     { image: image2, alt: 'Slide 2' },
    //     { image: image3, alt: 'Slide 3' },
    //     { image: image4, alt: 'Slide 4' },
    //     { image: image5, alt: 'Slide 5' },
    //     { image: image6, alt: 'Slide 6' },
    //     { image: image7, alt: 'Slide 7' },
    //     { image: image8, alt: 'Slide 8' },
    //     { image: image9, alt: 'Slide 9' },
    //     { image: image10, alt: 'Slide 10' },
    //     { image: image11, alt: 'Slide 11' },
    //     { image: image12, alt: 'Slide 12' },
    //     { image: image13, alt: 'Slide 13' },
    // ];

    return (
        <>
            <div className="w-full h-screen relative overflow-hidden">
                {/* Video background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/video1.mp4"
                />

                {/* Overlay for shadow effect */}
                <div className="absolute inset-0 bg-black opacity-40"></div>

                {/* Content container */}
                <div className="relative flex items-center justify-center h-full py-16">
                    {/* Hero section */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="relative">
                            {/* Main Heading */}
                            <h1 className="text-7xl md:text-9xl font-extrabold text-white mb-4">
                                CHAPTER 001
                            </h1>

                            {/* Secondary Heading */}
                            <h2 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-3xl-glow">
                                PAKISTAN
                            </h2>

                            <p className="mt-4 text-xl text-white">
                                Let's start your new chapter
                            </p>

                            {/* Button Link */}
                            <div className="flex justify-center py-4">
                                <NavLink to={"/services"}>
                                    <Button title="Explore Now" className="py-8" />
                                </NavLink>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>






            {/* <Introduction /> */}
            <TrustedBy />

            {/* <ParallaxPage /> */}
           





            {/* <CustomSlider
                slides={slides}
                className="my-12"
            /> */}
        </>
    )
}
