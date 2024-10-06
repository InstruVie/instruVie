// components/StaffCard.jsx

import React from 'react';

const StaffCard = ({ photo, name, designation, position }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center max-w-xs">
            <img
                src={photo}
                alt={`${name}'s photo`}
                className="w-32 h-32 rounded-full mb-4 object-cover" // Circular image
            />
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-lg text-gray-700">{designation}</p>
            <p className="text-gray-500">{position ? "Sairam Institutions" : "Sri Sairam Engineering College"}</p>
        </div>
    );
};

export default StaffCard;
