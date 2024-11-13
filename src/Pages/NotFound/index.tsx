import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
            <h1 className="text-4xl font-bold text-navy-900 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-navy-700 mb-8">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <button
                onClick={() => navigate('/')}
                className="bg-navy-500 hover:bg-navy-600 text-white px-6 py-2 rounded-lg 
                    transition-all duration-200"
            >
                Go Back Home
            </button>
        </div>
    );
};

export default NotFound;