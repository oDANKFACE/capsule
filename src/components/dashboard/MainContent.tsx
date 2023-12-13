import React from 'react';
import CreatePostButton from "@/components/dashboard/CreatePostButton";
import TrendingPosts from "@/components/dashboard/TrendingPosts";
import FriendsList from "@/components/dashboard/FriendsList";

interface MainContentProps {
    activeTab: string;
}

const MainContent: React.FC<MainContentProps> = ({activeTab}) => {
    return (
        <div className="flex flex-col align-center">
            <CreatePostButton/>
            {activeTab === 'friends' && <FriendsList/>}
            {activeTab === 'trending' && <TrendingPosts/>}
            {activeTab === 'upcoming' && <p>Upcoming Events/Dates</p>}
            {activeTab === 'profile' && <p>User Profile</p>}
        </div>
    );
}

export default MainContent;
