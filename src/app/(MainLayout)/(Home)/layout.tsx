import Navbar from "@/app/components/shared/Navbar";

 

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
 <Navbar/>
      {children}
    </div>
  );
};

export default layout;
