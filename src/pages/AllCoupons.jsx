import React, { useState } from 'react';

const Allcoupons = () => {
    const [selectedCoupon, setSelectedCoupon] = useState(null);

    const coupons = [
        {
            code: 'LEARNPRO45',
            description: 'Use this coupon code at checkout to get ₹567 off your first course purchase. Start learning and save big today!',
        },
        {
            code: 'LEARNPRO79',
            description: 'Apply this coupon code to enjoy ₹799 off as a special welcome gift on your first course!',
        },
    ];

    const handleSelectCoupon = (couponCode) => {
        setSelectedCoupon(couponCode);
    };

    return (
        <div className="my-12">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 border border-gray-200">
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

                {/* Coupon Input */}
                <div className="mt-8">
                    <input
                        type="text"
                        placeholder="Enter coupon code here"
                        className="w-full p-3 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Available Coupons */}
                <div className="mt-6 space-y-4">
                    {coupons.map((coupon, index) => (
                        <div
                            key={index}
                            className={`p-4 border-2 rounded-lg ${selectedCoupon === coupon.code ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                        >
                            <div className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    name="coupon"
                                    checked={selectedCoupon === coupon.code}
                                    onChange={() => handleSelectCoupon(coupon.code)}
                                    className="form-radio h-5 w-5 text-blue-600"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800">{coupon.code}</p>
                                    <p className="text-sm text-gray-600 mt-1">{coupon.description}</p>
                                    <a href="#" className="text-blue-600 text-sm mt-2 block">Terms & Conditions</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

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

export default Allcoupons;
