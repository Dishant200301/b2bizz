import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="w-full bg-background min-h-[80vh] flex items-center justify-center px-5 md:px-10 lg:px-[100px] py-20 font-inter">
        <div className="bg-[#161A18] rounded-[30px] p-10 md:p-20 flex flex-col items-center text-center relative overflow-hidden w-full max-w-[1000px] min-h-[500px] justify-center">
            {/* Background Blur Effect */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600" 
                    alt="Background" 
                    className="w-full h-full object-cover opacity-40 blur-lg scale-110"
                />
                <div className="absolute inset-0 bg-[#161A18]/60"></div>
                {/* Gradient Overlay for extra smoothness */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#161A18]/80"></div>
            </div>

            <div className="relative z-10 max-w-[600px]">
                <h1 className="text-[100px] md:text-[160px] font-medium text-primary leading-none tracking-tight mb-2 opacity-90">
                    404
                </h1>
                <h2 className="text-[32px] md:text-[42px] font-medium text-primary mb-6">
                    Page Not Found
                </h2>
                <p className="text-secondary text-[17px] md:text-[18px] leading-[1.6] mb-10">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Link 
                    to="/" 
                    className="inline-flex items-center justify-center bg-primary text-[#161A18] px-10 py-4 rounded-[10px] text-[17px] font-medium hover:bg-[#e2efb7] transition-colors"
                >
                    Back to home
                </Link>
            </div>
        </div>
    </div>
  );
};

export default NotFound;
