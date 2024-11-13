import { FC, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../Button';
import { AnimatedNavLink } from './AnimatedNavLink';

interface NavItem {
    name: string;
    path: string;
}

const navItems: NavItem[] = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Blogs', path: 'blogs' },
    { name: 'Careers', path: 'careers' },
];

const Navbar: FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const sidebar = document.getElementById('sidebar');
            const hamburger = document.getElementById('hamburger');

            if (isOpen && sidebar && hamburger &&
                !sidebar.contains(e.target as Node) &&
                !hamburger.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [isOpen]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <nav className="z-40 py-2">
                {/* Main Navbar */}
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <NavLink to="/app/home">
                                <img
                                    src="/logo-white-updated.png"
                                    alt="Logo"
                                    className="h-16 w-auto"
                                />
                            </NavLink>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8 ml-10">
                            {navItems.map((item) => (
                                <AnimatedNavLink
                                    key={item.path}
                                    to={item.path}
                                    name={item.name}
                                    className="text-white hover:text-white"
                                />
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className='hidden md:block'>
                            <NavLink to={"/app/contact"}>
                                <Button
                                    title="Contact Us" />

                            </NavLink>
                        </div>


                        {/* Hamburger Menu */}
                        <button

                            id="hamburger"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(!isOpen);
                            }}
                            className="md:hidden p-2 rounded-lg text-white hover:bg-cyan-500/10 transition-colors"
                        >
                            {isOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            <div
                id="sidebar"
                className={`
                    fixed top-0 right-0 h-full w-full 
                    bg-gradient-to-br from-black via-navy-800 to-navy-900 backdrop-blur-lg
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-y-0' : 'translate-y-full'}
                    z-50 md:hidden
                `}
            >
                {/* Close button inside sidebar */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-white hover:text-gray-200"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col items-center p-8 pt-20 space-y-6">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => `
                                text-5xl font-extrabold text-white hover:text-white 
                                py-3 px-6 rounded-lg 
                                transition-all duration-200
                                ${isActive ? 'bg-navy-300/20' : ''}
                            `}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
                <div className='px-8'>
                    <NavLink to={"/app/services"} onClick={() => setIsOpen(false)}>
                        <button className='btn w-full'>
                            Get Started
                        </button>
                    </NavLink>

                </div>
            </div>
        </>
    );
};

export default Navbar;
