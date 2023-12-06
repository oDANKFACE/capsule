import React, {useState} from 'react';
import NavBar from "@/components/dashboard/NavBar";
import MainContent from "@/components/dashboard/MainContent";

const Dashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('friends');

    return (
        <div>
            <NavBar setActiveTab={setActiveTab}/>
            <MainContent activeTab={activeTab}/>
        </div>
    );
}

export default Dashboard;
