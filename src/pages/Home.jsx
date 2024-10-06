import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card'; // Import the Card component
import EventCard from '../components/EventCard';
import StaffCard from '../components/StaffCard';
import StudentCard from '../components/StudentCard';
import Footer from '../components/Footer';
import styles from "./Home.module.css"
function Home() {
    const students = [
        {
            photo: '/Students/thoufik.png', // Replace with the actual photo path
            name: 'Mohammed Thoufik S',
            designation: 'Student Co-ordinator',
        },
        {
            photo: '/Students/SUJITH.jpg', // Replace with the actual photo path
            name: 'Sujith Ruqmangathan',
            designation: 'Event Co-ordinator',
        },
        {
            photo: '/Students/karthi.png', // Replace with the actual photo path
            name: 'Karthik Kumar B',
            designation: 'Secretary',
        },
        {
            photo: '/Students/kalyani.png', // Replace with the actual photo path
            name: 'Kalyani',
            designation: 'Treasurer',
        },
    ];
    const staffMembers = [
        {
            photo: '/Staff/ceo.png', // Replace with the actual photo path
            name: 'Dr Sai Prakash Leo Muthu',
            designation: 'CEO',
            position: "Sairam Institutions"
        },
        {
            photo: '/Staff/principal.jpeg', // Replace with the actual photo path
            name: 'Dr J Raja',
            designation: 'Principal',
        },
        {
            photo: '/Staff/hod.jpeg', // Replace with the actual photo path
            name: 'Mrs T Mangayarkarasi',
            designation: 'HOD - EI&CE',
        },
        ,
        {
            photo: '/Staff/uma.jpeg', // Replace with the actual photo path
            name: 'Mrs B Umamaheswari',
            designation: 'Assistant Professor-EI&CE',
        },
    ];
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const videoRef = useRef(null);

    useEffect(() => {
        const symposiumDate = new Date('2024-10-25T00:00:00').getTime();

        const countdown = setInterval(() => {
            const now = new Date().getTime();
            const distance = symposiumDate - now;

            if (distance < 0) {
                clearInterval(countdown);
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <>
            <Navbar />

            {/* Home section */}
            <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-4 overflow-x-hidden"> {/* Added overflow-x-hidden */}
                {/* Top Left Logo */}
                <div className="absolute top-7 left-3 p-2">
                    <img src="/Logos/sai.png" alt="Left Logo" className="w-20 h-auto" />
                </div>

                {/* Top Right Logo */}
                <div className="absolute top-3 right-3 p-2">
                    <img src="/Logos/footer.png" alt="Right Logo" className="w-20 h-auto" />
                </div>

                <h1 className={`text-3xl font-bold ${styles.font}`}>Sri Sairam Engineering College</h1>
                <h3 className={`text-xl mt-2 ${styles.font}`}>presents</h3>
                <img src="/Logos/herosection.png" alt="Instruvie Logo" className="w-auto h-48 mt-4" />

                {/* Countdown Timer */}
                <div className="mt-6 text-xl font-semibold">
                    <p className={`${styles.font}`}>Symposium starts in:</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <div className="flex flex-col items-center">
                            <span className={`text-4xl ${styles.font}`}>{timeLeft.days}</span>
                            <span className={`${styles.font}`}>Days</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className={`text-4xl ${styles.font} `}>{timeLeft.hours}</span>
                            <span className={`${styles.font}`}>Hours</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className={`text-4xl ${styles.font} `}>{timeLeft.minutes}</span>
                            <span className={`${styles.font}`}>Minutes</span>
                        </div>
                        {/* Display seconds only on medium screens and above */}
                        <div className="hidden md:flex flex-col items-center">
                            <span className={`text-4xl ${styles.font} `}>{timeLeft.seconds}</span>
                            <span className={`${styles.font}`}>Seconds</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Content Section */}
            <section id='about' className="flex flex-col md:flex-row items-center justify-center md:justify-between p-4 overflow-x-hidden"> {/* Added overflow-x-hidden */}
                {/* Left Image */}
                <div className="md:w-1/2 w-full flex justify-center mb-4 md:mb-0">
                    <img
                        src="Background/group.jpg"
                        alt="Instruvie2k24"
                        className="w-full h-auto max-w-sm"
                    />
                </div>

                {/* Right Text Content */}
                <div className="md:w-1/2 w-full text-white">
                    <h2 className="text-3xl font-bold mb-4">About Instruvie2k24</h2>
                    <p className={`text-lg text-justify leading-relaxed ${styles.font}`}>
                        Instruvie2k24 is an annual symposium organized by the Department of
                        Electronic Instrumentation and Control Engineering at Sri Sairam
                        Engineering College. It is an event that brings together the brightest
                        minds in the industry to showcase their skills, share knowledge, and
                        compete in various technical events. Join us for an experience of
                        innovation, collaboration, and learning.
                    </p>
                </div>
            </section>

            {/* Promo Video Section */}
            <section className="relative w-full flex flex-col items-center p-4 overflow-x-hidden">
                {/* Title */}
                <h2 className="text-white text-4xl font-bold mb-4 text-left w-full pl-2">
                    Promo Video
                </h2>

                {/* Video */}
                <video
                    ref={videoRef}
                    className="w-full h-auto max-w-[90%] sm:max-w-[80%] aspect-[16/9] object-cover"
                >
                    <source src="/Background/ICE COMING SOON.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Play/Pause Button Container */}
                <div className="w-full flex justify-center mt-4 sm:absolute sm:bottom-10 sm:left-1/2 sm:transform sm:-translate-x-1/2">
                    <button
                        onClick={togglePlayPause}
                        className="bg-gray-800 text-white py-3 px-6 rounded-lg text-lg sm:text-base"
                    >
                        {videoRef.current && !videoRef.current.paused ? 'Pause' : 'Play'}
                    </button>
                </div>
            </section>



            {/* Cards Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 overflow-x-hidden"> {/* Added overflow-x-hidden */}
                <Card
                    title="Our Mission"
                    content="To Provide excellence in the field of Instrumentation and Control Engineering by enhancing the students Knowledge in both theoretical and applied foundations."
                />
                <Card
                    title="Our Vision"
                    content="To Pioneer in Providing Technical Education and to develop competent Engineers who are technically proficient in the field of Instrumentation and Control Engineering."
                />
                <Card
                    title="Our Achievements"
                    content="Our students have won numerous accolades in national and international competitions in the field of engineering and technology."
                />
            </section>

            {/* Events Section */}
            <section id='events' className="flex flex-col p-4 overflow-x-hidden"> {/* Added overflow-x-hidden */}
                <h2 className="text-white text-4xl font-bold mb-8 text-left w-full pl-4">EVENTS</h2> {/* Left-aligned heading */}
                <h2 className="text-white text-3xl font-bold mb-8 text-center w-full pl-4">TECHINICAL EVENTS</h2> {/* Left-aligned heading */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-28 mx-auto"> {/* Center the grid */}
                    <EventCard
                        logo="/Logos/pitchfest.png" // Path to your logo image
                        onRegister={() => window.open('https://docs.google.com/forms/d/1WXAOvZISR5xaud_kNmRyxzpSLWNSiLT6OxcL4ADyHe8/edit?usp=drivesdk', '_blank')}
                    />

                    <EventCard
                        logo="/Logos/insightignite1.png" // Path to your logo image
                        onRegister={() => window.open('https://docs.google.com/forms/d/1zyey524UUjV7lglLVDiav1cFmLdzP8K5hCwaU--ISnE/edit?usp=drivesdk', '_blank')}
                    />
                    <EventCard
                        logo="/Logos/Mastermind.png" // Path to your logo image
                        onRegister={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSepeyeFKHOEpkL4T0EanYm7m5ZH9QwuQP6hoh4i_M9y480EsQ/viewform?usp=sf_link', '_blank')}
                    />
                    <EventCard
                        logo="/Logos/bargainbash.png" // Path to your logo image
                        onRegister={() => window.open('https://docs.google.com/forms/d/1Esb4b5tPJfR7OR_aGE58YYeaIfz3mjGdmwNBW4GhO58/edit?usp=drivesdk', '_blank')}
                    />
                    <EventCard
                        logo="/Logos/musicalmaestro.png" // Path to your logo image
                        onRegister={() => window.open('https://docs.google.com/forms/d/1Q6Nxyx2eVi_U2M4HQMxDkDhge4dg2akNivAvbCpj8Gs/edit?usp=drivesdk', '_blank')}
                    />
                    <EventCard
                        logo="/Logos/unvieldshutter.png" // Path to your logo image
                        onRegister={() => window.open('https://docs.google.com/forms/d/1rOMYM3Q8mvs3C6stVTv1irexNINueEEZF3nM7QfJkb8/edit?usp=drivesdk', '_blank')}
                    />
                </div>
                <h2 className="text-white text-3xl font-bold mt-8 text-center w-full pl-4">WORKSHOP</h2> {/* Left-aligned heading */}
                <div className="flex justify-center mt-8 mx-auto"> {/* Center the grid */}
                    <EventCard
                        logo="/Logos/PITCHFEST.png" // Path to your logo image
                        onRegister={() => window.open('https://forms.gle/4WnDwqVeSj2WREXZA', '_blank')}
                    />
                </div>
            </section>
            <section className="flex flex-col items-center p-4">
                <h2 className="text-3xl text-white font-bold text-center mb-6">DISTINGUISHED PATRONS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {staffMembers.map((staff, index) => (
                        <StaffCard
                            key={index}
                            photo={staff.photo}
                            name={staff.name}
                            designation={staff.designation}
                            position={staff.position}
                        />
                    ))}
                </div>
            </section>
            <section className="flex flex-col items-center p-4">
                <h2 className="text-3xl font-bold text-white text-center mb-6">ORGANIZING COMMITTEE</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {students.map((student, index) => (
                        <StudentCard
                            key={index}
                            photo={student.photo}
                            name={student.name}
                            designation={student.designation} // Only designation displayed
                        />
                    ))}
                </div>
            </section>

            <section id='contact'>
                <Footer />
            </section>
        </>
    );
}

export default Home;
