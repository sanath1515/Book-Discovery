import TextField from '@material-ui/core/TextField';
import React from "react";

export type TextFieldProps={
  placeholder?:string;
  value?:unknown;
  type?:string;
  size?:'small'|'medium';
  disableUnderline?:boolean;
  autoFocus?:boolean;
  onChange?:React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  className?:string;
}

const InputField:React.FC<TextFieldProps>= ({placeholder,size,autoFocus,value,type,onChange,disableUnderline,className}) => {
  return (
      <TextField value={value} size={size}  placeholder={placeholder} autoFocus={autoFocus} onChange={onChange} className={className} type={type} InputProps={{ disableUnderline: disableUnderline,type:'search' }} fullWidth />
  );

}

export default InputField;