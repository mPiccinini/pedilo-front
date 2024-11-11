import React, { ReactNode } from 'react';

interface PhoneScreenProps {
    children: ReactNode;
}

const PhoneScreen: React.FC<PhoneScreenProps> = ({ children }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="w-[360px] h-[640px] bg-white rounded-[30px] shadow-lg overflow-y-auto border border-gray-300">
                {children}
            </div>
        </div>
    );
};

export default PhoneScreen;