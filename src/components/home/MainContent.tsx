import React, {useState} from 'react';
import LoginComponent from "@/components/home/LoginComponent";
import RegistrationComponent from "@/components/home/RegistrationComponent";

const MainContent: React.FC = () => {
    const [isLoginView, setIsLoginView] = useState<boolean>(true);

    return (
        <main>
            {isLoginView ? (
                <LoginComponent switchView={() => setIsLoginView(false)}/>
            ) : (
                <RegistrationComponent switchView={() => setIsLoginView(true)}/>
            )}
        </main>
    );
}

export default MainContent;
