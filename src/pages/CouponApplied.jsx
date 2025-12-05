import React from 'react';

const CouponApplied = () => {
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
                        defaultValue="LEARNPRO50"
                        readOnly
                    />
                </div>

                {/* View All Coupons */}
                <button className="mt-2 text-blue-600 font-semibold">
                    VIEW ALL COUPONS
                </button>

                {/* Applied Coupon */}
                <div className="mt-4 p-4 border-2 border-blue-200 bg-blue-50 rounded-lg">
                    <p className="font-semibold text-gray-700">
                        <span className="font-bold text-gray-800">LEARNPRO50</span> is applied
                    </p>
                    <p className="text-sm text-gray-500 mt-1">LearnPro coupon</p>
                </div>

                {/* Order Summary */}
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800">Order Summary</h3>
                    <div className="flex justify-between mt-4">
                        <p className="text-gray-600">Original Price:</p>
                        <p className="text-gray-600">₹3,099</p>
                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="text-green-600 font-semibold">Coupon applied (84% Off):</p>
                        <p className="text-green-600 font-semibold">-₹2,600</p>
                    </div>
                    <div className="flex justify-between mt-4 border-t-2 border-gray-200 pt-4">
                        <p className="text-lg font-bold text-gray-800">Total (1 course):</p>
                        <p className="text-lg font-bold text-gray-800">₹499</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                        By completing your purchase, you agree to these <a href="#" className="text-blue-600">Terms of Use</a>
                    </p>
                </div>

                {/* Pay Button */}
                <button className="w-full bg-blue-600 text-white py-4 rounded-md mt-8 font-bold text-lg flex items-center justify-center gap-2">
                    💳 Pay ₹499
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

export default CouponApplied;
