import React from 'react'
import './main.css';

const Submit = (user) => {
  return (
    <div>
        <img src={require('../assests/done.png')} alt="logo" /> 
    <h1> Congratulations{user.name}!</h1>
    <p className="p">You have completed onboarding, you can start using the Eden! </p>
    </div>
  )
}

export default Submit