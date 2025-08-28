"use client";

import { useState } from "react";
import { FaUser, FaHome, FaMoneyBillWave, FaChild, FaGift } from "react-icons/fa";

const steps = [
  {
    label: "ব্যক্তিগত তথ্য",
    icon: <FaUser />,
    fields: [
      "name",
      "fatherName",
      "motherName",
      "nid",
      "dob",
      "phone",
    ],
  },
  {
    label: "ঠিকানা",
    icon: <FaHome />,
    fields: [
      "village",
      "union",
      "upazila",
      "district",
      "familyMembers",
    ],
  },
  {
    label: "আয় এবং সম্পদ",
    icon: <FaMoneyBillWave />,
    fields: [
      "incomeSource",
      "monthlyIncome",
      "landSize",
      "houseType",
      "toiletType",
    ],
  },
  {
    label: "পরিবারের চলাচল",
    icon: <FaChild />,
    fields: [
      "totalChildren",
      "boys",
      "girls",
      "waterSource",
    ],
  },
  {
    label: "অনুদান ও চাহিদা",
    icon: <FaGift />,
    fields: [
      "donationItem",
    ],
  },
];

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

  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);

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

  const handleNext = () => {
    // You can add validation here per step if needed
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // শেষ ধাপে সব ফিল্ড চেক করা
  const currentFields = steps[currentStep].fields;
  for (let field of currentFields) {
    if (
      (Array.isArray(formData[field]) && formData[field].length === 0) || // checkbox check
      (!Array.isArray(formData[field]) && !formData[field])
    ) {
      alert(`❌ "${field}" ফিল্ডটি পূরণ করুন!`);
      return; // ফাঁকা থাকলে সাবমিট হবে না
    }
  }

  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    console.log("Form Submitted:", formData);
    alert("✅ ফর্ম সাবমিট হয়েছে!");
    setCurrentStep(0);
    setFormData({
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
  }, 1500);
};


  // Helper to render input fields based on step
  const renderField = (name) => {
    const commonClasses =
      "h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 bg-white hover:shadow-lg";

    switch (name) {
      case "name":
        return (
          <InputField
            key={name}
            label="নাম *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder="আপনার নাম লিখুন"
            required
          />
        );
      case "fatherName":
        return (
          <InputField
            key={name}
            label="পিতার নাম *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder="পিতার নাম লিখুন"
            required
          />
        );
      case "motherName":
        return (
          <InputField
            key={name}
            label="মাতার নাম *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder="মাতার নাম লিখুন"
            required
          />
        );
      case "nid":
        return (
          <InputField
            key={name}
            label="এনআইডি নাম্বার"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder="এনআইডি নাম্বার লিখুন"
            type="text"
          />
        );
      case "dob":
        return (
          <InputField
            key={name}
            label="জন্ম তারিখ *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            type="date"
            required
          />
        );
      case "phone":
        return (
          <InputField
            key={name}
            label="ফোন নাম্বার *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder="ফোন নাম্বার লিখুন"
            required
            type="tel"
          />
        );
      case "village":
        return (
          <InputField
            key={name}
            label="গ্রামের নাম *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder="গ্রামের নাম লিখুন"
            required
          />
        );
      case "union":
        return (
          <InputField
            key={name}
            label="ইউনিয়নের নাম *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder="ইউনিয়নের নাম লিখুন"
            required
          />
        );
      case "upazila":
        return (
          <InputField
            key={name}
            label="উপজেলার নাম *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder="উপজেলার নাম লিখুন"
            required
          />
        );
      case "district":
        return (
          <InputField
            key={name}
            label="জেলার নাম *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder="জেলার নাম লিখুন"
            required
          />
        );
      case "familyMembers":
        return (
          <InputField
            key={name}
            label="পরিবারের সদস্য সংখ্যা *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder="পরিবারের সদস্য সংখ্যা লিখুন"
            required
            type="number"
            min={1}
          />
        );
      case "incomeSource":
        return (
          <SelectField
            key={name}
            label="আয়ের উৎস *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            required
            options={[
              "কৃষি",
              "ব্যবসা",
              "দিনমজুর",
              "মৎস",
              "গৃহিণী",
              "বেসরকারি চাকরি",
              "সরকারি চাকরি",
              "অন্যান্য",
              "বেকার",
            ]}
          />
        );
      case "monthlyIncome":
        return (
          <SelectField
            key={name}
            label="মাসিক আয় *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            required
            options={[
              "৫০০-১০০০ টাকা",
              "১০০০-১৫০০ টাকা",
              "২০০০-২৫০০ টাকা",
              "২৫০০-৩০০০ টাকা",
              "৩০০০-৩৫০০ টাকা",
              "৩৫০۰-৪০০০ টাকা",
              "৪০০০-৪৫০০ টাকা",
              "৪৫০০-৫০০০ টাকা",
              "৫০০০-৬০০০ টাকা",
              "৬০০০-৭০০০ টাকা",
              "৭০০০-৮০০০ টাকা",
              "৮০০০-১০০০০ টাকা",
              "১০০০০-১২০০০ টাকা",
              "১২০০০-১৫০০০ টাকা",
              "১৫০০০-২০০০০ টাকা",
              "২০০০০-২৫০০০ টাকা",
              "২৫০০০-৩০০০০ টাকা",
              "৩০০০০-৪০০০০ টাকা",
              "৪০০০০ টাকার উপরে",
            ]}
          />
        );
      case "landSize":
        return (
          <InputField
            key={name}
            label="জমির পরিমাণ (%) *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder="জমির পরিমাণ লিখুন"
            required
            type="number"
          />
        );
      case "houseType":
        return (
          <SelectField
            key={name}
            label="বাড়ীর ধরন *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            required
            options={["ইটের", "কাঠের", "মাটির", "অন্যান্য"]}
          />
        );
      case "toiletType":
        return (
          <SelectField
            key={name}
            label="শৌচাগারের ধরন *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            required
            options={["স্যানিটারি", "কাঁচা", "অন্যান্য"]}
          />
        );
      case "donationItem":
        return (
          <SelectField
            key={name}
            label="অনুদান সামগ্রী যা লাগবে *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            required
            options={["টয়লেট প্যান", "রিং স্ল্যাব"]}
          />
        );
      case "waterSource":
        return (
          <CheckboxGroup
            key={name}
            label="খাবার পানির উৎস *"
            name={name}
            options={["টিউবওয়েল", "কূপ", "নদী", "অন্যান্য"]}
            selected={formData.waterSource}
            onChange={handleChange}
          />
        );
      case "totalChildren":
        return (
          <InputField
            key={name}
            label="মোট সন্তান সংখ্যা *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder="মোট সন্তান সংখ্যা লিখুন"
            required
            type="number"
            min={0}
          />
        );
      case "boys":
        return (
          <InputField
            key={name}
            label="ছেলে সন্তান *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder="ছেলে সন্তানের সংখ্যা"
            required
            type="number"
            min={0}
          />
        );
      case "girls":
        return (
          <InputField
            key={name}
            label="মেয়ে সন্তান *"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder="মেয়ে সন্তানের সংখ্যা"
            required
            type="number"
            min={0}
          />
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-tr from-blue-300 via-purple-300 to-pink-300 flex flex-col items-center pb-12 px-4 md:px-8">
      {/* Hero Section */}
      <section className="relative w-full max-w-6xl mt-8 md:mt-12 rounded-3xl overflow-hidden shadow-xl">
        <div className="w-full h-48 md:h-96 relative">
          <img
            src="/ngo registration and civil society.png"
            alt="Banner"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/30" />
          {/* Centered Logo */}
          <div className="absolute left-1/2 bottom-4 md:bottom-8 transform -translate-x-1/2 rounded-full border-4 border-white shadow-lg overflow-hidden w-24 h-24 md:w-32 md:h-32 bg-white">
            <img
              src="/grok_image_x9u3x4t.jpg"
              alt="Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Form Container with Glassmorphism */}
      <div className="w-full max-w-5xl mt-20 backdrop-blur-md bg-white/70 rounded-3xl p-8 shadow-xl border border-white/30 overflow-hidden">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8 drop-shadow-lg">
          রেজিস্ট্রেশন ফর্ম
        </h2>

        {/* Progress Bar */}
        <div className="flex justify-between mb-10 max-w-3xl mx-auto px-4">
          {steps.map((step, idx) => {
            const isActive = idx === currentStep;
            const isCompleted = idx < currentStep;

            return (
              <div
                key={step.label}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => {
                  if (idx <= currentStep) setCurrentStep(idx);
                }}
              >
                <div
                  className={`text-2xl w-12 h-12 rounded-full flex items-center justify-center
                    ${
                      isCompleted
                        ? "bg-gradient-to-br from-green-400 to-teal-500 text-white shadow-lg"
                        : isActive
                        ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg"
                        : "bg-gray-300 text-gray-600"
                    }
                    transition-all duration-300
                  `}
                >
                  {step.icon}
                </div>
                <span
                  className={`text-xs mt-2 text-center max-w-[70px] select-none
                    ${isActive ? "font-semibold text-blue-700" : "text-gray-700"}
                    `}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto space-y-10"
          noValidate
        >
          <div
            key={currentStep}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ease-in-out"
          >
            {/* Render fields of current step */}
            {steps[currentStep].fields.map((fieldName) => renderField(fieldName))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-6 max-w-3xl mx-auto px-2">
            {currentStep > 0 ? (
              <button
                type="button"
                onClick={handleBack}
                className="rounded-lg px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium shadow-sm transition transform hover:-translate-y-0.5"
              >
                পূর্বের
              </button>
            ) : (
              <div />
            )}

            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="rounded-lg px-8 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold shadow-lg hover:scale-105 transform transition"
              >
                পরবর্তী
              </button>
            ) : (
              <button
                type="button"
                disabled={loading}
                className={`rounded-lg px-8 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold shadow-lg hover:scale-105 transform transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                ) : null}
                আবেদন ফি জমা দিন
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md w-full max-w-6xl rounded-t-3xl mt-16 border-t border-gray-200 shadow-inner">
        <div className="flex flex-col items-center py-6 space-y-4 text-gray-600 text-sm md:text-base">
          <nav className="flex gap-8">
            <a href="#" className="hover:text-blue-600 transition">
              সর্বাবলী
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              প্রাইভাসি নিতি
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              যোগাযোগ
            </a>
          </nav>
          <p className="text-gray-500 select-none">
            © UFO নিরাপদ শৌচাগার কর্মসূচী. সর্বস্বত্ব সংরক্ষিত
          </p>
        </div>
      </footer>
    </main>
  );
}

// Smaller input components for reuse

function InputField({ label, name, value, onChange, placeholder, type = "text", required = false, min }) {
  return (
    <label className="flex flex-col">
      <span className="text-gray-700 font-medium pb-2">{label}</span>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required={required}
        min={min}
        className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 bg-white hover:shadow-lg"
      />
    </label>
  );
}

function SelectField({ label, name, value, onChange, required = false, options }) {
  return (
    <label className="flex flex-col">
      <span className="text-gray-700 font-medium pb-2">{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="h-12 px-4 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 hover:shadow-lg"
      >
        <option value="">অনুগ্রহ করে নির্বাচন করুন</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function CheckboxGroup({ label, name, options, selected, onChange }) {
  return (
    <div className="flex flex-col mb-4">
      <span className="text-gray-700 font-medium pb-2">{label}</span>
      <div className="flex flex-wrap gap-4">
        {options.map((opt) => (
          <label key={opt} className="flex items-center space-x-2 cursor-pointer select-none">
            <input
              type="checkbox"
              name={name}
              value={opt}
              checked={selected.includes(opt)}
              onChange={onChange}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
