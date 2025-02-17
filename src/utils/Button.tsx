import React, { ReactNode } from 'react';

interface ButtonProp {
  children: ReactNode;
}

const Button: React.FC<ButtonProp> = ({ children }) => {
  return <button className="border-[1px] px-2 py-1">{children}</button>;
};

export default Button;
