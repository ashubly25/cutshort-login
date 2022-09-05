import React from 'react'
import { useState, useEffect } from 'react'
import Main from '../Components/Main'
import Workspace from '../Components/Workspace'
import Use from '../Components/Use'
import Submit from '../Components/Submit'
import Circle from '../Components/Circle'

import './main.css';

const Progress = () => {
    const [circle] = useState(4);
    const [active, setActive] = useState(0);
    const [width, setWidth] = useState();
    const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceURL: "",
  });

        useEffect(() => {
            setWidth(100/(circle)*active);
        }, [circle, active]);


    const arr = [];
        for(let i = 0; i < circle; i++) {
            arr.push(<Circle classname={i-1 >= active ? "circle" : "circle active" } key={i}>{i+1}</Circle>);
    }
    
    // const FormTitles = ["Welcome! First things first...", "Lets set up a home for all your work", "How are you planning to use Eden?", "Congratulation{user.name}"];

    const PageDisplay = () => {
        if (active === 0) {
          return <Main formData={formData} setFormData={setFormData}/>;
        } 
        else if (active === 1)
         {
          return <Workspace formData={formData} setFormData={setFormData} />;
        }
        else if (active === 2)
         {
          return <Use formData={formData} setFormData={setFormData} />;
        }
         else if (active === 3) {
          return <Submit formData={formData} setFormData={setFormData} />;
        }
      };

    return (
        <div className="container">
        <div className="content">
        <h1 className="head"><img src={require('../assests/icon.png')} alt="logo" /> Eden</h1>
        <div className="progressbar">
        <div className="progress" style={{width: (width*1.26)+"%" }}></div>
            {arr}
        </div>
        <div>{PageDisplay()}</div>
        <div className="footer">
           
        <button className="btn" 
                disabled={active >= circle - 1 ? true : false} 
                onClick={() => {
                    active >= circle ? setActive(circle - 1):setActive(active+1)}}
                > 
                {active === circle - 1 ? "Launch Workspace" : "Create Workspace"}
        </button>
        </div>
        </div>
     </div>
    )
    }

export default Progress;

