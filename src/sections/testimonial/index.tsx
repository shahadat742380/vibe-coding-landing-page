"use client";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

// Import component and icons
import { Typography } from "@/components/ui/Typography";

// import images
import avatar1 from "@/assets/images/testimonials/avatar1.png";
import avatar2 from "@/assets/images/testimonials/avatar2.png";
import avatar3 from "@/assets/images/testimonials/avatar3.png";
import IcoStar from "@/assets/svg/IcoStar";
import HeadSection from "@/components/head";

const Testimonials = () => {
  const content = [
    {
      img: avatar1,
      name: "Meera Joshi",
      role: "Accountant",
      desc: "Metabola’s treatments are a blessing! I lost 6 kgs effortlessly while still enjoying my favorite foods. The team is so caring and professional—it feels like a wellness family!",
    },
    {
      img: avatar2,
      name: "Arjun Nair",
      role: "Corporate Trainer",
      desc: "I had tried everything for my stubborn belly fat, but nothing worked until I found Metabola. The CoolSculpting treatment was painless, and the results were beyond my expectations!",
    },
    {
      img: avatar3,
      name: "Sneha Kapoor",
      role: "Interior Designer",
      desc: "The Lymphatic PPC Therapy helped me feel lighter and healthier within weeks. The process was seamless, and the staff made me feel so comfortable throughout the journey.",
    },
    {
      img: avatar1,
      name: "Priya Sharma",
      role: "Marketing Professional",
      desc: "I was skeptical at first, but after just a few sessions of CoolSculpting, I started seeing a difference. The team at Metabola is incredibly supportive and knowledgeable. Highly recommended!",
    },
    {
      img: avatar2,
      name: "Ravi Kumar",
      role: "Software Engineer",
      desc: "The Collagen Bed is not only relaxing but incredibly effective. My skin feels rejuvenated, and I’ve lost inches without any hassle. Metabola’s approach is truly unique.",
    },
    {
      img: avatar3,
      name: "Divya Reddy",
      role: "Teacher",
      desc: "I’ve struggled with stubborn fat for years, and nothing worked until I tried Metabola. Their Lipo Injections were quick, painless, and gave me noticeable results in weeks. Thank you, Metabola!",
    },
  ];
  return (
    <section id="success-stories" className="py-16 md:py-20 lg:py-25 bg-light_green px-4 sm:px-6 lg:px-8 ">
      <div className="mx-auto max-w-7xl ">
       <HeadSection title="Success Stories" subtitle="Lorem ipsum dolor sit amet consectetur. Ut vitae." />
        <div className="mt-10 md:mt-12  lg:mt-16">
          <div className="relative testimonials">
            <Swiper
              slidesPerView={1}
              spaceBetween={41}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1600: {
                  slidesPerView: 3,
                  spaceBetween: 60,
                },
              }}
              loop
              modules={[Pagination, Autoplay]}
              autoplay={{
                disableOnInteraction: true,
              }}
              className="!static"
            >
              {content.map((obj, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-white duration-500 cursor-pointer rounded-2xl hover:shadow-lg overflow-hidden border border-stroke p-8">
                    <div className="flex flex-col justify-between flex-1 ">
                      <div className="flex-1">
                        <div className="flex gap-1.5 items-center">
                          {[...new Array(5)].map((star, idx) => (
                            <p key={idx}>
                              <IcoStar />
                            </p>
                          ))}
                        </div>

                        <blockquote className="flex-1 mt-4">
                          <Typography
                            variant="Regular_H6"
                            className="block text-gray_"
                          >
                            {obj?.desc}
                          </Typography>
                        </blockquote>
                      </div>

                      <div className="flex items-center mt-14 justify-between">
                        <div className="flex items-center">
                          <Image
                            src={obj?.img}
                            alt={obj.name}
                            className="rounded-full h-11 w-11"
                            height={43}
                            width={43}
                            placeholder="blur"
                          />
                          <div className="ml-4">
                            <Typography
                              variant="Bold_H6"
                              className="block text-gray_ !text-base"
                            >
                              {" "}
                              {obj?.name}
                            </Typography>
                            <Typography
                              variant="Regular_H7"
                              className="block text-gray_ text-sm mt-0.5"
                            >
                              {" "}
                              {obj?.role}
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
