 
 
import React from "react";

const Loading = () => {
  return (
    <div className="bg-black/10  h-screen fixed inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
      {/* <Spinner size="lg" /> */}

      {/* <Spinner color="warning" label="Loading"   /> */}
      <p>Loading</p>
    </div>
  );
};

export default Loading;
