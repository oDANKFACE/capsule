import React from 'react';
import ProfilePicture from "@/components/profile/ProfilePicture";
import BioSection from '@/components/profile/BioSection';
import InterestsSection from '@/components/profile/InterestsSection';
import Separator from "@/components/profile/Separator";

const ProfilePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#E6F4F1] py-10">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl">
                <ProfilePicture/>
                <Separator/>
                <BioSection/>
                <Separator/>
                <InterestsSection/>
            </div>
        </div>
    );
}

export default ProfilePage;
