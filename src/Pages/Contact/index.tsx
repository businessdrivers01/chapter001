'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'; // Import relevant icons from lucide-react

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;

}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  website?: string;
}

const contactDetails = [
  { type: 'phone', icon: Phone, content: '+92-303-525-6390' },
  { type: 'email', icon: Mail, content: 'Info@chapter-001.com' },
  { type: 'instagram', icon: Instagram, content: 'https://www.instagram.com/chapter001pakistann' },
  { type: 'facebook', icon: Facebook, content: 'https://www.facebook.com/share/18vJJpsjnF/' },
  { type: 'youtube', icon: Youtube, content: 'https://youtube.com/@revealsecrets2.0' },
  { type: 'address', icon: MapPin, content: 'Chapter-001, 2nd Floor, Business Hub DHA Phase 8, Lahore, Pakistan' },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    website: ""
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
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name as keyof Errors]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\+?[\d\s-]+$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.service.trim()) newErrors.service = 'Service is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    // if (formData.website && !/^https?:\/\/.*/.test(formData.website)) {
    //   newErrors.website = 'Invalid website URL';
    // }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const response = await fetch(`https://formspree.io/f/mbljyqzz`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setPopup({ success: true, message: 'Thank you for reaching out, We will get back to you soon!', visible: true });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          website: ""
        });
      } else {
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
        <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-6">

            {/* Name */}
            <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus" className="mb-4">
              <label htmlFor="name" className="text-sm text-white font-semibold">
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
              {errors.name && <p className="mt-2 text-sm text-red-300">{errors.name}</p>}
            </motion.div>

            {/* Email */}
            <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus" className="mb-4">
              <label htmlFor="email-address" className="text-sm text-white font-semibold">
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
              {errors.email && <p className="mt-2 text-sm text-red-300">{errors.email}</p>}
            </motion.div>



            {/* Phone */}
            <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus" className="mb-4">
              <label htmlFor="phone-number" className="text-sm text-white font-semibold">
                Phone Number
              </label>
              <input
                id="phone-number"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="mt-2 text-sm text-red-300">{errors.phone}</p>}
            </motion.div>



            {/* Service */}
            <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus" className="mb-4">
              <label htmlFor="service-type" className="text-sm text-white font-semibold">
                Service Type
              </label>
              <input
                id="service-type"
                name="service"
                type="text"
                autoComplete="off"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="Service Type"
                value={formData.service}
                onChange={handleChange}
              />
              {errors.service && <p className="mt-2 text-sm text-red-300">{errors.service}</p>}
            </motion.div>



            {/* Website */}
            <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus" className="mb-4">
              <label htmlFor="website-link" className="text-sm text-white font-semibold">
                Website Link (Optional)
              </label>
              <input
                id="website-link"
                name="website"
                type="text"
                autoComplete="off"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="Website Link"
                value={formData.website}
                onChange={handleChange}
              />
              {errors.website && <p className="mt-2 text-sm text-red-300">{errors.website}</p>}
            </motion.div>



            {/* Message */}
            <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus">
              <label htmlFor="message" className="text-sm text-white font-semibold">
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
              {errors.message && <p className="mt-2 text-sm text-red-300">{errors.message}</p>}
            </motion.div>
          </div>

          {/* Submit Button */}
          <div>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="btn !w-full">
              Send Message
            </motion.button>
          </div>
        </form>

        {/* Contact Information */}
        <div className="mt-8 space-y-4 text-white text-opacity-80 text-sm">
          {contactDetails.map((contact, index) => (
            <div key={index} className="flex items-center space-x-3">
              <contact.icon className="min-w-6 min-h-6 text-white" />
              <a
                href={contact.type === 'email' ? `mailto:${contact.content}` : contact.type === 'phone' ? `tel:${contact.content}` : contact.type === 'address' ? "https://maps.app.goo.gl/kbkeoHULGFw7wuTV7?g_st=ac" : contact.content}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline duration-300"
              >
                {
                  contact.type === "youtube" ? "YouTube"
                    : contact.type === "facebook" ? "Facebook"
                      : contact.type === "instagram" ? "Instagram"


                        : contact.content}
              </a>
            </div>
          ))}
        </div>
      </motion.div >

      {/* Popup Notification */}
      {
        popup.visible && (
          <motion.div variants={popupVariants} initial="hidden" animate="visible" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
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
              <button onClick={() => setPopup({ ...popup, visible: false })} className="btn !bg-red-500 hover:!bg-red-600 text-white">
                Close
              </button>
            </motion.div>
          </motion.div>
        )
      }
    </div >
  );
}
