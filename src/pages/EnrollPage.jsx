import { useState, useEffect } from "react";
function EnrollPage({ showLoadingMessage }) {

    const originalPrice = 3500;
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);
    const [applied, setApplied] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showCoupons, setShowCoupons] = useState(false);

    const handleApply = () => {
        if (coupon.trim().toUpperCase() === "LEARNPRO50") {
            setDiscount(500); // For example, ₹500 off
            setApplied(true);
        } else {
            setDiscount(0);
            setApplied(false);
            alert("Invalid coupon code!");
        }
    };

    const totalPrice = originalPrice - discount;

    const handleViewAllCoupons = () => {
        setShowCoupons(!showCoupons);

        // alert("Showing all available coupons!");
    };

    const handlePaySubmit = () => {
        setIsLoading(true);
        console.log("Payment done!");

        setTimeout(() => {
            setIsLoading(false);
            alert("Payment successful!"); // optional
        }, 1000);
    };


    useEffect(() => {
        if (showLoadingMessage) {
            setIsLoading(true);

            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showLoadingMessage]);

    return (
        <section className="flex justify-center ">

            <div className=" h-[850px] w-[480px] lg:w-[700px] bg-slate-100 rounded-lg">

                <div className="sm:h-[70px] lg:py-4 bg-blue-500 text-center text-2xl font-medium text-white">
                    Enroll in this 6-course Professional Certificate

                </div>

                <div className="px-10 md:px-16  lg:px-20 ">

                    <p className="pt-6 font-medium">
                        Python Programming Fundamentals is a 6-course Professional Certificate.
                    </p>

                    <h1 className="text-xl font-medium pt-6">This Professional Certificate include:</h1>

                    <p> <span className="mr-2">✅</span>Unlimited access to all 6 courses</p>
                    <p> <span className="mr-2">✅</span>14 days refund period </p>
                    <p> <span className="mr-2">✅</span>EMI payment options</p>
                    <p> <span className="mr-2">✅</span>Shareable certificate of completion from Microsoft</p>

                    <h1 className="text-xl font-medium pt-6">All-in-One Lerning Platform:</h1>

                    <p> <span className="mr-2">✅</span>Interactive Live Classes</p>
                    <p> <span className="mr-2">✅</span>Recorded Classes with practical application</p>
                    <p> <span className="mr-2">✅</span>Curated Assignment and Quiz</p>


                    <div className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] pt-6">
                        <input
                            type="text"
                            placeholder="Enter coupon code here"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            className="border px-3 py-2 w-[240px] sm:w-[300px] md:w-[400px] lg:w-[500px]"

                        />

                        <button
                            type="button"
                            onClick={handleApply}
                            className="absolute text-blue-600 font-semibold hover:underline px-3 py-2 border bg-white border-l-0"
                        >
                            APPLY
                        </button>

                        {applied && (
                            <p className="mt-2 text-green-600 font-medium">
                                Coupon Applied! ₹500 discount has been added.
                            </p>
                        )}
                        <br />

                        <span
                            onClick={handleViewAllCoupons}
                            className="text-blue-600 cursor-pointer hover:text-blue-800"
                        >
                            View All Coupons
                        </span>

                        {showCoupons && (
                            <div className="mt-4 p-4 border rounded bg-white shadow">

                                <h4 className="font-semibold mb-2">Available Coupons:</h4>

                                <ul className="list-disc list-inside text-sm">
                                    <li><span className="font-mono">LEARNPRO50</span> — ₹500 off</li>
                                    <li><span className="font-mono">WELCOME100</span> — ₹100 off</li>
                                    <li><span className="font-mono">STUDENT20</span> — 20% off</li>
                                </ul>
                            </div>
                        )}

                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

                        <div className="flex justify-between mb-2">
                            <p>Original Price:</p>
                            <p>₹3,099</p>
                        </div>

                        <hr className="border-gray-300 mb-2" />

                        <div className="flex justify-between mb-4">
                            <p>Total (1 course):</p>
                            <p className="font-semibold">₹3,099</p>
                        </div>

                        <p className="text-sm">
                            By completing your purchase, you agree to these{" "}
                            <a href="#" className="text-blue-600 font-semibold">
                                Terms of Use
                            </a>
                        </p>
                    </div>


                    <button className="w-[300px] sm:w-[300px] md:w-[400px] lg:w-[550px] bg-blue-600 hover:bg-blue-800 text-white py-3 rounded mt-6" onClick={handlePaySubmit}>
                        Pay ₹{totalPrice}
                    </button>

                    {isLoading && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white p-8 rounded-lg text-center">

                                <div className="flex flex-col items-center">
                                    <img
                                        src="https://i.gifer.com/ZZ5H.gif"
                                        alt="Loading..."
                                        className="w-12 h-12 mb-4"
                                    />
                                    <p className="text-black font-medium text-center">
                                        Submitting your details,<br /> please wait a moment...
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}


                    <p className="text-lg mt-4 text-black font-semibold text-center">
                        30-Day Money-Back Guarantee.
                    </p>
                    <p className="text-sm mt-4 text-black font-semibold text-center"> Not satisfied? Get a full refund within 30
                        days. <br />Simple and Straightforward</p>
                </div>
            </div>
        </section >
    );
}
export default EnrollPage
