import React from 'react';

interface DividerProps {
    className: string;
    width: string;
}

const Divider: React.FC<DividerProps> = ({ className, width }) => (
    <div className={`${className}`} style={{ width, height: '1px' }}></div>
);

export default Divider;