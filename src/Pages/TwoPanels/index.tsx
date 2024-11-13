import React from 'react';
import { useNavigate } from 'react-router-dom';

const TwoPanels: React.FC = () => {
    const navigate = useNavigate();

    const handleRightLogoClick = () => {
        window.open('https://www.businessdrivers01.com/', '_blank'); // Replace with your actual external link
    };

    const handleLeftLogoClick = () => {
        navigate('/app'); // Redirects to the current website's home page
    };

    return (
        <div className="flex flex-col sm:flex-row h-svh md:h-dvh w-screen">
            {/* Left Panel */}
            <div
                className="flex-1 bg-[#002F47] flex justify-center items-center relative cursor-pointer"
                onClick={handleLeftLogoClick}
            >
                <img
                    src="/logo-white-updated.png"
                    alt="Adcom Logo"
                    className="w-[150px] h-auto"
                />

            </div>

            {/* Right Panel */}
            <div
                className="flex-1 bg-[#BE2026]  flex justify-center items-center relative cursor-pointer"
                onClick={handleRightLogoClick}
            >
                <img
                    src="/business-drivers-logo.webp"
                    alt="Zenith Logo"
                    className="w-[250px] h-auto"
                />

            </div>
        </div>
    );
};

export default TwoPanels;
