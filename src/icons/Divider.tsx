import React from 'react';

interface DividerProps {
    color: string;
    width: string;
}

const Divider: React.FC<DividerProps> = ({ color, width }) => (
    <div style={{ width, height: '3px', backgroundColor: color }}></div>
);

export default Divider;