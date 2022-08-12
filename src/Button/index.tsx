import React, { CSSProperties, MouseEventHandler, ReactNode } from 'react';

import './index.css'

interface ButtonProps {
  text: string | ReactNode,
  onClick: MouseEventHandler<HTMLDivElement>,
  onMouseDown?: MouseEventHandler<HTMLDivElement>
  onMoushUp?: MouseEventHandler<HTMLDivElement>
  style?: CSSProperties
}
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  let { style = { background: 'red' }, text = <span>这是一个button按钮</span>, onClick } = props
  return <div style={style} className='self-button' onClick={onClick}>{text}</div>
}


export default Button
