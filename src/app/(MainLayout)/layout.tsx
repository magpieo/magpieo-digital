import { Toaster } from "react-hot-toast";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import WhatsAppChat from "../components/shared/WhatsAppChat";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#000", 
            color: "#fff", 
          },
          success: {
            iconTheme: {
              primary: "#4ade80", 
              secondary: "#000", 
            },
          },
          error: {
            iconTheme: {
              primary: "#f87171", 
              secondary: "#000",
            },
          },
        }}
      />
      <Navbar />
      {children}
      <WhatsAppChat/>
      <div className="bg-[#110F0F]">
        <Footer />
      </div>
    </div>
  );
};

export default layout;
