import React, { useState } from 'react';

const Applycoupon = () => {
    const [couponCode, setCouponCode] = useState('LEARNPRO50');
    const [isLoading, setIsLoading] = useState(false);

    const handleApplyCoupon = () => {
        setIsLoading(true);
        // Simulate API call or processing delay
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    };

    return (
        <div className="my-12">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 border border-gray-200 relative">
                {/* Loading Overlay */}
                {isLoading && (
                    <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center rounded-lg z-10">
                        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent border-solid rounded-full animate-spin mb-4"></div>
                        <p className="text-gray-800 font-semibold">Submitting your details, please wait a moment...</p>
                    </div>
                )}

                {/* Header */}
                <div className="bg-blue-600 text-white p-6 rounded-t-lg">
                    <h2 className="text-2xl font-bold">
                        Enroll in this 6-course Professional Certificate
                    </h2>
                </div>

                {/* Description */}
                <div className="mt-8">
                    <p className="text-lg font-semibold text-gray-800">
                        Python Programming Fundamentals is a 6-course Professional Certificate.
                    </p>
                    <p className="text-lg font-semibold text-gray-800 mt-4">
                        This Professional Certificate includes:
                    </p>
                    <ul className="list-disc pl-6 mt-4 text-gray-600 space-y-2">
                        <li>Unlimited access to all 6 courses</li>
                        <li>14 day refund period</li>
                        <li>EMI payment options</li>
                        <li>Shareable certificate of completion from Microsoft</li>
                    </ul>
                    <p className="text-lg font-semibold text-gray-800 mt-6">
                        All-in-One Learning Platform:
                    </p>
                    <ul className="list-disc pl-6 mt-4 text-gray-600 space-y-2">
                        <li>Interactive Live Classes</li>
                        <li>Recorded Classes with practical application</li>
                        <li>Curated Assignments and Quiz</li>
                    </ul>
                </div>

                {/* Coupon Section */}
                <div className="mt-8 flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="LEARNPRO50"
                        className="w-full p-3 border border-gray-300 rounded-md"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button
                        className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold"
                        onClick={handleApplyCoupon}
                    >
                        APPLY
                    </button>
                </div>

                <button className="mt-4 text-blue-600 font-semibold">
                    VIEW ALL COUPONS
                </button>

                {/* Order Summary */}
                <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-800">Order Summary</h3>
                    <div className="flex justify-between mt-4">
                        <p className="text-gray-600">Original Price:</p>
                        <p className="text-gray-600">₹3,099</p>
                    </div>
                    <div className="flex justify-between mt-4">
                        <p className="text-gray-600">Total (1 course):</p>
                        <p className="text-gray-600">₹3,099</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                        By completing your purchase, you agree to these <a href="#" className="text-blue-600">Terms of Use</a>
                    </p>
                </div>

                {/* Pay Button */}
                <button className="w-full bg-blue-600 text-white py-4 rounded-md mt-8 font-bold text-lg flex items-center justify-center gap-2">
                    💳 Pay ₹3,099
                </button>

                {/* Money Back Guarantee */}
                <div className="mt-8 text-center">
                    <h3 className="text-xl font-bold text-gray-800">30 - Day Money - Back Guarantee</h3>
                    <p className="text-gray-600 mt-4">
                        Not satisfied? Get a full refund within 30 days.<br />
                        Simple and straightforward!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Applycoupon;
