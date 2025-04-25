import React from "react";
import IcoFooterLogo from "@/assets/svg/ico-footer-logo";
import IcoNotification from "@/assets/svg/ico-notification";
import IcoAvatar from "@/assets/svg/ico-avatar";
import AlertPageComponent from "@/components/alert-page";
import image from "@/assets/images/auth/dashboard.webp";
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-emerald-600 text-white py-3 px-4 lg:px-8 flex justify-between items-center">
        <div>
          <IcoFooterLogo className="h-9 w-auto" />
        </div>
        <div className="flex items-center gap-4">
          <IcoNotification />
          <IcoAvatar />
        </div>
      </header>
      <div className="lg:mt-16">
        <AlertPageComponent
          image={image}
          title="We are launching soon!"
          subTitle="Our website is opening soon. please register to get notified when it’s ready!"
        />
      </div>
    </div>
  );
};

export default Dashboard;
