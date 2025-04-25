/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import Image from "next/image";
import signupImage from "@/assets/images/auth/signup.webp";
import { Logo } from "@/assets/svg";
import { Typography } from "@/components/ui/Typography";
import { ChevronLeft } from "react-feather";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/signin");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Illustration */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src={signupImage}
          placeholder="blur"
          alt="signup"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex flex-col bg-[#F0FDF9] px-6 py-10 md:px-16">
        <div className="relative flex items-center justify-center mb-8">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          <div className="absolute left-0">
            <Link
              href="/"
              className="ml-auto flex items-center text-black_ font-medium"
            >
              <ChevronLeft className="text-primary h-6 w-6 mr-2" />
              <span className="hidden lg:block">Go Back</span>
            </Link>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-6">
              <Typography
                variant="Bold_H4"
                className="mb-1 text-center text-primary block"
              >
                Create your account
              </Typography>
              <Typography variant="Regular_H6" className="text-black_ block">
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
            </div>

            <div className="bg-white py-8 px-6 shadow-sm rounded-xl">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <Typography
                    variant="Medium_H6"
                    className="block mb-2 text-black_"
                  >
                    Full Name
                  </Typography>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none border-stroke focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Typography
                    variant="Medium_H6"
                    className="block mb-2 text-black_"
                  >
                    Email ID
                  </Typography>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none border-stroke focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <Typography
                    variant="Medium_H6"
                    className="block mb-2 text-black_"
                  >
                    Phone Number
                  </Typography>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none border-stroke focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <Typography
                    variant="Medium_H6"
                    className="block mb-2 text-black_"
                  >
                    Password
                  </Typography>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none border-stroke focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Create password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.00043 10.3431 9.00043 12C9.00043 13.6569 10.3435 15 12.0004 15Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex items-center cursor-pointer pt-2 gap-2">
                  <Checkbox id="terms" name="terms" required />
                  <label htmlFor="terms" className="cursor-pointer">
                    <Typography
                      variant="Regular_H6"
                      className="text-black_"
                    >
                      I agree to the{" "}
                      <Link
                        href="#"
                        className="text-primary hover:text-primary-dark"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="#"
                        className="text-primary hover:text-primary-dark"
                      >
                        Privacy Policy
                      </Link>
                    </Typography>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  <Typography variant="Medium_H6" disableSelect={true}>
                    Create Account
                  </Typography>
                </button>
              </form>

              <div className="flex items-center justify-center mt-6">
                <Typography variant="Regular_H6" className="text-gray-600">
                  Already have an account?
                </Typography>
                <Link href="/signin" className="ml-1">
                  <Typography variant="Medium_H6" className="text-primary">
                    Sign in
                  </Typography>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
