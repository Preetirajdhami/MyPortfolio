"use client";

import React, { useState } from "react";
import axios from "axios"; 
import { FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    try {
      const response = await axios.post("http://localhost:8000/api/contact", formData);
      console.log("Form data sent successfully:", response.data);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending form data:", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <section id="contact" className=" mx-auto pb-12  ">
      <div className="bg-bgTheme px-8 lg:px-16 xl:px-24 2xl:px-44">
      <h2 className="text-4xl font-bold text-center text-textColor mb-6">Contact </h2>
      <h3 className="text-2xl font-semibold text-center text-textColor mb-4">Let&apos;s Work Together</h3>
      <div className="flex flex-wrap lg:flex-nowrap  gap-8">
        
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-gray-300 bg-Form placeholder-white text-black rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3"
            />

          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-gray-300 bg-Form placeholder-white rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border-gray-300 bg-Form placeholder-white rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3"
              rows={4}
            ></textarea>
          </div>

          <div className="flex flex-col items-end">
          <button
            type="submit"
            className="w-auto  bg-DarkButton text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
          </div>
        </form>

        {/* Contact Info Section */}
        <div className="flex-1 flex flex-col items-end  bg-gray-100 shadow-md rounded-lg p-6">
          
         
          <div className="mb-6">
            <h1 className="text-3xl text-textColor font-semibold flex flex-row justify-end"> Email</h1>
            <div className="flex items-center text-gray-700">
            <FaEnvelope className="text-DarkButton mr-3" />
            <span className="text-xl font-bold text-DarkButton">preetirajdhami@gmail.com</span>
            </div>
          </div>

          <div>
            <h1 className="text-3xl text-textColor mt-6 font-semibold flex flex-row justify-end">Address</h1>
            <div className="flex items-center text-gray-700">
            <FaMapMarkerAlt className="text-DarkButton mr-3" />
              <span className="text-xl font-bold text-DarkButton">Itahari, Nepal</span>
            </div>
          </div>
          <h3 className="text-3xl text-textColor font-semibold mt-6 mb-4 flex flex-row justify-end">Socials</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100075831461504" className="text-DarkButton hover:text-indigo-800 hover:scale-110 transition duration-300">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com/pre.ettiii/" className="text-DarkButton hover:text-indigo-800 hover:scale-110 transition duration-300">
              <FaInstagram size={30} />
            </a>
            <a href="https://github.com/Preetirajdhami" className="text-DarkButton hover:text-indigo-800 hover:scale-110 transition duration-300">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/preeti-rajdhami-103803244/" className="text-DarkButton hover:text-indigo-800 hover:scale-110 transition duration-300">
              <CiLinkedin  size={30} />
            </a>
          </div>
        </div>

       

      </div>

      <div>
          <h1 className="mt-14 font-semibold mb-2 border-t-2 border-violet-600 pt-6 text-center">©Copyright 2024. Developed by Preeti Rajdhami</h1>
        </div>
      </div>
    </section>
  );
};

export default Contact;
