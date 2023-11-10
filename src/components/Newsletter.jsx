"use client";

import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Newsletter = () => {
  return (
    <section
      id="contact"
      className=" bg-newsletter bg-fixed h-[480px] section bg-cover w-full bg-center bg-no-repeat"
    >
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-center h-full">
          {/* text */}
          <SectionHeader
            pretitle="Get in touch"
            title="Sign up to our newsletter"
          />
          {/* input */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="relative flex items-center w-full max-w-lg"
          >
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-[64px] outline-none rounded-full bg-primary/60 backdrop-blur-[15px] px-8"
            />
            <button
              type="submit"
              className="absolute bg-accent right-2 h-[46px] rounded-full text-[15px] hover:bg-accent-hover transition-all px-6"
            >
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
