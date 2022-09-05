import React from 'react'
import './main.css';

const Circle = ({classname, children}) => {
  return (
    <div className={classname}>{children}</div>
  )
}

export default Circle