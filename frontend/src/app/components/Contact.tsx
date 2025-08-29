"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaUser,
  FaAt,
  FaRegCommentDots,
  FaCheckCircle,
  FaExclamationTriangle
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Reset submit status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

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

      console.log("Email sent successfully:", result.text);
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
      
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-white text-xl" />,
      title: "Email",
      value: "preetirajdhami@gmail.com",
      href: "mailto:preetirajdhami@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-white text-xl" />,
      title: "Location",
      value: "Itahari, Nepal",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaFacebook className="text-xl" />,
      href: "https://www.facebook.com/profile.php?id=100075831461504",
      color: "hover:bg-primary/90",
      bgColor: "bg-primary",
      label: "Facebook"
    },
    {
      icon: <FaInstagram className="text-xl" />,
      href: "https://www.instagram.com/pre.ettiii/",
      color: "hover:bg-primary/90",
      bgColor: "bg-primary",
      label: "Instagram"
    },
    {
      icon: <FaGithub className="text-xl" />,
      href: "https://github.com/Preetirajdhami",
      color: "hover:bg-primary/90",
      bgColor: "bg-primary",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      href: "https://www.linkedin.com/in/preeti-rajdhami-103803244/",
      color: "hover:bg-primary/90",
      bgColor: "bg-primary",
      label: "LinkedIn"
    }
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-br from-bgTheme to-orange-50">
      
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary rounded-full blur-[150px] opacity-20 z-0" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-orange-300 rounded-full blur-[120px] opacity-20 z-0" />
      
      <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24 2xl:px-44 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <h3 className="text-2xl font-semibold text-textColor mb-6">
            Let&apos;s Work Together
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
         
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 space-y-6"
            >
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-600 text-xl" />
                  <div>
                    <p className="text-green-800 font-semibold">Message sent successfully!</p>
                    <p className="text-green-600 text-sm">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3"
                >
                  <FaExclamationTriangle className="text-red-600 text-xl" />
                  <div>
                    <p className="text-red-800 font-semibold">Failed to send message</p>
                    <p className="text-red-600 text-sm">Please try again or contact me directly via email.</p>
                  </div>
                </motion.div>
              )}

              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-textColor font-semibold mb-2"
                >
                  Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 bg-white/70"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-textColor font-semibold mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <FaAt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 bg-white/70"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-textColor font-semibold mb-2"
                >
                  Message
                </label>
                <div className="relative">
                  <FaRegCommentDots className="absolute left-4 top-6 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 resize-none bg-white/70"
                    rows={5}
                  ></textarea>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-textColor">{info.title}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Media Links */}
            <motion.div
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-textColor mb-4">Socials</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className={`w-12 h-12 ${social.bgColor} rounded-lg flex items-center justify-center text-white ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>

        
        <motion.div
          className="mt-20 pt-8 border-t border-primary/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-textColor font-semibold mb-2">
            ©Copyright 2024. Developed with Preeti Rajdhami
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;