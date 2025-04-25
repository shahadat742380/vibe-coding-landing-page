// ** import image
import notFound from "@/assets/images/auth/404.webp";

// ** import component
import AlertPageComponent from "@/components/alert-page";

const NotFound = () => {
  return (
    <main>
      <AlertPageComponent
        title="Page not found!"
        subTitle="The requested URL error was not found on this server.!"
        image={notFound}
      />
    </main>
  );
};

export default NotFound;
