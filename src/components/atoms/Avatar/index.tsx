import {Avatar as MuiAvatar} from '@material-ui/core';
import React from "react";
  
export type AvatarProps={
    src?:string;
    children?:string;
    className?:string;
    variant?:'rounded'|'square'|'circular'|'circle';
};
  
const Avatar:React.FC<AvatarProps>= ({src,children,variant,className}) => {
    return (
        <MuiAvatar alt="User Avatar" src={src} variant={variant} className={className} children={children}/>
    );
}

export default Avatar;