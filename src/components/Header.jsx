"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import NavMobile from "./NavMobile";
import Nav from "./Nav";
import MenuBtn from "./MenuBtn";
import SocialIcons from "./SocialIcons";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-full transition-all ${
        active ? "bg-[#030315] py-6" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        {/* Logo */}
        <Link
          href={"#"}
          className=" relative flex w-[226px] h-[38px] transition-all mb-4 xl:mb-0"
        >
          <Image
            src={"/assets/header/logo.svg"}
            fill
            className=" object-contain"
          />
        </Link>
        {/* nav */}
        <Nav containerStyles="hidden xl:flex items-center gap-x-8" />
        {/* nav mobile */}
        <NavMobile />
        {/* menu button */}
        <div className=" absolute right-7 top-9 z-10 xl:hidden">
          <MenuBtn />
        </div>
        {/* socials */}
        <SocialIcons />
      </div>
    </header>
  );
};

export default Header;
