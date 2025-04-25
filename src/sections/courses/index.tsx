import React from "react";
import { CourseCard } from "./courseCard";
import HeadSection from "@/components/head";

import img1 from "@/assets/images/course/img-1.webp"
import img2 from "@/assets/images/course/img-2.webp"
import img3 from "@/assets/images/course/img-3.webp"

const CoursesSection = () => {
  const courses = [
    {
      title: "Web Development Fundamentals",
      description:
        "Learn HTML, CSS, and JavaScript from scratch. Build responsive websites and modern web applications.",
      price: "₹299",
      duration: "8 weeks",
      level: "Beginner",
      image: img1,
      slug: "web-development-fundamentals",
    },
    {
      title: "Full Stack Development",
      description:
        "Master both frontend and backend development. Learn React, Node.js, and MongoDB.",
      price: "₹499",
      duration: "12 weeks",
      level: "Intermediate",
      image: img2,
      slug: "full-stack-development",
    },
    {
      title: "Advanced JavaScript",
      description:
        "Deep dive into JavaScript. Learn advanced concepts, patterns, and modern ES6+ features.",
      price: "₹399",
      duration: "6 weeks",
      level: "Advanced",
      image: img3,
      slug: "advanced-javascript",
    },
  ];
  return (
    <section
      id="courses"
      className="py-16 lg:pt-32 lg:pb-24 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <HeadSection
          title="Our Courses"
          subtitle="Lorem ipsum dolor sit amet consectetur. Ut vitae."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
