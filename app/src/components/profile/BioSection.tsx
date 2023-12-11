import React, {useState, useRef} from 'react';

const BioSection: React.FC = () => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const bioRef = useRef<HTMLDivElement>(null);

    const toggleEditMode = () => {
        setEditMode(!editMode);
        if (!editMode) {
            setTimeout(() => bioRef.current?.focus(), 0);
        }
    };

    return (
        <div className="m-6 relative p-8 bg-[#E6F4F1] rounded-3xl">
            <div
                ref={bioRef}
                contentEditable={editMode}
                className="text-[#8CBEB2] cursor-text outline-none min-h-[200px]"
                suppressContentEditableWarning={true}
            >
                {bioRef.current?.innerText || "Write about yourself! Interests, hobbies, celebrity crushes, it's all welcome!"}
            </div>
            <button
                className="absolute top-3 right-5 bg-transparent text-2xl"
                onClick={toggleEditMode}
            >
                {editMode ? '✅' : '✏️'}
            </button>
        </div>
    );
}

export default BioSection;