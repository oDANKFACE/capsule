import React from 'react';

const InterestsSection: React.FC = () => {
    // PLACEHOLDER
    const interests = ['Interest 1', 'Interest 2', 'Interest 3'];

    return (
        <div className="mt-6">
            <ul className="list-disc pl-5">
                {interests.map((interest, index) => (
                    <li key={index} className="text-gray-700">{interest}</li>
                ))}
            </ul>
            <button className="mt-2 bg-[#8CBEB2] hover:bg-[#7aa898] text-white px-3 py-2 rounded-md">Find More</button>
        </div>
    );
}

export default InterestsSection;
