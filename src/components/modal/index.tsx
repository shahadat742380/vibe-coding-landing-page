"use client";

// import core component
import React from "react";
import Link from "next/link";

// import third party package
import { RxCross2 } from "react-icons/rx";
import PhoneInput from "react-phone-input-2";
import toast from "react-hot-toast";
import "react-phone-input-2/lib/style.css";

// import component
import { Typography } from "../ui/Typography";

// import jotai
import { useAtomValue, useSetAtom } from "jotai";
import { openModalAtom } from "@/app/jotaiStore";

// import jotai and hook form
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ** define validation schema using zod **
const contactSchema = z.object({
  first_name: z.string().min(1, "First Name is required"),
  last_name: z.string().min(1, "Last Name is required"),
  phone: z.string().min(10, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy and terms.",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactModal = () => {
  const openModal = useAtomValue(openModalAtom);
  const setOpenModal = useSetAtom(openModalAtom);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);
    setOpenModal(false);
    toast.success("From is successfully submit....");
    reset();
  };

  return (
    <>
      {openModal && (
        <div className="fixed inset-0 z-[99] w-full overflow-y-auto">
          <div className="flex min-h-screen w-full bg-gray-900/40 px-4 pb-16 pt-28 justify-center">
            <div className="relative inline-block w-full transform mx-auto bg-white p-6 md:p-12 shadow-xl transition-all sm:my-8 sm:align-middle rounded-2xl md:w-[678px]">
              <div>
                <Typography
                  variant="SemiBold_H3"
                  className="text-primary text-center block"
                >
                  Contact us
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className="text-dark_gray text-center block mt-2"
                >
                  Our friendly team would love to hear from you.
                </Typography>

                <div className="mt-10">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="font-oracle mt-8 space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="mb-[6px] text-dark_gray">First name</p>
                        <input
                          {...register("first_name")}
                          type="text"
                          placeholder="First name"
                          className="block w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                        {errors.first_name && (
                          <p className="text-red-600 mt-1">
                            {errors.first_name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <p className="mb-[6px] text-dark_gray">Last name</p>
                        <input
                          {...register("last_name")}
                          type="text"
                          placeholder="Last name"
                          className="block w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                        {errors.last_name && (
                          <p className="text-red-600 mt-1">
                            {errors.last_name.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="mb-[6px] text-dark_gray">Phone number</p>
                        <Controller
                          name="phone"
                          control={control}
                          render={({ field }) => (
                            <PhoneInput
                              {...field}
                              country={"us"}
                              placeholder="+1 (555) 000-0000"
                            />
                          )}
                        />
                        {errors.phone && (
                          <p className="text-red-600 mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <p className="mb-[6px] text-dark_gray">Email</p>
                        <input
                          {...register("email")}
                          type="text"
                          placeholder="you@company.com"
                          className="block w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                        {errors.email && (
                          <p className="text-red-600 mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="mb-[6px] text-dark_gray">Message</p>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Enter your message here"
                        className="w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary flex items-center justify-between"
                      />
                      {errors.message && (
                        <p className="text-red-600 mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <div className="flex gap-3 items-center">
                        <input
                          id="terms"
                          type="checkbox"
                          {...register("terms")}
                          className="cursor-pointer h-5 w-5 !rounded-lg"
                        />
                        <label
                          htmlFor="terms"
                          className="text-dark_gray cursor-pointer"
                        >
                          You agree to our friendly{" "}
                          <Link
                            href="/privacy-policy"
                            target="_blank"
                            className="text-primary"
                          >
                            Privacy policy
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="/terms-conditions"
                            target="_blank"
                            className="text-primary"
                          >
                            Terms & Condition
                          </Link>
                        </label>
                      </div>
                      {errors.terms && (
                        <p className="text-red-600 mt-1 ml-2">
                          {errors.terms.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="submit"
                        value="Send message"
                        className="w-full text-center cursor-pointer bg-primary text-white font-semibold py-2 md:py-[14px] text-base md:text-xl rounded-md"
                      />
                    </div>
                  </form>
                </div>
              </div>

              {/* Close button */}
              <div className="absolute -right-4 -top-4">
                <div
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  className="h-10 w-10 cursor-pointer rounded-full bg-primary flex justify-center items-center text-white"
                >
                  <RxCross2 className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
