import React, { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import './index.css';
interface ButtonProps {
    text: string | ReactNode;
    onClick: MouseEventHandler<HTMLDivElement>;
    onMouseDown?: MouseEventHandler<HTMLDivElement>;
    onMoushUp?: MouseEventHandler<HTMLDivElement>;
    style?: CSSProperties;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
