/* eslint-disable react/no-unescaped-entities */
// import core package
import React from "react";
import Link from "next/link";
import Image from "next/image";

// import images
import image from "@/assets/images/about/about.webp";

// import ui
import { Typography } from "@/components/ui/Typography";
import BtnPrimary from "@/components/ui/BtnPrimary";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="py-16 md:py-20  px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1146px]  grid grid-cols-1 gap-10 md:gap-20 md:grid-cols-2 items-center">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={image}
            height={142}
            width={516}
            alt="about image"
            className="object-cover w-full"
          />
        </div>
        <div>
          <Typography
            variant="SemiBold_H3"
            className="text-secondary mt-2 block"
          >
            Why Vibe Coding <br /> is Built for You
          </Typography>
          <Typography
            variant="Regular_H6"
            className="block mt-6 text-black_ max-w-[470px]"
          >
            At Vibe Coding, we combine live interactive sessions, expert
            mentorship, and hands-on projects to deliver real-world coding
            skills. Whether you're a student, jobseeker, or career switcher, our
            hybrid learning model fits your schedule and your goals. Learn from
            the best, at your own pace, without breaking the bank.
          </Typography>

          <div className="mt-10">
            <Link href="/signup">
              <BtnPrimary variant="secondary" content="Join Now" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
