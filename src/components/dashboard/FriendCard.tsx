import React from 'react';
import {useRouter} from 'next/router';

interface FriendCardProps {
    userId: number;
    username: string;
    profilePic: string;
    bio: string;
}

const FriendCard: React.FC<FriendCardProps> = ({userId, username, profilePic, bio}) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/profile/${userId}`);
    };

    return (
        <div
            className="bg-white p-4 rounded-lg shadow mb-4 mr-4 cursor-pointer flex flex-col items-center justify-between"
            style={{width: '200px', height: '220px'}}>
            <img src={profilePic} alt={username} className="rounded-full h-20 w-20 mb-2"/>
            <h2 className="text-lg font-semibold text-center">{username}</h2>
            <p className="text-sm text-gray-500 text-center">{bio}</p>
        </div>
    );
};

export default FriendCard;
