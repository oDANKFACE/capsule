import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white shadow-sm py-4 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                    <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Darien Weller. All rights
                        reserved or whatever.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
