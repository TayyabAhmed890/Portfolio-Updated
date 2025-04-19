"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const templateParams = {
      firstName: formData.firstName, // Ensure it matches EmailJS template
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      console.log("Email Sent:", response);
      setSuccess(true);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      console.error("Email Sending Error:", err);
      alert("Failed to send email. Check console for details.");
      setError(true);
      setTimeout(() => setError(false), 5000)
    }
    setLoading(false);
  };

  return (
    <div className="isolate  px-6 py-24 sm:py-32 lg:px-8 ">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight  sm:text-5xl">Contact <span className={`font-IBM text-blue-700 font-light`}>Me</span></h2>
        <p className="mt-2 text-lg/8 ">Get in Touch!</p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold ">
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="block w-full rounded-md bg-transparent px-3.5 py-2 text-base border border-black placeholder-gray-400 focus:outline-blue-700"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-black">
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="block w-full rounded-md bg-transparent px-3.5 py-2 text-base text-black border border-black placeholder-gray-400 focus:outline-blue-700"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-black">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full rounded-md bg-transparent px-3.5 py-2 text-base text-black border border-black placeholder-gray-400 focus:outline-blue-700"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="block w-full rounded-md bg-transparent px-3.5 py-2 text-base text-black border border-black placeholder-gray-400 focus:outline-blue-700"
            />
          </div>
        </div>
        <div className="mt-10">
        <div className="relative w-full mt-4">
  <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded-md bg-black"></span>
  <button
    type="submit"
    className="relative block w-full rounded-md bg-transparent border-[2px] border-black px-3.5 py-2.5 text-center text-sm font-semibold bg-white text-blue-700 hover:text-white hover:bg-blue-700"
    disabled={loading}
  >
    {loading ? "Sending..." : "Let's talk"}
  </button>
</div>

          {success && <p className="text-blue-700 mt-4">Email sent successfully!</p>}
          {error && <p className="text-red-400 mt-4">Failed to send email. Try again.</p>}
        </div>
      </form>
    </div>
  );
}
