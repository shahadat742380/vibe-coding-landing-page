import React from "react";
import { Typography } from "../ui/Typography";

interface HeadSectionProps {
  title?: string;
  subtitle?: string;
}

const HeadSection: React.FC<HeadSectionProps> = ({
  title = "Impact Created",
  subtitle = "We help keep your business stay healthy inside out!",
}) => {
  return (
    <div className="text-center">
      <Typography variant="SemiBold_H3" className="block">
        {title}
      </Typography>
      <Typography variant="Regular_H5" className="block mt-2">
        {subtitle}
      </Typography>
    </div>
  );
};

export default HeadSection;
