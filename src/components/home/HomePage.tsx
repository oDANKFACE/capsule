import React from 'react';
import HomeHeader from "@/components/home/HomeHeader";
import MainContent from "@/components/home/MainContent";
import Footer from "@/components/essentials/Footer";

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <HomeHeader/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default HomePage;
