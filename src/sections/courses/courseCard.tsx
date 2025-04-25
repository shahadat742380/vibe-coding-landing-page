import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { Typography } from "@/components/ui/Typography";

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  level: string;
  image: StaticImageData;
  slug: string;
}

export function CourseCard({
  title,
  description,
  price,
  duration,
  level,
  image,
  slug,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-stroke overflow-hidden shadow-md transition-shadow duration-200">
      <div className="relative h-48">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#00856A]">
          <Typography variant="Medium_H7">{level}</Typography>
        </div>
      </div>
      <div className="p-6">
        <Typography variant="Bold_H5" className="mb-2 text-secondary">
          {title}
        </Typography>
        <Typography
          variant="Regular_H6"
          className="mb-4 mt-2 block line-clamp-2 text-gray"
        >
          {description}
        </Typography>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray">
            <div className="mr-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_13567_812)">
                  <path
                    d="M10 6.66667V10L12.5 12.5M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                    stroke="black"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13567_812">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <Typography variant="Regular_H7">{duration}</Typography>
          </div>
          <Typography variant="Bold_H4" className="text-primary">
            {price}
          </Typography>
        </div>
        <Link
          href={`#`}
          className="block w-full text-center bg-primary text-white py-2 rounded-lg transition-colors duration-200"
        >
          <Typography variant="Medium_H6" disableSelect={true}>
            Buy now
          </Typography>
        </Link>
      </div>
    </div>
  );
}
