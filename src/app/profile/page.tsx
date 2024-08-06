"use client";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { IoCameraReverseOutline } from "react-icons/io5";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaStackOverflow, FaTwitter } from "react-icons/fa";

// export const metadata: Metadata = {
//   title:
//     "Code Customizer",
//   description: "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
// };

const Profile = () => {
  const [imageSrc, setImageSrc] = useState('/images/cover/cover-01.png');
  const [userImageSrc, setUserImageSrc] = useState('/images/user/user-01.png');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUserImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setUserImageSrc(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-242.5">
        <Breadcrumb pageName="Profile" />

        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="relative z-20 h-35 md:h-65">
            <Image
              src={imageSrc}
              alt="profile cover"
              className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
              width={970}
              height={260}
            />
            <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
              <label
                htmlFor="cover"
                className="flex cursor-pointer items-center justify-center gap-2 rounded bg-[#1C2434] px-2 py-1 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4"
              >
                <input
                  type="file"
                  name="cover"
                  id="cover"
                  className="sr-only"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <span>
                  <CiEdit />
                </span>
                <span>Edit</span>
              </label>
            </div>
          </div>

          <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
            <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
              <div className="relative drop-shadow-2">
                <Image
                  src={userImageSrc}
                  width={160}
                  height={160}
                  alt="profile"
                  className="w-auto h-40 rounded-full"
                />
                <label
                  htmlFor="profile"
                  className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-[#1C2434] text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
                >
                  <IoCameraReverseOutline className="text-lg" />
                  <input
                    type="file"
                    name="profile"
                    id="profile"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleUserImageChange}
                  />
                </label>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                Waqas Ahmed
              </h3>
              <p className="font-medium">Software Engineer</p>
              <div className="mx-auto mb-5.5 mt-4.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
                <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">
                    259
                  </span>
                  <span className="text-sm">Posts</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">
                    129K
                  </span>
                  <span className="text-sm">Followers</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">
                    2K
                  </span>
                  <span className="text-sm">Following</span>
                </div>
              </div>

              <div className="mx-auto max-w-180">
                <h4 className="font-semibold text-black dark:text-white">
                  About Me
                </h4>
                <p className="mt-4.5">
                  A versatile software engineer with expertise in front-end web development,
                  specializing in React and Tailwind CSS. Proven ability to deliver high-quality,
                  user-friendly interfaces and integrate complex functionalities using modern web technologies.
                </p>
              </div>

              <div className="mt-6.5">
                <h4 className="mb-3.5 font-medium text-black dark:text-white">
                  Follow me on
                </h4>
                <div className="flex items-center justify-center gap-3.5">
                  <Link
                    href="#"
                    className="hover:text-[#3b5998]"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="text-[22px]" />
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-[#1da1f2]"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-[24px]" />
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-[#0077b5]"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="text-[24px]" />
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-[#f48024]"
                    aria-label="Stack Overflow"
                  >
                    <FaStackOverflow className="text-[24px]" />
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-[#333] dark:text-white"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-[24px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
