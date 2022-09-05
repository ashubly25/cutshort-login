import React from 'react'
import './main.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const Workspace = ({ formData, setFormData }) => {
  return (
    <div >
        <h1 className="heading"> Let's set up home for all your work</h1>
        <p className="p">You can always create another workspace later. </p>
            <label className ="lab">Workspace Name</label><br/>
            <input 
                    className ="input" 
                    type="text" 
                    placeholder="Eden"
                    value={formData.workspacename}
                    onChange={(e) => {
                    setFormData({ ...formData, workspacename: e.target.value });
              }} 
                    /> <br/>
            <label className ="lab">Workspace URL(optional)</label><br/>
              <TextField
              value={formData.workspaceurl}
              onChange={(e) => {
              setFormData({ ...formData, workspaceurl: e.target.value });
        }} 
              id="outlined-start-adornment"
              sx={{ m: 1, width: '320px' }}
              InputProps={{
              startAdornment: <InputAdornment position="start">www.eden.com/</InputAdornment>,
          }}
        />
            
        
    </div>
  )
}

export default Workspace