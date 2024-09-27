import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ href, children, variant = 'solid' }) => {
  const baseClasses = "font-bold py-2 px-4 rounded transition-colors duration-300";
  const solidClasses = "bg-[#111B47] text-white border-2 border-transparent hover:bg-transparent hover:text-[#111B47] hover:border-[#111B47]";
  const outlineClasses = "bg-transparent border-2 border-[#111B47] text-[#111B47] hover:bg-[#111B47] hover:text-white hover:border-transparent";

  const classes = `${baseClasses} ${variant === 'solid' ? solidClasses : outlineClasses}`;

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
};

export default Button;