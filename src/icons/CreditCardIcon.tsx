import React from 'react';

interface CreditCardIconProps {
  size?: number;
  color?: string;
}

const CreditCardIcon: React.FC<CreditCardIconProps> = ({ size = 22, color = 'black' }) => (
  <svg width={size} height={(size * 15) / 22} viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.8 0C20.3835 0 20.9431 0.215503 21.3556 0.5991C21.7682 0.982697 22 1.50297 22 2.04545V4.09091H0V2.04545C0 1.50297 0.231785 0.982697 0.644365 0.5991C1.05695 0.215503 1.61652 0 2.2 0H19.8Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 5.45459V12.9546C0 13.4971 0.231785 14.0173 0.644365 14.4009C1.05695 14.7845 1.61652 15 2.2 15H19.8C20.3835 15 20.9431 14.7845 21.3556 14.4009C21.7682 14.0173 22 13.4971 22 12.9546V5.45459H0ZM2.93333 10.9091H11.7333V9.5455H2.93333V10.9091ZM19.0667 10.9091H14.6667V9.5455H19.0667V10.9091Z"
      fill={color}
    />
  </svg>
);

export default CreditCardIcon;
