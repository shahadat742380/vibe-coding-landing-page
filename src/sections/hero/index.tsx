/* eslint-disable react/no-unescaped-entities */
// import core package
import Image from "next/image";
import React from "react";

// import component
import { Typography } from "@/components/ui/Typography";
import BtnPrimary from "@/components/ui/BtnPrimary";

// import image
import img from "@/assets/images/hero/hero.webp";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-20 lg:pt-32 lg:pb-40 bg-light_green px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className=" max-w-lg">
            <Typography variant="SemiBold_H1" className="block  text-secondary">
              Master Coding with India's Hybrid Seminar
            </Typography>
            <ul className="mt-6  text-left">
              <li className="flex items-center">
                <Typography variant="Regular_H4" className="text-black_">
                  • Live & Recorded
                </Typography>
              </li>
              <li className="flex items-center">
                <Typography variant="Regular_H4" className="text-black_">
                  • Starting at ₹299
                </Typography>
              </li>
              <li className="flex items-center">
                <Typography variant="Regular_H4" className="text-black_">
                  • Lifetime Community
                </Typography>
              </li>
            </ul>

            <div className="flex  gap-4 justify-start mt-8">
              <Link href="/signup">
                <BtnPrimary content="Join Now" />
              </Link>
              <Link href="#courses">
                <BtnPrimary variant="secondary" content="Explore Courses" />
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block rounded-2xl overflow-hidden">
            <Image
              src={img}
              alt="Students learning to code"
              width={600}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
      <div className="wave-shape">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full !h-10 md:h-auto"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
