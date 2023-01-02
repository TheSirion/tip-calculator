import React from "react";

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className="grid max-w-6xl grid-cols-2 gap-x-6 rounded-xl bg-white p-5">
      {children}
    </div>
  );
};

export default Card;
