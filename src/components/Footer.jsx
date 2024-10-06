// components/Footer.jsx

import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing icons

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            {/* Container for all sections */}
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-10">
                {/* Logo Section */}
                <div className="flex flex-col items-center w-full md:w-1/3 mb-4 md:mb-0">
                    <img src="/Logos/footer.png" alt="Logo" className="w-32 mb-4" /> {/* Replace with your logo path */}
                </div>

                {/* For More Queries Section */}
                <div className="flex flex-col items-center w-full md:w-1/3 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-center">For More Queries</h3>
                    <p>Sujith Ruqmangathan</p>
                    <p>📞 7092541235</p>
                    <p>MOHAMMED THOUFIK S</p>
                    <p>📞 9092404070</p>
                </div>

                {/* Map Section */}
                <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col items-center">
                    <h1 className="text-lg font-semibold mb-2 text-center w-full">Locate Us</h1>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124421.81696604118!2d79.91733141640623!3d12.9602171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sin!4v1661789393148!5m2!1sen!2sin"
                        width="90%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map Location"
                    ></iframe>
                </div>

            </div>

            <hr className="my-4 border-gray-600" />

            {/* Copyright Section */}
            <div className="text-center">
                <p className="mb-2">© InstruVie 2024</p>
                <p>Follow Us On</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://www.instagram.com/instruvie2k24/profilecard/?igsh=OXQ1MW53Y3pnMjNu" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} />
                    </a>
                    <a href="https://www.linkedin.com/company/sairam-instrumentation-and-control-engineering/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
