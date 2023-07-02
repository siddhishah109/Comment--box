import React from 'react';

export interface IButtonProps {
  type: string;
  icon: string;
  className?: string;
  handleClick?: () => void;
}

export default function Button(props: IButtonProps) {
  return (
    <div className={props.className} onClick={props.handleClick}>
     {props.type}
    </div>
  );
}
