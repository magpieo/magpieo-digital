import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <div className="bg-[#110F0F]">
        <Footer />
      </div>
    </div>
  );
};

export default layout;
