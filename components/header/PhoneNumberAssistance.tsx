import React from "react";
import { phoneNumberAssistance } from "../../app/constants";

const PhoneNumberAssistance = () => {
  return (
    <div className="ml-auto md:w-48 hidden md:flex flex-col place-items-end">
      <span className="font-bold md:text-xl">{phoneNumberAssistance}</span>
      <span className="font-semibold text-sm text-gray-400">
        Assistance 24/7
      </span>
    </div>
  );
};

export default PhoneNumberAssistance;
