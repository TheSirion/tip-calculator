import React from "react";

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <article className="m-0 grid h-auto w-full gap-x-6 gap-y-6 rounded-xl bg-white p-7 md:w-2/3 lg:w-1/2 lg:grid-cols-2 lg:gap-x-6 lg:p-5">
      {children}
    </article>
  );
};

export default Card;
