import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import SmoothTicker from '../SmoothTicker';

const Layout: FC = (): JSX.Element => {
    const phoneNumber = "923035256390";
    const message = "Hello! I'm interested in your services.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <>
            <div className="flex flex-col min-h-screen mb-20 bg-gradient-to-br from-slate-700 via-navy-600 to-navy-900">
                <Navbar />
                <main className="flex-grow">
                    <Outlet />
                </main>
            </div>

            {/* WhatsApp Icon */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-24 right-4 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
                aria-label="Contact on WhatsApp"
            >
                <img
                className='w-8'
                src="/WhatsApp.svg" alt="WhatsApp Icon" />
            </a>

            <SmoothTicker />
        </>
    );
};

export default Layout;
