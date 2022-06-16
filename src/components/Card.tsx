interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<Props> = props => {
  return (
    <div className='max-w-6xl grid grid-cols-2 gap-x-6 bg-white p-5 rounded-xl'>
      {props.children}
    </div>
  );
};

export default Card;
