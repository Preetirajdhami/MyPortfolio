"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Email sent:", result.text);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <section id="contact" className="mx-auto pb-12">
      <div className="bg-bgTheme px-8 lg:px-16 xl:px-24 2xl:px-44">
        <h2 className="text-4xl font-bold text-center text-primary mb-3">
          Contact
        </h2>
        <h3 className="text-2xl font-semibold text-center text-textColor mb-6">
          Let&apos;s Work Together
        </h3>

        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-white shadow-md rounded-lg p-6"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
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
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
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
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border-gray-300 bg-base placeholder-gr rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3"
                rows={4}
              ></textarea>
            </div>

            <div className="flex flex-col items-end">
              <button
                type="submit"
                className="w-auto bg-primary text-white font-medium py-2 px-4 rounded-md hover:scale-105 transition"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info Section */}
          <div className="flex-1 flex flex-col items-end bg-base shadow-lg rounded-2xl p-8 text-right space-y-8">
            {/* Email */}
            <div>
              <h2 className="text-sm text-primary uppercase font-bold tracking-widest mb-2">
                Email
              </h2>
              <div className="flex items-center justify-end text-textColor space-x-3">
                <FaEnvelope className="text-primary text-lg" />
                <span className="text-lg md:text-xl font-semibold text-textColor">
                  preetirajdhami@gmail.com
                </span>
              </div>
            </div>

            {/* Address */}
            <div>
              <h2 className="text-sm text-primary uppercase font-bold tracking-widest mb-2">
                Address
              </h2>
              <div className="flex items-center justify-end text-textColor space-x-3">
                <FaMapMarkerAlt className="text-primary text-lg" />
                <span className="text-lg md:text-xl font-semibold text-textColor">
                  Itahari, Nepal
                </span>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h2 className="text-sm text-primary uppercase font-bold tracking-widest mb-4">
                Socials
              </h2>
              <div className="flex justify-end space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100075831461504"
                  className="text-textColor hover:text-primary hover:scale-110 transition-transform duration-300"
                >
                  <FaFacebook size={28} />
                </a>
                <a
                  href="https://www.instagram.com/pre.ettiii/"
                  className="text-textColor hover:text-primary hover:scale-110 transition-transform duration-300"
                >
                  <FaInstagram size={28} />
                </a>
                <a
                  href="https://github.com/Preetirajdhami"
                  className="text-textColor hover:text-primary hover:scale-110 transition-transform duration-300"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/preeti-rajdhami-103803244/"
                  className="text-textColor hover:text-primary hover:scale-110 transition-transform duration-300"
                >
                  <CiLinkedin size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="mt-14 font-semibold mb-2 border-t-2 border-primary pt-6 text-center">
            ©Copyright 2024. Developed by Preeti Rajdhami
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Contact;
