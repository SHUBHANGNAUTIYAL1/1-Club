import React, { useState } from "react";
import axios from "axios";
import { CgSpinnerAlt } from "react-icons/cg";
const Form = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
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
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
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
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto p-8 rounded-lg shadow-lg"
      style={{
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      }}
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Get your Free Meditation Guide
      </h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="contactNumber"
        >
          Contact Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="contactNumber"
          name="contactNumber"
          type="tel"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="occupation"
        >
          What you do?
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Entrepreneurs">Entrepreneurs</option>
          <option value="Coaches">Coaches</option>
          <option value="Working people">Working people</option>
        </select>
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="referralSource"
        >
          How you know us?
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
