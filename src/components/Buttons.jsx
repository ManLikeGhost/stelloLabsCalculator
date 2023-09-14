import React from 'react'

const Buttons = ({content, type, handleClick}) => {
  return (
    <div onClick={handleClick} className={`button-style ${type == 'oprand' ? 'oprand-bg-color': type == 'func' ? 'func-bg-color' : 'num-bg-color'}`}>{content}</div>
  )
}

export default Buttons