"use client";

// import core pacakge
import Image from "next/image";

// import ui
import { Typography } from "@/components/ui/Typography";

// import images
import img1 from "@/assets/images/partner/unacademy-seeklogo.com.svg";
import img2 from "@/assets/images/partner/coursera-seeklogo.com.svg";
import img3 from "@/assets/images/partner/skillshare-seeklogo.com.svg";
import img4 from "@/assets/images/partner/Khan_Academy-Logo.wine.svg";
import img5 from "@/assets/images/partner/Udemy-Logo.wine.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";



// import required modules
import { FreeMode,  Autoplay  } from "swiper/modules";

const Partner = () => {
  return (
    <section className="bg-primary py-10 md:py-[60px] ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Typography
          variant="SemiBold_H4"
          className="text-white text-center block "
        >
          Our Students Work At
        </Typography>

        <div className="mt-14">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            freeMode={true}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex items-center justify-center !h-full"></div>
              <Image src={img1} alt="img" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center !h-full">
                <Image src={img2} alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center !h-full">
                <Image src={img3} alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center !h-full">
                <Image src={img4} alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center !h-full">
                <Image src={img5} alt="img" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <div className="flex flex-grow gap-20 justify-center items-center mt-14">
          <Image src={img1} alt="img" />
          <Image src={img2} alt="img" />
          <Image src={img3} alt="img" />
          <Image src={img4} alt="img" />
          <Image src={img5} alt="img" />
        </div> */}
      </div>
    </section>
  );
};

export default Partner;
