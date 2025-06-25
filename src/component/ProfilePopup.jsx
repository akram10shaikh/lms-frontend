import { useNavigate } from 'react-router-dom';

function ProfilePopup({ isOpen, onClose }) {
    const navigate = useNavigate();
    if (!isOpen) return null;

    const handleSubmit = () => {
        // You can add validation or API call here if needed.
        console.log("Submitting profile...");

        navigate('/enroll');
        // For now, just close the popup:
        onClose();
    };

    return (
        <section className="flex justify-center">

            <div className=" h-[550px] md:w-[80%] lg:w-[650px] bg-slate-100 rounded-lg">

                <div className="h-[60px] bg-blue-500 text-center text-2xl font-medium text-white py-3 rounded-t-lg">
                    Complete Your Profile

                </div>

                <div className="lg:px-20 md:px-12 sm:px-8 px-6">

                    <p className="text-center text-black text-lg">
                        Enter your details below to enroll in the course and kick-start your learning journey.
                    </p>

                    {/* Full Name */}
                    <label className="block mb-2 pt-2 text-black">Enter your full name for the certificate</label>
                    <input
                        className="w-full border border-gray-300 p-2 mb-4 rounded"
                        placeholder="Enter your full name"
                    />

                    {/* Phone Number */}
                    <label className="block mb-2 text-gray-700">Enter your phone number for updates and support.</label>
                    <div className="flex mb-4">
                        <select className="border border-gray-300 p-2 rounded-l">
                            <option>+91</option>
                            {/* Add more country codes if needed */}
                        </select>
                        <input
                            className="w-full border border-gray-300 p-2 rounded-r"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    {/* Email */}
                    <label className="block mb-2 text-black">Enter your email to receive further details.</label>
                    <input
                        className="w-full border border-gray-300 p-2 mb-4 rounded"
                        placeholder="Enter your email"
                    />

                    {/* DOB */}
                    <label className="block mb-2 text-black">Enter your date of birth for verification purposes</label>
                    <input
                        className="w-full border border-gray-300 p-2 mb-6 rounded"
                        placeholder="Enter your date of birth"
                    />

                    {/* Submit Button */}
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" onClick={handleSubmit}>
                        Submit and Continue
                    </button>
                </div>
            </div>


        </section >
    );
}
export default ProfilePopup
