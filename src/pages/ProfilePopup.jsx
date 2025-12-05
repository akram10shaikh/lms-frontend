import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProfilePopup({ isOpen, onClose }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        dateOfBirth: '',
    });
    const [errors, setErrors] = useState({});

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = 'Full name is required';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Submitting profile:", formData);
            navigate('/CouponApplied');
            onClose();
        }
    };

    return (
        <section className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50">
            <div className="h-[600px] md:w-[80%] lg:w-[650px] bg-slate-100 rounded-lg shadow-xl overflow-y-auto">
                <div className="h-[60px] bg-blue-500 text-center text-2xl font-medium text-white py-3 rounded-t-lg">
                    Complete Your Profile
                </div>
                <form onSubmit={handleSubmit} className="lg:px-20 md:px-12 sm:px-8 px-6 py-4">
                    <p className="text-center text-black text-lg mb-6">
                        Enter your details below to enroll in the course and kick-start your learning journey.
                    </p>
                    {/* Full Name */}
                    <label className="block mb-2 pt-2 text-black">Enter your full name for the certificate</label>
                    <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 mb-4 rounded"
                        placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mb-2">{errors.fullName}</p>}

                    {/* Phone Number */}
                    <label className="block mb-2 text-gray-700">Enter your phone number for updates and support.</label>
                    <div className="flex mb-4">
                        <select className="border border-gray-300 p-2 rounded-l">
                            <option>+91</option>
                        </select>
                        <input
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-r"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    {errors.phoneNumber && <p className="text-red-500 text-sm mb-2">{errors.phoneNumber}</p>}

                    {/* Email */}
                    <label className="block mb-2 text-black">Enter your email to receive further details.</label>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 mb-4 rounded"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

                    {/* DOB */}
                    <label className="block mb-2 text-black">Enter your date of birth for verification purposes</label>
                    <input
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 mb-6 rounded"
                        placeholder="Enter your date of birth"
                    />
                    {errors.dateOfBirth && <p className="text-red-500 text-sm mb-2">{errors.dateOfBirth}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Submit and Continue
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ProfilePopup;
