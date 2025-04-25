// ** import core package
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import { Typography } from '../ui/Typography';

// ** import components

interface ComponentProps {
  title: string;
  subTitle: string;
  image: StaticImageData;
}

const AlertPageComponent: FC<ComponentProps> = ({ title, subTitle, image }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-primary-foreground px-5">
      <div className="md:w-1/2 d-flex justify-center items-center  flex-col">
        <div className="flex items-center justify-center w-full">
          <Image
            src={image}
            alt="Not found image"
            height={500}
            width={500}
            placeholder="blur"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <Typography
            variant="SemiBold_H3"
            className="block text-primary text-center mt-16"
          >
            {title}
          </Typography>
          <Typography
            variant="Regular_H4"
            className="block text-black_ text-center "
          >
            {subTitle}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AlertPageComponent;
