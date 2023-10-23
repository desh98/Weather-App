import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Login from "./Login";

const Signup = () => {

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
  
      
      setTimeout(() => {
        setLoading(false);
  
        
        console.log("Form submitted with data:", form);
      }, 1500); // Simulating an API call delay of 1.5 seconds
    };

  return (

    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      {/* main container */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[1] p-8 rounded-2xl container shadow-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white'
      >
        
        {/* Header */}
        <div className="flex justify-center mb-6">
          <h2 className="text-2xl font-bold">SignUp</h2>
        </div>

        {/* Form starts here */}
        <form ref={formRef} onSubmit={(e)=>handleSubmit(e)} className="flex flex-col gap-4">

          {/* Email */}
          <label className="flex flex-col">
            <span className="text-white mb-2">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="py-2 px-4 rounded border bg-white border-primary text-black outline-none"
              required
            />
          </label>

          {/* Password */}
          <label className="flex flex-col">
            <span className="text-white mb-2">Password</span>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="py-2 px-4 rounded border bg-white border-primary text-black outline-none"
              required
            />
          </label>

          {/* Re-enter password */}
          <label className="flex flex-col">
            <span className="text-white mb-2">Re-enter Password</span>
            <input
              type="password"
              name="reenterPassword"
              value={form.reenterPassword}
              onChange={handleChange}
              className="py-2 px-4 rounded border bg-white border-primary text-black outline-none"
              required
            />
          </label>

          {/* Sign up button */}
          <button
            type="submit"
            className={`py-2 px-4 rounded border-2 mt-8 text-white font-bold ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700 hover:text-grey-600"
            }`}
            disabled={loading}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
          <span className="text-sm text-white mt-2">Already have an account? <a href={Login} className="underline">Login</a></span>
          
        </form>
      </motion.div>
      
      {/* Earth canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto hidden md:block h-screen'
      >
        
        <EarthCanvas />
      </motion.div>
    </div>

  );
};

export default SectionWrapper(Signup, "Signup");
