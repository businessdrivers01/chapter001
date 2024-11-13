'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react'; // Import icons from lucide-react

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [popup, setPopup] = useState<{ success: boolean; message: string; visible: boolean }>({
    success: false,
    message: '',
    visible: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name as keyof Errors]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission with Formspree
      const response = await fetch(`https://formspree.io/f/YOUR_FORM_ID`, { // Add your Formspree form ID here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Form submitted:', formData);
        setPopup({ success: true, message: 'Thank you for reaching out, We will get back to you soon!', visible: true });
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Form submission error:', response.statusText);
        setPopup({ success: false, message: 'Something went wrong. Please try later.', visible: true });
      }
    }
  };

  const inputVariants = {
    focus: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } },
    blur: { scale: 1 },
  };

  const popupVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-600 via-navy-800 to-navy-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full space-y-8 bg-white bg-opacity-10 px-10 pt-14 pb-32 rounded-xl shadow-2xl"
      >
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-2 text-center text-5xl md:text-[70px] font-extrabold text-white"
          >
            Contact Us
          </motion.h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              whileTap="focus"
              className="mb-4"
            >
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
            </motion.div>
            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              whileTap="focus"
              className="mb-4"
            >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
            </motion.div>
            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              whileTap="focus"
            >
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
            </motion.div>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn !w-full "
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* Popup Notification */}
      {popup.visible && (
        <motion.div
          variants={popupVariants}
          initial="hidden"
          animate="visible"
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}
        >
          <motion.div className="bg-white p-6 rounded-lg shadow-lg flex items-center flex-col space-y-4">
            {popup.success ? (
              <>
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <p>{popup.message}</p>
              </>
            ) : (
              <>
                <XCircle className="w-6 h-6 text-red-500 mr-2" />
                <p>{popup.message}</p>
              </>
            )}
            <button
              onClick={() => setPopup({ ...popup, visible: false })}
              className="mx-auto btn !w-full !py-2"
            >
              OK
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
