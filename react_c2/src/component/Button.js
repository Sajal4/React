import React from 'react'

const Button =(props)=> {
  const { buttonText,className =''} = props;
    return (
    <button className={`custom_btn ${className}`}>{buttonText}</button>
  )
}

export default Button;