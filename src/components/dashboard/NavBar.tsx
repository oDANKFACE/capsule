import React from 'react';
import {useRouter} from "next/router";

interface NavBarProps {
    setActiveTab: (tab: string) => void;
}


const NavBar: React.FC<NavBarProps> = ({setActiveTab}) => {

    const router = useRouter();

    const handleProfileClick = () => {
        router.push('/profile');
    };

    const handleCreateClick = () => {
        router.push('/create');
    };

    return (
        <nav className="bg-white shadow-sm py-3">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-12 flex justify-center items-center">
                    <ul className="flex justify-around space-x-24 text-2xl">
                        <li className="cursor-pointer text-[#8CBEB2] hover:text-[#7aa898]"
                            onClick={() => setActiveTab('friends')}>Friends
                        </li>
                        <li className="cursor-pointer text-[#8CBEB2] hover:text-[#7aa898]"
                            onClick={() => setActiveTab('trending')}>Trending
                        </li>
                        <li className="cursor-pointer text-[#8CBEB2] hover:text-[#7aa898]"
                            onClick={() => setActiveTab('upcoming')}>Upcoming
                        </li>
                    </ul>
                    <div className="absolute right-0 flex space-x-4">
                        <button className="relative bg-[#8CBEB2] rounded-full p-2 overflow-hidden"
                                onClick={handleProfileClick}>
                            {/* PLACEHOLDER */}
                            <img src="https://placehold.co/40x40" alt="Profile" className="rounded-full"/>
                            <div className="shine-effect"></div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>


    );
}

export default NavBar;
