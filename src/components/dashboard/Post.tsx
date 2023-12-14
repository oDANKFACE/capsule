import React from 'react';
import {useRouter} from 'next/router';
// import moment LOOK AT ME, DO THIS LATER

interface PostProps {
    username: string;
    profilePic: string;
    postImage?: string;
    postText: string;
    buriedDate: string;
    uncoverDate: string;
    likes: number;
}

const Post: React.FC<PostProps> = ({username, profilePic, postImage, postText, buriedDate, uncoverDate, likes}) => {
    const router = useRouter();

    const handleProfileClick = () => {
        router.push(`/profile/${username}`);
    };

    const formatDate = (isoDate: any) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});
    };


    return (
        <div className="bg-white p-4 rounded-lg shadow mb-4 max-w-2xl mx-auto">
            <div className="flex items-center mb-4">
                <img
                    src={profilePic}
                    alt={`${username}'s profile`}
                    className="rounded-full h-12 w-12 cursor-pointer"
                    onClick={handleProfileClick}
                />
                <div className="ml-4">
                    <h2 className="text-lg font-semibold text-[#333]">{username}</h2>
                    <p className="text-sm text-gray-500">Buried: {formatDate(buriedDate)}</p>
                    <p className="text-sm text-gray-500">Uncovered: {formatDate(uncoverDate)}</p>

                </div>
            </div>
            {postImage && <img src={postImage} alt="Post" className="w-full h-auto mt-2 rounded post-image"/>}
            <p className="mt-2 text-[#333]">{postText}</p>
            <p className="text-sm text-gray-500">Likes: {likes}</p>
        </div>
    );
};

export default Post;
