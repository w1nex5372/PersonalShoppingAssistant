import React from 'react';

type CustomButtonProps = {
  title: string;
  onClick?: () => void;
  className?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onClick,
  className,
}) => {
  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2 rounded-md ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
