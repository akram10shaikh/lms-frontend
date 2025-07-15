import logo from '../assets/logo.png';
import avatar from '../assets/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSliders, faIdCard, faPen } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function MyProfile() {

    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [experienceStartMonth, setExperienceStartMonth] = useState("");
    const [experienceStartYear, setExperienceStartYear] = useState("");
    const [experienceEndMonth, setExperienceEndMonth] = useState("");
    const [experienceEndYear, setExperienceEndYear] = useState("");
    const [savedExperience, setSavedExperience] = useState(null);
    const [showWorkPopup, setShowWorkPopup] = useState(false);
    const [showEducationPopup, setShowEducationPopup] = useState(false);

    // Save Experience
    const saveExperience = () => {
        if (!company || !role || !experienceStartMonth || !experienceStartYear) {
            alert("Please fill all fields");
            return;
        }

        const experienceData = {
            company,
            role,
            start: `${experienceStartMonth} ${experienceStartYear}`,
            end: experienceEndMonth && experienceEndYear
                ? `${experienceEndMonth} ${experienceEndYear}`
                : "Present",
        };

        setSavedExperience(experienceData); // store in state
        setShowWorkPopup(false);            // close popup
        localStorage.setItem("experience", JSON.stringify(experienceData)); //  Save to localStorage
    };

    // Load from localStorage
    useEffect(() => {
        const storedExperience = localStorage.getItem("experience");
        if (storedExperience) {
            setSavedExperience(JSON.parse(storedExperience));
        }
    }, []);


    return (
        <section className="h-auto">

            <nav className=" relative lg:h-[80px] w-full shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] bg-white flex flex-wrap items-center px-4 py-4 lg:py-0 sm:px-6 lg:px-12 gap-6 lg:gap-11">

                <div className='flex'>
                    <img src={logo} alt="" className="h-6 w-6" />
                    <h2 className="text-lg font-medium text-blue-500">LearnPro</h2>
                </div>

                <div className="relative flex w-full lg:max-w-lg">
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="What do you like to learn ?"
                        className="w-[500px] pl-12 py-2 shadow-lg rounded-lg bg-[#F9F9F9] text-gray-800 placeholder:text-gray-500 focus:outline-none"
                    />
                    {/* 🎛️ Filter Button Inside Input */}
                    <button
                        className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-1 rounded-md hover:bg-blue-700 transition"
                        aria-label="Filter"
                    >
                        <FontAwesomeIcon icon={faSliders} />
                    </button>
                </div>

                <div className='flex gap-4'>
                    <button className='h-10 w-40 bg-blue-600 text-white rounded-md hover:bg-blue-700'>
                        My Learning
                    </button>

                    <span className='text-3xl text-gray-400 pb-2'>|</span>

                    <button className='h-10 w-40  text-blue-600 rounded-md border-2 hover:bg-gray-300'>
                        Announcements
                    </button>
                </div>

                <img src={avatar} alt="" />
            </nav>

            <div className=" lg:flex  ">

                {/* Left section */}
                <div className="h-auto  md:w-[200px] lg:w-[350px] bg-blue-50 p-6 text-sm border-r-2 border-gray">


                    {/* Title */}
                    <div className="flex items-center justify-center gap-2 pt-8">
                        <h2 className="font-bold text-xl">Personal Details</h2>
                        <FontAwesomeIcon icon={faPen} className="text-blue-600 cursor-pointer" />
                    </div>


                    {/* Avatar */}
                    <div className="flex flex-col items-center pt-6">
                        <img src={avatar} alt="Profile" className="h-20 w-20" />
                        <p className="mt-2 font-semibold">Vishal</p>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center pt-4">

                        <button className="border border-blue-500 text-blue-500 h-10 w-52 rounded-md text-sm hover:text-blue-700 hover:border-blue-700">
                            <FontAwesomeIcon icon={faIdCard} className="mr-2" />
                            Personal Details
                        </button>
                    </div>


                    {/* Progress */}
                    <p className="font-semibold pt-4 text-base">Profile Completion <span className="text-blue-600">75%</span></p>

                    <div className="bg-gray-200 h-3 rounded-full mt-4">
                        <div className="bg-blue-600 h-3 rounded-full" style={{ width: '75%' }}></div>
                    </div>


                    {/* Contact Information */}
                    <div className="pt-6 ">

                        <div className="flex justify-between items-center">

                            <p className="font-semibold text-base">Contact Information</p>
                            <FontAwesomeIcon icon={faPen} className="text-blue-600 cursor-pointer" />
                        </div>

                        <div className="flex flex-col gap-y-2 pt-4">
                            <p>johndae123@gmail.com</p>
                            <p>+91 9876543210</p>
                            <p>linkedin.com/john</p>
                            <p>github.com/john23</p>
                        </div>

                    </div>

                    {/* Work Preferences */}
                    <div className="pt-4">
                        <p className="font-semibold text-base">Work Preferences</p>
                        <p className="text-gray-600 pt-2">Add your past work experience here. If you're just starting out, you can add internships or volunteer experience instead.</p>
                        <p className="text-blue-600 cursor-pointer pt-2">+ Add work preferences</p>
                    </div>

                    {/* Additional Info */}
                    <div className='pt-4'>
                        <p className="font-semibold text-base">Additional Info</p>
                        <p className="text-gray-600 pt-2">Help recruiters get to know you better by describing what makes you a great candidate and sharing other links.</p>
                        <p className="text-blue-600 cursor-pointer pt-2">+ Add additional info</p>
                    </div>


                </div>

                {/* Right section */}
                <div className="h-[900px] w[100px] md:[700px] lg:w-[900px] lg:pt-12 lg:px-16 gap-y-6 flex flex-col">

                    {/* Experience */}
                    <div className="h-auto lg:w-[800px] rounded-2xl p-4 border-2 border-gray-400">
                        <h1 className="text-xl font-bold text-blue-600">EXPERIENCE</h1>
                        {/* <p className="font-medium text-gray-700 pt-2">WORK HISTORY</p> */}

                        {savedExperience && (   
                            <div >
                                <p className="text-base text-gray-600 ">{savedExperience.company}</p>
                                <p className="text-base text-gray-600">{savedExperience.role}</p>
                                <p className="text-base text-gray-600">
                                    {savedExperience.start} – {savedExperience.end}
                                </p>
                            </div>
                        )}

                        <p className="text-blue-600 cursor-pointer pt-1 font-medium hover:text-blue-700"
                            onClick={() => setShowWorkPopup(true)}>
                            + Add work preferences
                        </p>
                    </div>

                    {/* Popup Screen Experience */}
                    {showWorkPopup && (
                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg border border-gray-300 rounded-lg p-4 lg:p-4 w-[300px] md:w-[350px] lg:w-[450px] z-50">

                            <h2 className="text-lg font-semibold text-blue-600 text-center">Add Work Preferences</h2>
                            <p className='text-center text-gray-500'>Add your past work experience.if you're just starting out,<br />you add intership or volunteer experience instead.</p>

                            <input
                                type="text"
                                placeholder="Company Name"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className="w-full border px-3 py-2 mt-2 rounded mb-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 "
                            />
                            <input
                                type="text"
                                placeholder="Role / Position"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full border px-3 py-2 rounded mb-3 text-sm"
                            />

                            <div className="mb-4">

                                {/* Start */}
                                <div className="flex items-center mb-2">

                                    <p className="font-medium text-gray-400">Start</p>
                                    <div className="flex space-x-2 ml-4 w-full">

                                        {/* Start Month */}
                                        <select
                                            value={experienceStartMonth}
                                            onChange={(e) => setExperienceStartMonth(e.target.value)}
                                            className="w-1/2 border px-3 py-2 rounded text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-400"
                                        >
                                            <option value="">Month</option>
                                            {[
                                                "January", "February", "March", "April", "May", "June",
                                                "July", "August", "September", "October", "November", "December"
                                            ].map((month, index) => (
                                                <option key={index} value={month}>{month}</option>
                                            ))}
                                        </select>

                                        {/* Start Year */}
                                        <select
                                            value={experienceStartYear}
                                            onChange={(e) => setExperienceStartYear(e.target.value)}
                                            className="w-1/2 border px-3 py-2 rounded text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-400"
                                        >
                                            <option value="">Year</option>
                                            {Array.from({ length: 40 }, (_, i) => new Date().getFullYear() - i).map(year => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* End  */}
                                <div className="flex items-center">
                                    <p className="font-medium text-gray-400">End</p>
                                    <div className="flex space-x-2 ml-6 w-full">

                                        {/* End Month */}
                                        <select
                                            value={experienceEndMonth}
                                            onChange={(e) => setExperienceEndMonth(e.target.value)}
                                            className="w-1/2 border px-3 py-2 rounded text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-400"
                                        >
                                            <option value="">Month</option>
                                            {[
                                                "January", "February", "March", "April", "May", "June",
                                                "July", "August", "September", "October", "November", "December"
                                            ].map((month, index) => (
                                                <option key={index} value={month}>{month}</option>
                                            ))}
                                        </select>

                                        {/* End Year */}
                                        <select
                                            value={experienceEndYear}
                                            onChange={(e) => setExperienceEndYear(e.target.value)}
                                            className="w-1/2 border px-3 py-2 rounded text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-400"
                                        >
                                            <option value="">Year</option>
                                            {Array.from({ length: 40 }, (_, i) => new Date().getFullYear() - i).map(year => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-2">
                                <button
                                    onClick={() => setShowWorkPopup(false)}
                                    className="text-sm text-gray-600 hover:text-gray-800"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={saveExperience}
                                    className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">
                                    Save
                                </button>
                            </div>
                        </div>
                    )}


                    {/* Education */}
                    <div className="h-auto lg:w-[800px] rounded-2xl p-4 border-2 border-gray-400">

                        <h1 className="text-xl font-bold text-blue-600">EDUCATION</h1>
                        <p className="text-base text-gray-600 pt-1">(UTESA) Universidad technologica de Santiago</p>
                        <p className="text-base text-gray-600 pt-1">
                            Bachelor's degree in Computer Science
                        </p>
                        <p className="text-base text-gray-600 pt-1">
                            June 2018
                        </p>
                        <p className="text-blue-600 cursor-pointer pt-1 font-medium hover:text-blue-700"
                            onClick={() => setShowEducationPopup(true)}>
                            + Add Education
                        </p>
                    </div>

                    {/* Popup Screen Education */}
                    {showEducationPopup && (
                        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg border border-gray-300 rounded-lg p-4 lg:p-4 w-[300px] md:w-[350px] lg:w-[450px] z-50">

                            <h2 className="text-lg font-semibold text-blue-600 text-center">Add Education</h2>
                            <p className='text-center text-gray-500'>Add your educational background to let employers <br /> know where you studied or are currently studying.<br /> Even if you didn’t finish, it’s important to include it here.<br /> And if you’ve earned a college degree, you don’t need to add your high school/GED. All fields are optional.</p>

                            <input
                                type="text"
                                placeholder="Name of the Institute"
                                className="w-full border px-3 py-2 mt-2 rounded mb-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 "
                            />
                            <input
                                type="text"
                                placeholder="Degree"
                                className="w-full border px-3 py-2 rounded mb-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 "
                            />

                            {/* Month & Year Selection */}
                            <div className="mb-4">

                                {/* Start */}
                                <div className="flex items-center mb-2">

                                    <p className="font-medium text-gray-400">Start</p>
                                    <div className="flex space-x-2 ml-4 w-full">

                                        {/* Start Month */}
                                        <select
                                            className="w-1/2 border px-3 py-2 rounded text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-400"
                                        >
                                            <option value="">Month</option>
                                            {[
                                                "January", "February", "March", "April", "May", "June",
                                                "July", "August", "September", "October", "November", "December"
                                            ].map((month, index) => (
                                                <option key={index} value={month}>{month}</option>
                                            ))}
                                        </select>

                                        {/* Start Year */}
                                        <select
                                            className="w-1/2 border px-3 py-2 rounded text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-400"
                                        >
                                            <option value="">Year</option>
                                            {Array.from({ length: 40 }, (_, i) => new Date().getFullYear() - i).map(year => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* End  */}
                                <div className="flex items-center">
                                    <p className="font-medium text-gray-400">End</p>
                                    <div className="flex space-x-2 ml-6 w-full">

                                        {/* End Month */}
                                        <select
                                            className="w-1/2 border px-3 py-2 rounded text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-400"
                                        >
                                            <option value="">Month</option>
                                            {[
                                                "January", "February", "March", "April", "May", "June",
                                                "July", "August", "September", "October", "November", "December"
                                            ].map((month, index) => (
                                                <option key={index} value={month}>{month}</option>
                                            ))}
                                        </select>

                                        {/* End Year */}
                                        <select
                                            className="w-1/2 border px-3 py-2 rounded text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-400"
                                        >
                                            <option value="">Year</option>
                                            {Array.from({ length: 40 }, (_, i) => new Date().getFullYear() - i).map(year => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div className="flex justify-end space-x-2">
                                <button
                                    onClick={() => setShowEducationPopup(false)}
                                    className="text-sm text-gray-600 hover:text-gray-800"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={() => setShowEducationPopup(false)}
                                    className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">
                                    Save
                                </button>
                            </div>
                        </div>
                    )}



                    {/* Cources */}
                    <div className="h-[180px] w-[800px]  rounded-2xl p-6 border-2 border-gray-400">
                        <h1 className="text-xl font-bold">EXPERIENCE</h1>
                        <p className="font-medium text-gray-700 pt-2">WORK HISTORY</p>
                        <p className="text-sm text-gray-600 pt-2">
                            Add your past work experience here. If you're just starting out, you can add internship or volunteer experience instead.
                        </p>
                        <p className="text-blue-600 cursor-pointer pt-2 font-medium">
                            + Add work preferences
                        </p>
                    </div>

                    {/* Badges & Achievement */}
                    <div className="h-[180px] w-[800px]  rounded-2xl p-6 border-2 border-gray-400">
                        <h1 className="text-xl font-bold">EXPERIENCE</h1>
                        <p className="font-medium text-gray-700 pt-2">WORK HISTORY</p>
                        <p className="text-sm text-gray-600 pt-2">
                            Add your past work experience here. If you're just starting out, you can add internship or volunteer experience instead.
                        </p>
                        <p className="text-blue-600 cursor-pointer pt-2 font-medium">
                            + Add work preferences
                        </p>
                    </div>


                </div>
            </div>

        </section>
    );
}

export default MyProfile;
