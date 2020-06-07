import React from 'react';

const ButtonInline = ({onClick , type = "button", children}) =>
    <Button onClick = {onClick} type = {type} className = "button-inline">
        {children}
    </Button>

const Button = ({onClick , type = "button", className, children}) =>
    <button onClick = {onClick} type = {type} className = {className}>
        {children}
    </button>
    
export default Button;

export {
  ButtonInline
};