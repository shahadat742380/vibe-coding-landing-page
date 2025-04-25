// import sections and components
import Banner from "@/components/banner";
import AboutUs from "@/sections/aboutUs";
import CoursesSection from "@/sections/courses";
import Faq from "@/sections/Faq";
import Hero from "@/sections/hero";
import JoinSection from "@/sections/join";
import Partner from "@/sections/partner";
import PromiseSection from "@/sections/promise";
import Testimonials from "@/sections/testimonial";

export default function Home() {
  const faqContent = [
    {
      question: "What is the course format?",
      answer:
        "Our courses combine live online sessions with recorded content, assignments, and real-world projects. Live sessions are held twice a week, and you get lifetime access to recorded content.",
      open: true,
    },
    {
      question: "Do I get a certificate upon completion?", 
      answer:
        "Yes, you receive a verified certificate upon completing the course requirements, including projects and assignments.",
      open: false,
    },
    {
      question: "What if I miss a live session?",
      answer:
        "All live sessions are recorded and made available within 24 hours. You can watch them at your convenience and ask questions in our community forum.",
      open: false,
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes, we offer a 7-day money-back guarantee if you're not satisfied with the course content.",
      open: false,
    },
    {
      question: "Do you provide placement assistance?",
      answer:
        "Yes, we provide interview preparation, resume reviews, and connect you with our hiring partners upon course completion.",
      open: false,
    },
  ];
  return (
    <main>
      <Hero />
      <AboutUs />
      <PromiseSection />
      <Partner />
      <JoinSection />
      <Testimonials />
      <CoursesSection />
      <Banner />
      <Faq
        title={"Frequently Asked Questions"}
        subTitle="Got Questions? We've Got Answers!"
        faqContent={faqContent}
      />
    </main>
  );
}
