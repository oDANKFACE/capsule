import React from 'react';

const ProfilePicture: React.FC = () => {

    const handleUpload = () => {

    }

    const handleDelete = () => {

    }

    return (
        <div className="text-center spacer-border-below">
            {/* PLACEHOLDER */}
            <img src="https://placehold.co/240x240" alt="Profile" className="rounded-full mx-auto"/>
            <div className="flex flex-col mt-4">
                <button className="bg-[#8CBEB2] hover:bg-[#7aa898] text-white px-3 py-2 rounded-md mx-auto">Upload New
                </button>
                <p className="secondary-button mt-2 text-center" onClick={handleDelete}>Delete</p>
            </div>
        </div>
    );
}

export default ProfilePicture;
