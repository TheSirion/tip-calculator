import React from "react";

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className="grid h-auto w-full gap-y-6 gap-x-6 rounded-xl bg-white p-7 sm:m-0 sm:w-1/2 lg:grid-cols-2 lg:gap-x-6 lg:p-5">
      {children}
    </div>
  );
};

export default Card;
