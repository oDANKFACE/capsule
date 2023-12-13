import React from 'react';
import ProfilePicture from "@/components/profile/ProfilePicture";
import BioSection from '@/components/profile/BioSection';
import InterestsSection from '@/components/profile/InterestsSection';
import Separator from "@/components/profile/Separator";
import {useRouter} from 'next/router';

const ProfilePage: React.FC = () => {
    const router = useRouter();

    const handleBack = () => {
        router.push('/dashboard')
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#E6F4F1] py-10">
            <div className="relative bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl">
                <button className="absolute top-0 left-0 hover:text-[#7aa898] text-[#8CBEB2] text-4xl py-2 px-4 rounded-md"
                        onClick={handleBack}>←
                </button>
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
