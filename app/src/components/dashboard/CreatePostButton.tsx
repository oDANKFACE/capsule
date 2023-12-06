import React from 'react';
import {useRouter} from "next/router";


const CreatePostButton: React.FC = () => {
    const router = useRouter();

    const handleCreateClick = () => {
        router.push('/');
    };

    return (
        <div className="flex space-x-4">
            <button className="bg-[#8CBEB2] hover:bg-[#7aa898] text-white px-3 py-2 rounded-md"
                    onClick={handleCreateClick}>Create Post
            </button>
        </div>
    );
}

export default CreatePostButton;
