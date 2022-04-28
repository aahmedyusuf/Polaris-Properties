
import React from 'react';
import './CustomerPage.css';
import { useState } from "react";
import { endPoint } from './endpoint';


function Customer_signup() {

    const user = {
        username: '',
        password: '',
        message:''
      };
      const [login, setlogin] = useState(user);

    function HandleSignup(){
        fetch(endPoint+`/createuser/?username=${login.username}&password=${login.password}&type=customer`)
        .then(response => response.json())
        .then(data => {
           if(data === 'failed'){
            setlogin({ ...login, message: `Failed to sign up: Account already exist` })
           }else{
            setlogin({ ...login, message: `` })
           }
        })
    }

    return(
        <div>
            <center>
                <h1>Customer Page</h1>
                <div className = 'form'>
                    <center>
                    <h1 className="title"> Sign up</h1>
                    <input type="text" placeholder='username' name="uname" required  className = "field" onChange={(event) => setlogin({ ...login, username: event.target.value })}/>
                    <br/>
                    <input type="password" placeholder='password' name="uname" required className = "field" onChange={(event) => setlogin({ ...login, password: event.target.value })}/>
                    <br/>
                    <button className = "loginB" onClick = {() => HandleSignup()}>Create Account</button>
                    <h5 style={{color:'red'}}>{login.message}</h5>
                    </center>
                </div>
            </center>
        </div>
    )
    
  };
  
  export default Customer_signup;