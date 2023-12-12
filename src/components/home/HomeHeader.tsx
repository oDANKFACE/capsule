import React from 'react';

const HomeHeader: React.FC = () => {
    return (
        <header className="bg-white shadow-sm py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-semibold text-gray-800">My Cool App</h1>
                </div>
            </div>
        </header>
    );
}

export default HomeHeader;
