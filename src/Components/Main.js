import React from 'react'
import './main.css';


const Main = ({ formData, setFormData }) => {
  return (
    <div>
        <h1 className="heading"> Welcome! First things first...</h1>
        <p className="p">You can always change them later. </p>
        <label className ="lab">Full Name</label><br/>
        
        <input 
              className ="input" 
              type="text" 
              placeholder="Steve Jobs" 
              value={formData.fullname}
              onChange={(e) => {
              setFormData({ ...formData, fullname: e.target.value });
        }}
        /> <br />
        <label className ="lab">Display Name</label>
        <br />
        <input 
              className ="input"
              type="text" 
              placeholder="Steve"
              value={formData.displayname}
              onChange={(e) => {
              setFormData({ ...formData, displayname: e.target.value });
              }}
          />
    </div>
  )
}

export default Main