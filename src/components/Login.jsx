import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Login = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
      email: "",
      password: "",
    });
  
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      const { target } = e;
      const { name, value } = target;
  
      setForm({
        ...form,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
  
      // Simulate API call for authentication (replace this with your authentication logic)
      setTimeout(() => {
        setLoading(false);
  
        // Check credentials and redirect if successful
        // For example, redirect to dashboard page if authentication is successful
        // window.location.href = "/dashboard";
  
        // For now, just log the form data
        console.log("Form submitted with data:", form);
      }, 1500); // Simulating an API call delay of 1.5 seconds
    };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] p-8 rounded-2xl container mx-auto shadow-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white'
      >
         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="text-gray-600 mb-2">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="py-2 px-4 rounded border border-gray-300 outline-none"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-600 mb-2">Password</span>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="py-2 px-4 rounded border border-gray-300 outline-none"
              required
            />
          </label>
          <button
            type="submit"
            className={`py-2 px-4 rounded border-2 text-white font-bold ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto hidden md:block'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Login, "Login");
