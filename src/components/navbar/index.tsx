"use client";

// ** import core package
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ** import third party package
import { Menu, X } from "react-feather";

// import Logo
import { Logo } from "@/assets/svg";

// import Ui
import BtnPrimary from "../ui/BtnPrimary";

// import jotai
import { useSetAtom } from "jotai";
import { openModalAtom } from "@/app/jotaiStore";

const sectionIds: { [key: string]: string } = {
  home: "home",
  aboutUs: "about-us",
  successStories: "success-stories",
  courses: "courses",
  faq: "faq",
  contactUs: "contact-us",
};

const navLinks = [
  { section: "home", text: "Home" },
  { section: "aboutUs", text: "About us" },
  { section: "successStories", text: "Success Stories" },
  { section: "courses", text: "Courses" },
  { section: "faq", text: "FAQ" },
  { section: "contactUs", text: "Contact us" },
];

const Navbar = () => {
  const location = usePathname();
  const setOpenModal = useSetAtom(openModalAtom);

  function getInitialActiveSection() {
    return location === "/blog" ? "blog" : "home";
  }

  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(getInitialActiveSection());

  const handleScroll = () => {
    const targetHeight = window.innerHeight / 2;
    for (const [section, id] of Object.entries(sectionIds)) {
      const sectionElement = document?.getElementById(id);
      const rect = sectionElement?.getBoundingClientRect();
      if (
        rect?.top &&
        rect?.top <= targetHeight &&
        rect?.bottom &&
        rect?.bottom >= targetHeight
      ) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    const handleLocationChange = () => {
      setActiveSection(location === "/blog" ? "blog" : "home");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "unset";
  }, [expanded]);

  const getNavLinkClass = (sectionName: string) =>
    activeSection === sectionName ? "text-primary font-medium" : "text-black_";

  return (
    <header className="py-4 bg-white shadow-md !z-[9999] sticky top-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 z-20">
            <Link href="/" className="text-primary_ flex gap-3 items-center">
              <Logo />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              className="text-black_"
              type="button"
              onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
              aria-expanded={expanded}
            >
              <span
                style={{ display: expanded ? "none" : "block" }}
                aria-hidden="true"
              >
                <Menu className="text-accent" />
              </span>

              <span
                style={{ display: expanded ? "block" : "none" }}
                aria-hidden="true"
              >
                <X className="text-accent" />
              </span>
            </button>
          </div>
          {/* desktop nav */}
          <div className="hidden lg:flex lg:gap-8 xl:gap-10 lg:items-center lg:justify-center">
            {navLinks.map((link) => (
              <Link
                href={
                  location === "/"
                    ? `#${sectionIds[link.section]}`
                    : `/#${sectionIds[link.section]}`
                }
                key={link.section}
              >
                <div
                  className={`${getNavLinkClass(
                    link.section
                  )} hover:text-primary duration-500`}
                >
                  {link.text}
                </div>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-end ">
            <Link href="/signin">
              <BtnPrimary
                variant="secondary"
                content="Sign in"
                className="!px-6 border-none w-full"
              />
            </Link>
            <Link href="/signup">
              <BtnPrimary content="Sign Up" className="!px-6 w-full" />
            </Link>
          </div>
        </div>

        {/*  Mobile nav */}
        <nav
          className={`absolute ${
            expanded ? "flex lg:hidden " : "hidden"
          }  left-0 w-full  max-lg:h-[calc(100dvh-45px)] !z-[9999999] !bg-white overflow-x-hidden   flex-col `}
        >
          <div className="px-5 py-6 flex-grow">
            {navLinks.map((link) => (
              <Link
                onClick={() => setExpanded(false)}
                className="block text-[20px] font-semibold mt-4 md:mt-10"
                href={`#${sectionIds[link.section]}`}
                key={link.section}
              >
                <h1 className="text-primaryBlack">{link.text}</h1>
              </Link>
            ))}
          </div>

          <div className="shadow-t p-6 grid grid-cols-2 gap-4">
            <Link href="/signin">
              <BtnPrimary
                variant="secondary"
                content="Sign in"
                className="!px-6 border-none w-full"
              />
            </Link>
            <Link href="/signup">
              <BtnPrimary content="Sign Up" className="!px-6 w-full" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
