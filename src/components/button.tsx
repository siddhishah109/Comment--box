import React from 'react';

export interface IButtonProps {
  type: string;
  icon: string;
  className?: string;
}

export default function Button(props: IButtonProps) {
  return (
    <div className={props.className} >
     {props.type}
    </div>
  );
}
