import '../../assets/css/components/UI/Card.scss';
import React, { ReactNode, CSSProperties } from 'react';

interface CardProps {
    style?: CSSProperties;
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ style, children }) => {
    return <div className="card" style={style}>{children}</div>;
};

export default Card;
