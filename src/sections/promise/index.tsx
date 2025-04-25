import React, { ReactElement } from "react";
import { Typography } from "../../components/ui/Typography";
import HeadSection from "../../components/head";
import IcoExpert from "@/assets/svg/ico-expert";
import IcoLearn from "@/assets/svg/ico-learn";
import IcoCareer from "@/assets/svg/ico-career";
import IcoCommunity from "@/assets/svg/ico-community";

interface FeatureCardProps {
  icon: ReactElement;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-primary text-4xl mb-4">{icon}</div>
      <Typography variant="SemiBold_H4" className="block mb-1">
        {title}
      </Typography>
      <Typography variant="Regular_H6" className="text-gray block">
        {description}
      </Typography>
    </div>
  );
};

const PromiseSection = () => {
  const features = [
    {
      icon: <IcoExpert />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience",
    },
    {
      icon: <IcoLearn />,
      title: "Practical Learning",
      description:
        "Build real-world projects that you can add to your portfolio",
    },
    {
      icon: <IcoCareer />,
      title: "Career Support",
      description: "Get guidance on job preparation and placement assistance",
    },
    {
      icon: <IcoCommunity />,
      title: "Community",
      description: "Join a vibrant community of learners and mentors",
    },
  ];

  return (
    <section className="py-16 lg:pt-32 lg:pb-24 md:py-20 px-4 sm:px-6 lg:px-8 bg-light_green">
      <div className="max-w-7xl mx-auto">
        <HeadSection
          title="Our Promise to Every Learner"
          subtitle="Lorem ipsum dolor sit amet consectetur. Ut vitae."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
