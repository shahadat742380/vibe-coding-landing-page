import React from "react";
import { Typography } from "../../components/ui/Typography";
import HeadSection from "../../components/head";
import joinImg from "@/assets/images/join/join.webp";
import Image from "next/image";
import IcoStudents from "@/assets/svg/ico-students";
import IcoCareer2 from "@/assets/svg/ico-career-2";
import IcoDeveloper from "@/assets/svg/ico-developer";
import IcoEntrepreneurs from "@/assets/svg/ico-entrepreneurs";

interface AudienceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AudienceItem: React.FC<AudienceItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start mb-10">
      <div className="mr-8 mt-2 text-primary">{icon}</div>
      <div>
        <Typography variant="SemiBold_H4" className="block mb-3">
          {title}
        </Typography>
        <Typography variant="Regular_H6" className="text-gray block">
          {description}
        </Typography>
      </div>
    </div>
  );
};

const JoinSection = () => {
  const audienceGroups = [
    {
      icon: <IcoStudents />,
      title: "Students",
      description: "Build a strong foundation in coding while still in college",
    },
    {
      icon: <IcoCareer2 />,
      title: "Career Switchers",
      description: "Transition to tech from any background",
    },
    {
      icon: <IcoDeveloper />,
      title: "Developers",
      description: "Level up your skills with advanced courses",
    },
    {
      icon: <IcoEntrepreneurs />,
      title: "Entrepreneurs",
      description: "Learn to build and manage tech products",
    },
  ];

  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <HeadSection
          title="Who Should Join?"
          subtitle="Lorem ipsum dolor sit amet consectetur. Ut vitae."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="order-2 lg:order-1 lg:col-span-4 space-y-6 lg:mr-10">
            {audienceGroups.map((item, index) => (
              <AudienceItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="order-1 lg:order-2 lg:mt-0 lg:col-span-8 ">
            <div className=" rounded-2xl overflow-hidden">
              <Image
                src={joinImg}
                alt="Group of students"
                className="w-full h-auto"
                width={870}
                height={577}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
