import React from "react";

type TDynamicHeading = {
  heading: string;
  subHeading: string;
};
const DynamicTitle: React.FC<TDynamicHeading> = ({ heading, subHeading }) => {
  return (
    <div className="lg:mt-24 mt-12 mb-12 flex flex-col items-center gap-y-2 max-w-[930px] mx-auto">
      <p className="lg:text-text-4xl sm:text-text-4xl text-text-3xl font-[600] text-center">
        {heading}
      </p>
      <p className="text-text-lg text-center">{subHeading}</p>
    </div>
  );
};

export default DynamicTitle;
