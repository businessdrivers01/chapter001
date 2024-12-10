// src/routes/Routes.tsx
import { FC, useState } from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import Layout from '@src/Components/Layout';
import LandingPage from '@src/Pages/LandingPage';
import { lazy, Suspense } from 'react';
import { Loader } from 'lucide-react';

// Lazy load other pages for better performance
const About = lazy(() => import('@src/Pages/About'));
const Services = lazy(() => import('@src/Pages/Services'));
const Contact = lazy(() => import('@src/Pages/Contact'));
const TwoPanels = lazy(() => import('@src/Pages/TwoPanels'));
const NotFound = lazy(() => import('@src/Pages/NotFound'));
const Blogs = lazy(() => import('@src/Pages/Blogs'));
const Careers = lazy(() => import('@src/Pages/Careers'));

// Loading component for suspense fallback
const PageLoader: FC = () => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="rounded-full border-b-4 border-white">
            <Loader className='animate-spin text-red-500  h-12 w-12'/>
        </div>
    </div>
);



const Routes: FC = (): JSX.Element => {
    const [isLandingPageVisible, setIsLandingPageVisible] = useState(false);

    return (
        <Suspense fallback={<PageLoader />}>
            <RouterRoutes>
                {/* Root Route */}
                <Route
                    path="/"
                    // element={<PageLoader/>}
                    element={
                        isLandingPageVisible ? (
                            <Layout />
                        ) : (
                            <TwoPanels setIsLandingPageVisible={setIsLandingPageVisible} />
                        )
                    }
                >
                    {/* Nested Routes: Only Rendered if `isLandingPageVisible` is True */}
                    {isLandingPageVisible && (
                        <>
                            <Route path="" element={<LandingPage />} />
                            <Route path="about" element={<About />} />
                            <Route path="services" element={<Services />} />
                            <Route path="blogs" element={<Blogs />} />
                            <Route path="careers" element={<Careers />} />
                            <Route path="contact" element={<Contact />} />
                            {/* 404 route */}
                            <Route path="404" element={<NotFound />} />
                            {/* Redirect unknown routes to 404 */}
                            <Route path="*" element={<Navigate to="/404" replace />} />
                        </>
                    )}
                </Route>
            </RouterRoutes>
        </Suspense>


    );
};

export default Routes;
