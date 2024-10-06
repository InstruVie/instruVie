// components/Card.jsx

import React from 'react';
import styles from "../pages/Home.module.css"
const Card = ({ title, content }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-start">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className={`text-gray-700 ${styles.font}`}>{content}</p>
        </div>
    );
};

export default Card;
