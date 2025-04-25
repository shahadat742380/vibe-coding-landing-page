"use client";

// import core package
import { FC, ReactElement, useState } from "react";

// import components
import { Typography } from "@/components/ui/Typography";

//  import icons
import { FaRegWindowMinimize } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

interface FaqProps {
  title: string;
  subTitle: string;
  faqContent: {
    question: string;
    answer: string;
    open: boolean;
  }[];
}

const Faq: FC<FaqProps> = ({ title, subTitle, faqContent }) => {
  const [faq, setFaq] = useState(faqContent);

  const toggleFaq = (index: number) => {
    setFaq(
      faq.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      })
    );
  };

  return (
    <section id="faq" className="py-16 md:py-20 lg:py-25 bg-light_green">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-container  ">
        <div className="text-center">
          <Typography variant="SemiBold_H3" className={`text-secondary block`}>
            {title}
          </Typography>
          <Typography variant="Regular_H6" className=" block mt-2">
            {subTitle}
          </Typography>
        </div>
        <div className="max-w-screen-md mx-auto mt-8 space-y-4 md:mt-16">
          {faq.map((item, index) => (
            <div key={index}>
              <div
                className={` transition-all duration-300 bg-white  cursor-pointer hover:bg-gray-50  py-4 px-8`}
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full "
                  onClick={() => toggleFaq(index)}
                >
                  <span
                    className={`flex text-lg md:text-xl font-semibold text-black_  !text-start`}
                  >
                    {" "}
                    {item.question}{" "}
                  </span>

                  {!item.open ? (
                    <FaPlus className="text-primary !text-2xl min-w-[20px]" />
                  ) : (
                    <FaRegWindowMinimize className="text-primary !text-2xl min-w-[20px]" />
                  )}
                </button>

                <div
                  className={`${
                    item.open ? "block " : "hidden"
                  }  mt-4 transition-all duration-500 `}
                >
                  <p
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                    className="font-medium text-gray_"
                  ></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
