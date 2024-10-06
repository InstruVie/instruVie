import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Lock the background scroll when the mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    // Function to scroll to a section
    const scrollToSection = (event, id) => {
        event.preventDefault(); // Prevent the default anchor behavior
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scrolling
        }
        setIsOpen(false); // Close mobile menu after selection
    };

    return (
        <div>
            <nav className="absolute top-10 lg:top-12 right-10  text-white md:h-16 z-50">

                {/* Mobile Navbar Button */}
                <div className="flex  justify-between items-center p-4">
                    <button
                        className="text-3xl focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Fullscreen Menu */}
                <div
                    className={`fixed inset-0 bg-gray-800 text-white flex flex-col justify-start items-start p-8 space-y-8 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        }  z-50`}
                >
                    <button
                        className="text-3xl self-end focus:outline-none"
                        onClick={() => setIsOpen(false)}
                    >
                        ✕
                    </button>
                    <a className="text-2xl hover:text-gray-400" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
                    <a className="text-2xl hover:text-gray-400" onClick={(e) => scrollToSection(e, 'about')}>About</a>
                    <a className="text-2xl hover:text-gray-400" onClick={(e) => scrollToSection(e, 'events')}>Event</a>
                    <a className="text-2xl hover:text-gray-400" onClick={(e) => scrollToSection(e, 'contact')}>Contact Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
