import React from 'react';
import CreatePostButton from "@/components/dashboard/CreatePostButton";

interface MainContentProps {
    activeTab: string;
}

const MainContent: React.FC<MainContentProps> = ({activeTab}) => {
    return (
        <div className={'flex align-center'}>
            <CreatePostButton/>
            {activeTab === 'friends' && <p>Content from Friends</p>}
            {activeTab === 'trending' && <p>Trending Posts</p>}
            {activeTab === 'upcoming' && <p>Upcoming Events/Dates</p>}
            {activeTab === 'profile' && <p>User Profile</p>}
        </div>
    );
}

export default MainContent;
