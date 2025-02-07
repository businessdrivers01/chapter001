import Marquee from 'react-fast-marquee';
import { motion } from "framer-motion"
// import client1 from "@src/assets/TrustedBy/client1.png";
import client2 from "@src/assets/TrustedBy/client2.png";
import client3 from "@src/assets/TrustedBy/client3.png";
// import client4 from "@src/assets/TrustedBy/client4.png";
import client5 from "@src/assets/TrustedBy/client5.png";
import client6 from "@src/assets/TrustedBy/client6.png";
// import client7 from "@src/assets/TrustedBy/client7.png";
import client8 from "@src/assets/TrustedBy/client8.png";
import client9 from "@src/assets/TrustedBy/client9.png";
import client10 from "@src/assets/TrustedBy/client10.png";
import client11 from "@src/assets/TrustedBy/client11.png";

import { animationSettings } from '@src/utils/animations';

// Array of logos
const logos = [
    // client1,
    client2,
    client3,
    // client4,
    client5,
    client6,
    // client7,
    client8,
    client9,
    client10,
    client11,
];

function TrustedBy() {
    return (
        <div className='py-12'>
            <motion.h2
                {...animationSettings}
                className="text-white text-5xl md:text-6xl font-bold text-center"
            >
                Trusted By
            </motion.h2>
            <div className="overflow-hidden w-full mt-16 bg-white py-12">
                <Marquee gradient={false} speed={80}>
                    {logos.map((logo, index) => (
                        <div key={index} className="px-4">
                            <img
                            loading='lazy'
                            src={logo} alt="Company Logo" className="h-20 md:h-28 object-contain" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div >
    );
}

export default TrustedBy;