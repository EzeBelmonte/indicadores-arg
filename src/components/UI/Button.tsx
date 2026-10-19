import React from 'react';

// Definir las props que recibirá el componente Button
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = ({ 
  children, 
  onClick, 
  type = 'button', 
  disabled = false, 
  className,
  ...props 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center ${className}`} // Puedes agregar clases adicionales si las pasas
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;