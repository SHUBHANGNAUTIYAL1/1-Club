import React, { useState } from "react";
import axios from "axios";
import { CgSpinnerAlt } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Form = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    occupation: "",
    referralSource: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contactNumber: "",
    occupation: "",
    referralSource: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      contactNumber: value,
    });
    setErrors({
      ...errors,
      contactNumber: "",
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    if (!formData.name) {
      formIsValid = false;
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      formIsValid = false;
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      newErrors.email = "Email is invalid";
    }

    if (!formData.contactNumber) {
      formIsValid = false;
      newErrors.contactNumber = "Contact number is required";
    }

    if (!formData.occupation) {
      formIsValid = false;
      newErrors.occupation = "Occupation is required";
    }

    if (!formData.referralSource) {
      formIsValid = false;
      newErrors.referralSource = "Referral source is required";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!validateForm()) {
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        "https://crm-backend-if6g.onrender.com/api/contact/create",
        formData
      );
      setLoading(false);
      alert("Form submitted successfully");
      console.log("Response:", response.data);
      onClose(); // Close the modal on successful form submission
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg md:max-w-md sm:max-w-sm mx-auto p-4 sm:p-6 md:p-8 rounded-lg shadow-lg"
      style={{
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      }}
    >
      <h2 className="text-xl  md:text-2xl font-bold text-center mb-4 sm:mb-3 md:mb-3 text-gray-800">
        Get your free 1-minute Guided Meditation
      </h2>
      <div className="mb-4 sm:mb-3 md:mb-3">
        <label
          className="block text-gray-700 text-sm md:text-base font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3  md:py-2 md:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p className="text-red-500 text-xs md:text-sm italic">{errors.name}</p>
        )}
      </div>
      <div className="mb-4 sm:mb-3 md:mb-3">
        <label
          className="block text-gray-700 text-sm md:text-base font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3  md:py-2 md:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-red-500 text-xs md:text-sm italic">{errors.email}</p>
        )}
      </div>
      <div className="mb-4 sm:mb-3 md:mb-3">
        <label
          className="block text-gray-700 text-sm md:text-base font-bold mb-2"
          htmlFor="contactNumber"
        >
          Contact Number
        </label>
        <PhoneInput
          country={"us"}
          value={formData.contactNumber}
          onChange={handlePhoneChange}
          inputProps={{
            name: "contactNumber",
            required: true,
            autoFocus: false,
          }}
          containerClass="w-full"
          inputClass="w-full shadow appearance-none border rounded py-2 px-3  md:py-2 md:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.contactNumber && (
          <p className="text-red-500 text-xs md:text-sm italic">{errors.contactNumber}</p>
        )}
      </div>
      <div className="mb-4 sm:mb-3 md:mb-3">
        <label
          className="block text-gray-700 text-sm md:text-base font-bold mb-2"
          htmlFor="occupation"
        >
          What you do?
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3  md:py-2 md:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Entrepreneurs">Entrepreneurs</option>
          <option value="Coache/Business Owners">Coach / Business Owners</option>
          <option value="Salaried Employee">Salaried Employee</option>
          <option value="Others">Others</option>
        </select>
        {errors.occupation && (
          <p className="text-red-500 text-xs md:text-sm italic">{errors.occupation}</p>
        )}
      </div>
      <div className="mb-6 sm:mb-7 md:mb-8">
        <label
          className="block text-gray-700 text-sm md:text-base font-bold mb-2"
          htmlFor="referralSource"
        >
          How you know us?
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3  md:py-2 md:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="referralSource"
          name="referralSource"
          value={formData.referralSource}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Fb groups">Fb groups</option>
          <option value="Instagram">Instagram</option>
          <option value="A friend recommended me">
            A friend recommended me
          </option>
        </select>
        {errors.referralSource && (
          <p className="text-red-500 text-xs md:text-sm italic">{errors.referralSource}</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-5 md:py-2 md:px-3 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {loading ? (
            <CgSpinnerAlt className="animate-spin" />
          ) : (
            "Book Your Spot"
          )}
        </button>
      </div>
    </form>
  );
};

export default Form;
