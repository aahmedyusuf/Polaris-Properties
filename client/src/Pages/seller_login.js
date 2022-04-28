
import React from 'react';
import './sellerPage.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Seller_Login() {
    const navigate = useNavigate();

    function changePage(value){
        navigate(`/${value}`)
    }

    const user = {
        username: '',
        password: '',
        message:''
      };
      const [login, setlogin] = useState(user);

    function HandleLogin(){

    }

    return(
        <div>
            <center>
                <h1>Seller Page</h1>
                <div className = 'form'>
                    <center>
                    <h1 className="title"> Login</h1>
                    <input type="text" placeholder='username' name="uname" required  className = "field" onChange={(event) => setlogin({ ...login, username: event.target.value })}/>
                    <br/>
                    <input type="password" placeholder='password' name="uname" required className = "field" onChange={(event) => setlogin({ ...login, password: event.target.value })}/>
                    <br/>
                    <button className = "loginB" onClick= {() => HandleLogin()}>Login</button>
                    <br/>
                    <button className = "signup" onClick = {() => changePage('SellerSingup')}>Sign up</button>
                    </center>
                </div>
            </center>
        </div>
    )
    
  };
  
  export default Seller_Login;