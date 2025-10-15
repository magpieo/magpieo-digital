import WhatsAppChat from "@/app/components/shared/WhatsAppChat";

 

 

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
 
      {children}
      <WhatsAppChat/>


    </div>
  );
};

export default layout;
