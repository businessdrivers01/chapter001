// src/routes/Routes.tsx
import { FC } from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import Layout from '@src/Components/Layout';
import LandingPage from '@src/Pages/LandingPage';
import { lazy, Suspense } from 'react';


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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-500"></div>
    </div>
);

const Routes: FC = (): JSX.Element => {
    return (
        <RouterRoutes>
            <Route path='/' element={<TwoPanels />} />

            <Route path="/app" element={<Layout />}>
                {/* Public routes */}
                <Route index element={<Navigate to={"home"} />} />
                <Route path='home' element={<LandingPage />} />

                {/* Lazy loaded routes */}
                <Route
                    path="about"
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <About />
                        </Suspense>
                    }
                />
                <Route
                    path="services"
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <Services />
                        </Suspense>
                    }
                />
                <Route
                    path="blogs"
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <Blogs />
                        </Suspense>
                    }
                />
                <Route
                    path="careers"
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <Careers />
                        </Suspense>
                    }
                />

                <Route
                    path="contact"
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <Contact />
                        </Suspense>
                    }
                />

                {/* 404 route */}
                <Route
                    path="404"
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <NotFound />
                        </Suspense>
                    }
                />

                {/* Redirect unknown routes to 404 */}
                {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
            </Route>
        </RouterRoutes>
    );
};

export default Routes;