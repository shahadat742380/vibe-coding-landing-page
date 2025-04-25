"use client";

// import core package
import Image from "next/image";

// import images
import bg from "@/assets/images/banner/banner.webp";

// import component
import { Typography } from "@/components/ui/Typography";
import BtnPrimary from "../ui/BtnPrimary";
import Link from "next/link";

const Banner = () => {

  return (
    <section className="relative overflow-hidden bg-black py-10 sm:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="Background image"
          className="h-full w-full object-cover object-right  md:origin-top-left"
          placeholder="blur"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r  from-primary via-primary/80 to-transparent w-[90%] "></div>

      <div className="relative mx-auto max-w-7xl ">
        <div className="max-w-[400px]">
          <Typography
            variant="SemiBold_H3"
            className={`block leading-tight text-white `}
          >
            Ready to Start Your Coding Journey?
          </Typography>
          <Typography
            variant="Regular_H5"
            className="mt-4 block max-w-[470px] text-white"
          >
            Join thousands of students learning to code with Vibe Coding
          </Typography>

          <div className="mt-10 flex gap-4">
            <Link href="/signup">
              <BtnPrimary content="Get Started Now" className="bg-white text-primary" />
            </Link>
            <Link href="#courses">
              <BtnPrimary variant="secondary" content="Browse Courses" className="text-white border-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
