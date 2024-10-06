// components/StudentCard.jsx

import React from 'react';

const StudentCard = ({ photo, name, designation }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center max-w-xs">
            <img
                src={photo}
                alt={`${name}'s photo`}
                className="w-32 h-32 rounded-full mb-4 object-cover" // Circular image
            />
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-lg text-gray-700">{designation}</p> {/* Only designation displayed */}
        </div>
    );
};

export default StudentCard;
