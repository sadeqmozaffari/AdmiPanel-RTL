import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex justify-center items-center mt-40 mb-5">
        <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white  dark:bg-secondary-dark-bg rounded-full border-2 border-white"></div>
        </div>
      </div>
      <p className="font-semibold text-lg  text-gray-500  dark:text-gray-200">
        لطفا کمی صبر کنید...
      </p>
    </div>
  );
};

export default Loading;
