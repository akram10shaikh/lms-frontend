import logo from '../assets/logo.png';
import avatar from '../assets/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSliders, faIdCard, faPen } from '@fortawesome/free-solid-svg-icons';

function MyProfile() {
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
                    <button className='h-10 w-40 bg-blue-600 text-white rounded-md'>
                        My Learning
                    </button>

                    <span className='text-3xl text-gray-400 pb-2'>|</span>

                    <button className='h-10 w-40  text-blue-600 rounded-md border-2'>
                        Announcements
                    </button>
                </div>

                <img src={avatar} alt="" />
            </nav>

            <div className=" flex ">

                {/* Left section */}
                <div className="h-[900px] w-[400px] md:w-[200px] lg:w-[300px] bg-white p-6 text-sm border-r-2 border-gray">


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
                        <button className="border border-blue-500 text-blue-500 h-10 w-52 rounded-md text-sm">
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
                <div className="h-[900px] w-[965px] bg-slate-500 pt-12 items-center gap-y-8 flex flex-col">

                    {/* Experience */}
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

                    {/* Education */}
                    <div className="h-[190px] w-[800px]  rounded-2xl p-6 border-2 border-gray-400">
                        <h1 className="text-xl font-bold">EDUCATION</h1>
                        <p className="font-medium text-black pt-2">(UTESA) Universidad technologica de Santiago</p>
                        <p className="text-sm text-gray-600 pt-2">
                            Bachelor's degree in Computer Science , graduated June 2022
                        </p>
                        <p className="text-sm text-gray-600 pt-2">
                            June 2018
                        </p>
                        <p className="text-blue-600 cursor-pointer pt-2 font-medium">
                            + Add work preferences
                        </p>
                    </div>

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
