
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  animated?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  external = false,
  onClick,
  disabled = false,
  type = 'button',
  icon,
  animated = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-church-gold/50 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-church-burgundy text-white hover:bg-church-burgundy/90 active:bg-church-burgundy/95',
    secondary: 'bg-church-gold text-church-navy hover:bg-church-gold/90 active:bg-church-gold/95',
    outline: 'border-2 border-church-burgundy text-church-burgundy hover:bg-church-burgundy/10 active:bg-church-burgundy/20',
    ghost: 'text-church-burgundy hover:bg-church-burgundy/10 active:bg-church-burgundy/20',
    glass: 'backdrop-blur-md bg-white/20 border border-white/30 text-church-burgundy hover:bg-white/30 shadow-sm',
    link: 'text-church-burgundy underline-offset-4 hover:underline',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5 gap-1.5',
    md: 'text-base px-5 py-2.5 gap-2',
    lg: 'text-lg px-8 py-3.5 gap-2.5',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const animatedStyles = animated ? 'transform hover:-translate-y-1 active:translate-y-0' : '';
  
  const buttonStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabledStyles,
    animatedStyles,
    className
  );

  if (href) {
    if (external) {
      return (
        <a 
          href={href} 
          className={buttonStyles}
          target="_blank" 
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {icon && <span className="inline-flex">{icon}</span>}
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={buttonStyles} onClick={onClick}>
        {icon && <span className="inline-flex">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={buttonStyles} 
      onClick={onClick} 
      disabled={disabled}
      type={type}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
