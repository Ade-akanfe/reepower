"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "./Header";
import BuyerAuth from "./buyer-page";
import SellerAuth from "./seller-page";

export default function SignUpView() {
  const pathname = usePathname();
  const [isLogin, setIsLogin] = useState(pathname !== "/signup");
  const [userType, setUserType] = useState<"seller" | "buyer" | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigation = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phone: "",
    username: "",
    state: "",
    lga: "",
    address: "",
    businessName: "",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="flex relative max-h-[12vh] h-auto w-full">
        <Header bgClass="bg-[#E4E4E4EB]" />
      </div>
      <div className="flex flex-col lg:flex-row h-[88vh]">
        {/* Left Section - Image with Overlay */}
        <div className="lg:w-1/2 relative h-full">
          <Image
            src="/images/auth-image.png"
            alt="ReePower Auth"
            height={1200}
            width={1200}
            className="object-cover h-full w-full"
            priority
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 lg:p-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 lg:mb-4 font-parkinsans">
              Powering the Future of Informal Waste Recycling
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 font-parkinsans">
              Reepower is your all-in-one platform for buying and selling
              recyclable materials across Nigeria&apos;s informal waste market.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col">
          {/* Form Content */}
          <div className="flex-1 flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-2xl">
              {currentPage !== 1 && (
                <div
                  className="text-black/60 mb-6 cursor-pointer text-lg"
                  onClick={() => {
                    setCurrentPage((prev) => prev - 1);
                    // setUserType(null);
                  }}
                >
                  {""}
                  <span className="text-black mr-2">{"<"}</span>Back
                </div>
              )}
              {/* Sign In As Section */}
              <div className="mb-8">
                <div className="w-full flex justify-between items-center mb-3">
                  <h1 className="text-3xl xl:text-4xl font-bold text-[#000000]  font-parkinsans">
                    {currentPage !== 3
                      ? currentPage === 4
                        ? "Business Information"
                        : "Create an Account"
                      : "What are you registering as"}
                  </h1>
                  <span className="text-lg px-2 py-2 text-black/40 bg-[#41C44D1F] font-semibold">
                    Step {currentPage} of 4
                  </span>
                </div>

                <p className="text-gray-600 font-parkinsans mb-6">
                  Reepower is your all-in-one platform for buying and selling
                  recyclable materials across Nigeria&apos;s.{" "}
                  <button
                    onClick={() => navigation.push("/auth")}
                    className=" text-[#14841E] hover:text-[#144E42] font-semibold underline cursor-pointer"
                  >
                    Sign in
                  </button>
                </p>
              </div>

              {currentPage === 1 && (
                <form
                  id="auth-form"
                  onSubmit={() => {}}
                  className="space-y-4 animate-fade-in"
                >
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-gray-700 mb-2 font-parkinsans"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:border-[#A8E959] focus:ring-2 focus:ring-[#A8E959]/20 outline-none transition-all font-parkinsans"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2 font-parkinsans"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:border-[#A8E959] focus:ring-2 focus:ring-[#A8E959]/20 outline-none transition-all font-parkinsans"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2 font-parkinsans"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 text-black rounded-lg border border-gray-300 focus:border-[#A8E959] focus:ring-2 focus:ring-[#A8E959]/20 outline-none transition-all font-parkinsans"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={() => {
                      setCurrentPage(2);
                    }}
                    disabled={
                      !formData.email || !formData.fullName || !formData.phone
                    }
                    className="w-full py-3 rounded-lg bg-[#A8E959] text-[#144E42] font-parkinsans font-semibold hover:bg-[#A8E959] transition-colors mt-6 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </form>
              )}

              {currentPage === 2 && (
                <form
                  id="auth-form"
                  onSubmit={() => {}}
                  className="space-y-4 animate-fade-in"
                >
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-gray-700 mb-2 font-parkinsans"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:border-[#A8E959] focus:ring-2 focus:ring-[#A8E959]/20 outline-none transition-all font-parkinsans"
                      placeholder="Enter Username"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-gray-700 mb-2 font-parkinsans"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:border-[#A8E959] focus:ring-2 focus:ring-[#A8E959]/20 outline-none transition-all font-parkinsans text-black"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-semibold text-gray-700 mb-2 font-parkinsans"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:border-[#A8E959] focus:ring-2 focus:ring-[#A8E959]/20 outline-none transition-all font-parkinsans text-black"
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    onClick={() => {
                      setCurrentPage(3);
                    }}
                    disabled={
                      !formData.username ||
                      !formData.password ||
                      !formData.confirmPassword
                    }
                    className="w-full py-3 rounded-lg bg-[#A8E959] text-[#144E42] font-parkinsans font-semibold hover:bg-[#A8E959] transition-colors mt-6 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </form>
              )}

              {currentPage === 3 && (
                <div className="mb-8">
                  <div className="space-y-3 mb-6">
                    <label
                      className={`flex flex-row-reverse justify-between items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        userType === "buyer"
                          ? "border-[#A8E959] bg-[#A8E959]/10"
                          : "border-gray-300 hover:border-[#A8E959]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="userType"
                        value="buyer"
                        checked={userType === "buyer"}
                        onChange={() => setUserType("buyer")}
                        className="w-5 h-5 text-[#A8E959] border-gray-300 focus:ring-[#A8E959] mr-4 block "
                      />
                      <span className="text-gray-700 font-parkinsans font-semibold block">
                        Buyer
                      </span>
                    </label>
                    <label
                      className={`flex items-center flex-row-reverse justify-between p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        userType === "seller"
                          ? "border-[#A8E959] bg-[#A8E959]/10"
                          : "border-gray-300 hover:border-[#A8E959]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="userType"
                        value="seller"
                        checked={userType === "seller"}
                        onChange={() => setUserType("seller")}
                        className="w-5 h-5 text-[#A8E959] border-gray-300 focus:ring-[#A8E959] mr-4 block"
                      />
                      <span className="text-gray-700 font-parkinsans font-semibold block">
                        Seller
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={!userType}
                      onClick={() => setCurrentPage(4)}
                      className="w-full py-3 rounded-lg bg-[#A8E959] text-[#144E42] font-parkinsans font-semibold hover:bg-[#A8E959] transition-colors mt-6 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {currentPage === 4 && (
                <form
                  id="auth-form"
                  onSubmit={() => {}}
                  className="space-y-4 animate-fade-in"
                >
                  <div className="flex justify-between w-full gap-6">
                    <div className="w-full">
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold text-gray-700 mb-2 font-parkinsans"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:border-[#A8E959] focus:ring-2 focus:ring-[#A8E959]/20 outline-none transition-all font-parkinsans"
                        placeholder="Enter your State"
                      />
                    </div>

                    <div className="w-full">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2 font-parkinsans"
                      >
                        LGA
                      </label>
                      <input
                        type="text"
                        id="lga"
                        name="lga"
                        value={formData.lga}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:border-[#A8E959] focus:ring-2 focus:ring-[#A8E959]/20 outline-none transition-all font-parkinsans"
                        placeholder="Enter your LGA"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2 font-parkinsans"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 text-black rounded-lg border border-gray-300 focus:border-[#A8E959] focus:ring-2 focus:ring-[#A8E959]/20 outline-none transition-all font-parkinsans"
                      placeholder="Enter Business name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2 font-parkinsans"
                    >
                      Home Street Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 text-black rounded-lg border border-gray-300 focus:border-[#A8E959] focus:ring-2 focus:ring-[#A8E959]/20 outline-none transition-all font-parkinsans"
                      placeholder="Enter Street Address"
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={() => {
                      setCurrentPage(2);
                    }}
                    disabled={
                      !formData.email || !formData.fullName || !formData.phone
                    }
                    className="w-full py-3 rounded-lg bg-[#A8E959] text-[#144E42] font-parkinsans font-semibold hover:bg-[#A8E959] transition-colors mt-6 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
