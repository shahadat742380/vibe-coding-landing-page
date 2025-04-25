/* eslint-disable react/no-unescaped-entities */
"use client";

// ** import core package
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

// import ui component
import { Typography } from "../ui/Typography";

// import Logo

// import icons
// import twitter from "@/assets/icons/social/twitter.svg";
// import facebook from "@/assets/icons/social/facebook.svg";
// import linkedine from "@/assets/icons/social/linkedin.svg";
// import instagram from "@/assets/icons/social/instagram.svg";

// import config
import { config } from "@/config";

// import jotai
import { useSetAtom } from "jotai";
import { openModalAtom } from "@/app/jotaiStore";

// import jotai and hook form
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import IcoFooterLogo from "@/assets/svg/ico-footer-logo";
import IcoTwitter from "@/assets/svg/ico-twitter";
import IcoFacebook from "@/assets/svg/ico-facebook";
import IcoLinkedin from "@/assets/svg/ico-linkedin";
import IcoInstagram from "@/assets/svg/ico-instagram";
// ** define validation schema using zod **
const contactSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Footer = () => {
  const location = usePathname();
  const setOpenModal = useSetAtom(openModalAtom);
  const currentYear = new Date().getFullYear();

  const handleNavigation = (section: string) => {
    // Redirect to home page with a hash anchor link
    window.location.href = `/#${section}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);
    setOpenModal(false);
    toast.success("From is successfully submit....");
    reset();
  };

  return (
    <footer className="py-8 sm:pt-16 lg:pt-20 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col  justify-center space-y-10 lg:flex-row lg:items-start lg:justify-between lg:space-y-0">
          <div className="shrink-0 max-w-[300px]">
            <IcoFooterLogo />
            <Typography
              variant="Regular_H6"
              className={`block mt-4 text-white`}
            >
              Master coding skills with India's most affordable hybrid seminar.
            </Typography>
            <div className="mt-4">
              <Typography
                variant="Regular_H6"
                className={`block text-white`}
                link={config.PHONE}
              >
                <span className="text-white">Ph. No:</span> +91 1234567890
              </Typography>
              <Typography
                variant="Regular_H6"
                className={`block  text-white`}
                link={config.EMAIL}
              >
                <span className="text-white">Email:</span>{" "}
                support@vibecoding.com
              </Typography>
            </div>
            <div className="flex gap-4 mt-6">
              <Link target="_blank" href={config.TWITTER_URL}>
                <IcoTwitter />
              </Link>
              <Link target="_blank" href={config.FACEBOOK_URL}>
                <IcoFacebook />
              </Link>
              <Link target="_blank" href={config.INSTAGRAM_URL}>
                <IcoInstagram />
              </Link>
              <Link target="_blank" href={config.LINKEDIN_URL}>
                <IcoLinkedin />
              </Link>
            </div>
          </div>

          <div className="flex justify-between md:justify-start gap-10 md:gap-32">
            {/* Links */}
            <nav>
              <Typography
                variant="Medium_H5"
                className=" mb-8 block text-white"
              >
                Links
              </Typography>
              <ul className="space-y-4 text-white">
                <li>
                  <button
                    onClick={() => handleNavigation("home")}
                    className="block text-base   transition-all duration-200 hover:translate-x-1 "
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("about-us")}
                    className="block text-base   transition-all duration-200 hover:translate-x-1 "
                  >
                    About us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("courses")}
                    className="block text-base   transition-all duration-200 hover:translate-x-1 "
                  >
                    Courses
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("success-stories")}
                    className="block text-base   transition-all duration-200 hover:translate-x-1 "
                  >
                    Success Stories
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("faq")}
                    className="block text-base   transition-all duration-200 hover:translate-x-1 "
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </nav>

            {/* Other Links */}
            <nav>
              <Typography
                variant="Medium_H5"
                className=" mb-8 block text-white"
              >
                Legal
              </Typography>
              <ul className="space-y-4 text-white">
                <li>
                  <Link
                    href="#"
                    target="_blank"
                    className="block text-base   transition-all duration-200 hover:translate-x-1 "
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    target="_blank"
                    className="block text-base   transition-all duration-200 hover:translate-x-1 "
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    target="_blank"
                    className="block text-base   transition-all duration-200 hover:translate-x-1 "
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    target="_blank"
                    className="block text-base   transition-all duration-200 hover:translate-x-1 "
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="shrink-0 ">
            <div className="">
              <div className="max-w-[300px]">
                <Typography variant="Medium_H5" className={`block text-white`}>
                  Newsletter
                </Typography>
              </div>

              <div className="mt-6 md:max-w-[306px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("email")}
                    type="text"
                    className="w-full rounded-lg border-stroke border py-3 px-4 "
                    placeholder="Enter your email address "
                  />
                  {errors.email && (
                    <p className="text-red-600 mt-1">{errors.email.message}</p>
                  )}
                  <button
                    type="submit"
                    className="bg-gray w-full py-3 rounded-lg text-white mt-4 text-base md:text-lg"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/50 pt-8 sm:mt-16 lg:mt-20">
          <div className="text-center">
            <Typography variant="Regular_H6" className=" text-white block">
              © {currentYear} Vibecoding. All rights reserved.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
