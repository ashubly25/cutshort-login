import React, { useState } from 'react'
import './main.css';


const Use = () => {
  const [btnState, setBtnState] = useState(false);

  const handleClick = () => {
    setBtnState(!btnState)
  }


  return (
    <div>
    <h1>How are you planning to use Eden?</h1>
    <p className="p">We'll streamline your setup experience accordingly.</p>
    <button
        className={btnState ? 'activate' : 'nonactivate'}
        onClick={handleClick}
      ><h1 className="dia">For myself</h1><p>Write better. Think more clearly. Stay organized.</p></button>
    <button
        className={btnState ? 'activate' : 'nonactivate'}
        onClick={handleClick}
      ><h1 className="dia">With my team</h1> <p>Wikis, docs, tasks & projects, all in one place.</p></button>
 
    </div>
  )
}

export default Use
