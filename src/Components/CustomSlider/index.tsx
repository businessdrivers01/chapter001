import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { NavLink } from 'react-router-dom';

type Slide = {
    image: string;
    alt: string;
};

interface SliderProps {
    slides: Slide[];
    className: string;
    autoplay?: boolean;
    autoplaySpeed?: number;
    dots?: boolean;
    arrows?: boolean;

}

const CustomSlider: React.FC<SliderProps> = ({
    slides,
    className = "",
    autoplay = true,
    autoplaySpeed = 3000,
    dots = !true,
    arrows = !true,
}) => {
    const settings = {
        dots,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay,
        autoplaySpeed,
        arrows,
    };

    return (
        <div className=" px-4 md:px-8 lg:px-32 relative drop-shadow-lg">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className={`w-full ${className}`}>
                        <img
                            loading="lazy"
                            src={slide.image}
                            alt={slide.alt}
                            className="w-full lg:w-[80vw] h-auto object-cover rounded-xl"
                        />
                    </div>
                ))}
            </Slider>
            {/* Get Started Button */}
            {/* <NavLink to={"/app/services"}>
                <button className="btn !px-16">
                    Get Started
                </button>
            </NavLink> */}
        </div>
    );
};

export default CustomSlider;
