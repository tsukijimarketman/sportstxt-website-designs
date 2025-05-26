import React from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}
export const Button = ({
  children,
  to,
  variant = 'primary',
  className = '',
  onClick
}: ButtonProps) => {
  const baseStyles = 'inline-block px-6 py-3 rounded-md font-medium text-center transition-all transform hover:scale-105';
  const variantStyles = {
    primary: 'bg-red-600 hover:bg-blue-600 text-white',
    secondary: 'bg-blue-600 hover:bg-blue-700 text-white',
    outline: 'border-2 border-red-600 text-red-600 hover:bg-red-50'
  }; 
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;
  if (to) {
    return <Link to={to} className={buttonClasses}>
        {children}
      </Link>;
  }
  return <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>;
};