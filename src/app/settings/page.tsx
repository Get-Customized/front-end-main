import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { FiUser } from "react-icons/fi";
import { MdOutlinePhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { LiaEdit } from "react-icons/lia";
import { SlCloudUpload } from "react-icons/sl";

export const metadata: Metadata = {
  title:
    "Code Customizer",
  description: "Streamline your development process and build visually stunning websites with our intuitive and customizable code generator tool.",
};

const Settings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Settings" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Personal Information
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="fullName"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <span className="absolute left-4.5 top-4">
                          <FiUser className="text-[20px]" />
                        </span>
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3.5 pl-11.5 pr-4.5 text-black focus:border-[#1F8C9C] focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-[#1F8C9C]"
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="Full Name"
                          defaultValue="Waqas Ahmed"
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <span className="absolute left-4.5 top-4">
                          <MdOutlinePhone className="text-[20px]" />
                        </span>
                        <input
                          className="w-full rounded border border-stroke bg-gray px-12 py-3.5 text-black focus:border-[#1F8C9C] focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-[#1F8C9C]"
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          placeholder="Phone Bumber"
                          defaultValue="+92 245 3088845"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <CiMail className="text-[20px]" />
                      </span>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-[#1F8C9C] focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-[#1F8C9C]"
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        placeholder="Email"
                        defaultValue="waqasahmedit67@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      Username
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-[#1F8C9C] focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-[#1F8C9C]"
                      type="text"
                      name="Username"
                      id="Username"
                      placeholder="Username"
                      defaultValue="waqasahmed042"
                    />
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      BIO
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <LiaEdit className="text-[24px]" />
                      </span>

                      <textarea
                        className="w-full rounded border border-stroke bg-gray py-4 pl-11.5 pr-4.5 text-black focus:border-[#1F8C9C] focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-[#1F8C9C]"
                        name="bio"
                        id="bio"
                        rows={6}
                        placeholder="Write your bio here"
                        defaultValue="A versatile software engineer with expertise in front-end web development, specializing in React and Tailwind CSS. Proven ability to deliver high-quality, user-friendly interfaces and integrate complex functionalities using modern web technologies."
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-[#1C2434] dark:bg-[#1F8C9C] px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Your Photo
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-14 w-14 rounded-full">
                      <Image
                        src={"/images/user/user-03.png"}
                        width={55}
                        height={55}
                        alt="User"
                      />
                    </div>
                    <div>
                      <span className="mb-1.5 text-black dark:text-white">
                        Edit your photo
                      </span>
                      <span className="flex gap-2.5">
                        <button className="text-sm hover:text-[#1F8C9C]">
                          Delete
                        </button>
                        <button className="text-sm hover:text-[#1F8C9C]">
                          Update
                        </button>
                      </span>
                    </div>
                  </div>

                  <div
                    id="FileUpload"
                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-[#1F8C9C] bg-gray px-4 py-4 dark:bg-meta-4 sm:py-7.5"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                    />
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                        <SlCloudUpload className="text-[20px] text-[#1C2434] dark:text-white" />
                      </span>
                      <p>
                        <span className="text-[#1C2434] dark:text-white">Click to upload</span> or
                        drag and drop
                      </p>
                      <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                      <p>(max, 800 X 800px)</p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-[#1C2434] dark:bg-[#1F8C9C] px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Settings;
