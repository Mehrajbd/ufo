"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    nid: "",
    dob: "",
    phone: "",
    village: "",
    union: "",
    upazila: "",
    district: "",
    familyMembers: "",
    incomeSource: "",
    monthlyIncome: "",
    landSize: "",
    houseType: "",
    toiletType: "",
    donationItem: "",
    waterSource: [],
    totalChildren: "",
    boys: "",
    girls: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedArray = [...formData[name]];
      if (checked) {
        updatedArray.push(value);
      } else {
        updatedArray = updatedArray.filter((v) => v !== value);
      }
      setFormData({ ...formData, [name]: updatedArray });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("✅ ফর্ম সাবমিট হয়েছে!");
  };

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="w-full h-64 md:h-96 bg-gray-300">
          <img
            src="/ngo registration and civil society.png" 
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 md:-bottom-16">
          <img
            src="/grok_image_x9u3x4t.jpg" 
            alt="Logo"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Form Section */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mt-16 md:mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 pb-8">
          রেজিস্ট্রেশন ফর্ম
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">নাম *</span>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="আপনার নাম লিখুন"
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Father's Name */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">পিতার নাম *</span>
              <input
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                type="text"
                placeholder="পিতার নাম লিখুন"
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Mother's Name */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">মাতার নাম *</span>
              <input
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                type="text"
                placeholder="মাতার নাম লিখুন"
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* NID */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">এনআইডি নাম্বার</span>
              <input
                name="nid"
                value={formData.nid}
                onChange={handleChange}
                type="text"
                placeholder="এনআইডি নাম্বার লিখুন"
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Date of Birth */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">জন্ম তারিখ *</span>
              <input
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                type="date"
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Phone */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">ফোন নাম্বার *</span>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="ফোন নাম্বার লিখুন"
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Village */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">গ্রামের নাম *</span>
              <input
                name="village"
                value={formData.village}
                onChange={handleChange}
                type="text"
                placeholder="গ্রামের নাম লিখুন"
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Union */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">ইউনিয়নের নাম *</span>
              <input
                name="union"
                value={formData.union}
                onChange={handleChange}
                type="text"
                placeholder="ইউনিয়নের নাম লিখুন"
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Upazila */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">উপজেলার নাম *</span>
              <input
                name="upazila"
                value={formData.upazila}
                onChange={handleChange}
                type="text"
                placeholder="উপজেলার নাম লিখুন"
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* District */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">জেলার নাম *</span>
              <input
                name="district"
                value={formData.district}
                onChange={handleChange}
                type="text"
                placeholder="জেলার নাম লিখুন"
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Family Members */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">পরিবারের সদস্য সংখ্যা *</span>
              <input
                name="familyMembers"
                value={formData.familyMembers}
                onChange={handleChange}
                type="number"
                placeholder="পরিবারের সদস্য সংখ্যা লিখুন"
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Income Source */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">আয়ের উৎস *</span>
              <select
                name="incomeSource"
                value={formData.incomeSource}
                onChange={handleChange}
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Please select</option>
                <option value="কৃষি">কৃষি</option>
                <option value="ব্যবসা">ব্যবসা</option>
                <option value="চাকরি">চাকরি</option>
                <option value="অন্যান্য">অন্যান্য</option>
              </select>
            </label>

            {/* Monthly Income */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">মাসিক আয় *</span>
              <select
                name="monthlyIncome"
                value={formData.monthlyIncome}
                onChange={handleChange}
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Please select</option>
                <option value="৫০০-১০০০ টাকা ">৫০০-১০০০ টাকা</option>
                <option value="১০০০-১৫০০ টাকা ">১০০০-১৫০০ টাকা</option>
                <option value="২০০০-২৫০০ টাকা">২০০০-২৫০০ টাকা</option>
                <option value="২৫০০-৩০০০ টাকা">২৫০০-৩০০০ টাকা</option>
                <option value="৩০০০-৩৫০০ টাকা ">৩০০০-৩৫০০ টাকা</option>
                <option value="৩৫০০-৪০০০ টাকা">৩৫০০-৪০০০ টাকা</option>
                <option value="৪০০০-৪৫০০ টাকা">৪০০০-৪৫০০ টাকা</option>
                <option value="৪৫০০-৫০০০ টাকা">৪৫০০-৫০০০ টাকা</option>
                <option value="৫০০০-৬০০০ টাকা ">৫০০০-৬০০০ টাকা</option>
                <option value="৬০০০-৭০০০ টাকা">৬০০০-৭০০০ টাকা</option>
                <option value="৭০০০-৮০০০ টাকা">৭০০০-৮০০০ টাকা</option>
                <option value="৮০০০-১০০০০ টাকা">৮০০০-১০০০০ টাকা</option>
                <option value="১০০০০-১২০০০ টাকা ">১০০০০-১২০০০ টাকা</option>
                <option value="১২০০০-১৫০০০ টাকা">১২০০০-১৫০০০ টাকা</option>
                <option value="১৫০০০-২০০০০ টাকা">১৫০০০-২০০০০ টাকা</option>
                <option value="২০০০০-২৫০০০ টাকা">২০০০০-২৫০০০ টাকা</option>
                <option value="২৫০০০-৩০০০০ টাকা ">২৫০০০-৩০০০০ টাকা</option>
                <option value="৩০০০০-৪০০০০ টাকা">৩০০০০-৪০০০০ টাকা</option>
                <option value="৪০০০০ টাকার উপরে">৪০০০০ টাকার উপরে</option>
              
              </select>
            </label>

            {/* Land Size */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">জমির পরিমাণ (শতাংশ) *</span>
              <input
                name="landSize"
                value={formData.landSize}
                onChange={handleChange}
                type="number"
                placeholder="Please enter a value"
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* House Type */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">বাড়ীর ধরন *</span>
              <select
                name="houseType"
                value={formData.houseType}
                onChange={handleChange}
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Please select</option>
                <option value="ইটের">ইটের</option>
                <option value="কাঠের">কাঠের</option>
                <option value="মাটির">মাটির</option>
                <option value="অন্যান্য">অন্যান্য</option>
              </select>
            </label>

            {/* Toilet Type */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">শৌচাগারের ধরন *</span>
              <select
                name="toiletType"
                value={formData.toiletType}
                onChange={handleChange}
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Please select</option>
                <option value="স্যানিটারি">স্যানিটারি</option>
                <option value="কাঁচা">কাঁচা</option>
                <option value="অন্যান্য">অন্যান্য</option>
              </select>
            </label>

            {/* Donation Item */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">অনুদান সামগ্রী *</span>
              <select
                name="donationItem"
                value={formData.donationItem}
                onChange={handleChange}
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Please select</option>
                <option value="টয়লেট প্যান">টয়লেট প্যান</option>
                <option value="রিং স্ল্যাব">রিং স্ল্যাব</option>
                <option value="পাইপ/অন্যান্য">পাইপ/অন্যান্য</option>
              </select>
            </label>

            {/* Water Source */}
            <div className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">খাবার পানির উৎস *</span>
              {["টিউবওয়েল", "কূপ", "নদী", "অন্যান্য"].map((source) => (
                <label key={source} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="waterSource"
                    value={source}
                    checked={formData.waterSource.includes(source)}
                    onChange={handleChange}
                  />
                  <span>{source}</span>
                </label>
              ))}
            </div>

            {/* Children Numbers */}
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">মোট সন্তান সংখ্যা *</span>
              <input
                name="totalChildren"
                value={formData.totalChildren}
                onChange={handleChange}
                type="number"
                placeholder="মোট সন্তান সংখ্যা লিখুন"
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">ছেলে সন্তান *</span>
              <input
                name="boys"
                value={formData.boys}
                onChange={handleChange}
                type="number"
                placeholder="ছেলে সন্তানের সংখ্যা"
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-gray-700 font-medium pb-2">মেয়ে সন্তান *</span>
              <input
                name="girls"
                value={formData.girls}
                onChange={handleChange}
                type="number"
                placeholder="মেয়ে সন্তানের সংখ্যা"
                required
                className="h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:scale-[1.01] transition"
            >
              আবেদন ফি জমা দিন
            </button>
          </div>
        </form>
   
      </div>

              {/* Footer */}
      <footer className="bg-gray-50 border-t mt-auto">
        <div className="flex flex-col items-center py-8 space-y-4">
          <nav className="flex gap-6 text-gray-600 text-sm md:text-base">
            <a href="#" className="hover:text-blue-600">সর্বাবলী</a>
            <a href="#" className="hover:text-blue-600">প্রাইভাসি নিতি</a>
            <a href="#" className="hover:text-blue-600">যোগাযোগ</a>
          </nav>
          <p className="text-gray-500 text-sm">
            © UFO নিরাপদ শৌচাগার কর্মসূচী. সর্বস্বত্ব সংরক্ষিত
          </p>
        </div>
      </footer>
    </main>
  );
}
