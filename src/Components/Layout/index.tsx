import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import SmoothTicker from '../SmoothTicker';

const Layout: FC = (): JSX.Element => {
    return (
        <>
            <div className="flex flex-col min-h-screen mb-20 bg-gradient-to-br from-slate-700 via-navy-600 to-navy-900">
                <Navbar />
                <main className="flex-grow">
                    <Outlet />
                </main>
              
            </div>
            <SmoothTicker />
        </>
    );
};

export default Layout;