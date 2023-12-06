// components/RegistrationComponent.tsx
import React from 'react';
import {useRouter} from 'next/router';

interface RegistrationComponentProps {
    switchView: () => void;
}

const RegistrationComponent: React.FC<RegistrationComponentProps> = ({switchView}) => {
    const router = useRouter();

    const handleRegister = () => {
        router.push('/dashboard');
    };

    return (
        <div className="card mt-20 mx-4">
            <h2 className="card-heading">Register</h2>
            <div className="flex flex-col space-y-4">
                <input type="text" placeholder="Username" className="home-input-field"/>
                <input type="password" placeholder="Password" className="home-input-field"/>
                <button className="bg-[#8CBEB2] hover:bg-[#7aa898] text-white w-full py-2 px-4 rounded-md"
                        onClick={handleRegister}>Create Account
                </button>
            </div>
            <p className="secondary-button mt-4 text-center" onClick={switchView}>Already have an account? Login</p>
        </div>

    );
}

export default RegistrationComponent;
