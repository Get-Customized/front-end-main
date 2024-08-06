"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { CiLock, CiMail } from "react-icons/ci";

// export const metadata: Metadata = {
//   title: "Code Customizer",
//   description: "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
// };

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const isValidPassword = (password: string) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    return pattern.test(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setError('');
    setValidPassword('');

    // Validation
    if (email !== "codecustomizer@admin.com" && password !== "CodeCustomizer@042") {
      setError("Please enter a valid email address or password");
    } else if (email !== "codecustomizer@admin.com") {
      setError("Please enter a valid email address");
    } else if (password !== "CodeCustomizer@042") {
      if (!isValidPassword(password)) {
        setValidPassword("Please enter a valid password (at least one uppercase letter, one lowercase letter, and one symbol)");
      } else {
        setError("Please enter a valid password");
      }
    } else {
      setEmail('');
      setPassword('');
      router.push("/");
    }
  };

  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Sign In" />

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-full xl:block xl:w-1/2">
              <div className="px-26 py-17.5 text-center">
                <Link className="mb-5.5 inline-block" href="/">
                  <Image
                    className="hidden dark:block"
                    src={"/images/logo/codecutsomizer-white.png"}
                    alt="Logo"
                    width={176}
                    height={32}
                  />
                  <Image
                    className="dark:hidden"
                    src={"/images/logo/codecutsomizer-dark.png"}
                    alt="Logo"
                    width={176}
                    height={32}
                  />
                </Link>

                <p className="2xl:px-20">
                  Effortlessly transform your code with our intuitive generator tailor-made solutions at your fingertips.
                </p>

                <span className="mt-15 inline-block">
                  <Image
                    src={"/images/authentication/bg-sigin-white.png"}
                    alt="Logo"
                    width={250}
                    height={150}
                  />
                </span>
              </div>
            </div>

            <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <span className="mb-1.5 block font-medium">Start for free</span>
                <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                  Sign In to Code Customizer
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#1F8C9C] focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-[#1F8C9C]"
                      />
                      <span className="absolute right-4 top-4">
                        <CiMail />
                      </span>
                    </div>
                    {error.includes("email") && (
                      <p className="text-[#FF0000]  text-sm mt-1">{error}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="6+ Characters, 1 Capital letter"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-[#1F8C9C] focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-[#1F8C9C]"
                      />
                      <span className="absolute right-4 top-4">
                        <CiLock />
                      </span>
                    </div>

                    {error.includes("password") && (
                      <p className="text-[#FF0000]  text-sm mt-1">{error}</p>
                    )}

                    {validPassword.includes("password") && (
                      <p className="text-black dark:text-white text-sm mt-1">{validPassword}</p>
                    )}
                  </div>

                  {error && !error.includes("email") && !error.includes("password") && (
                    <p className="text-[#FF0000] text-center mb-5">{error}</p>
                  )}

                  <div className="mb-5">
                    <input
                      type="submit"
                      value="Sign In"
                      className="w-full cursor-pointer rounded-lg border border-[#1C2434] bg-[#1C2434] dark:bg-[#1F8C9C] p-4 text-white transition hover:bg-opacity-90"
                    />
                  </div>

                  <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
                    <span>
                      <Image
                        src={"/images/authentication/google-icon.png"}
                        alt="Google Icon"
                        width={20}
                        height={20}
                      />
                    </span>
                    Sign in with Google
                  </button>

                  <div className="mt-6 text-center">
                    <p>
                      Don’t have an account?
                      <Link href="/auth/signup" className="text-[#1C2434] px-2 dark:text-white hover:text-[#1F8C9C]">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default SignIn;
