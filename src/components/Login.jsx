import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const hardcodedEmail = "user@example.com";
    const hardcodedPassword = "password123";

    const enteredEmail = form.email;
    const enteredPassword = form.password;

    // Check if entered email and password match hardcoded credentials
    if (enteredEmail === hardcodedEmail && enteredPassword === hardcodedPassword) {
      // Successful login, navigate to weather screen
      navigate("/weather"); // Use navigate to redirect to the weather screen
    } else {
      // Incorrect credentials, display error message
      console.log("Incorrect email or password. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[1] p-8 rounded-2xl container shadow-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white'
      >
        <div className="flex justify-center mb-6">
          <h2 className="text-2xl font-bold">Login</h2>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          <button
            type="submit"
            className={`py-2 px-4 rounded border-2 mt-8 text-white font-bold ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700 hover:text-grey-600"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className='gap-1 flex flex-col'>
          <span>Email = user@example.com</span>
          <span>Password = password123</span>
          </div>

        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto hidden md:block h-screen'
      >
        <EarthCanvas />
      </motion.div>
      <div><StarsCanvas /></div>
    </div>
  );
};

export default SectionWrapper(Login, "login");
