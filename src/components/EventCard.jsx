import React from 'react';

const EventCard = ({ logo, onRegister }) => {
    return (
        <div className="bg-gray-800 w-72 text-white rounded-lg p-6 flex flex-col items-center">
            {logo && <img src={logo} alt="Event Logo" className="w-44 h-40 mb-4" />} {/* Display logo */}
            <button
                onClick={onRegister}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
            >
                Register
            </button>
        </div>
    );
};

export default EventCard;
