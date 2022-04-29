
import React from 'react';
import './sellerPage.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { endPoint } from './endpoint';



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
        fetch(endPoint+`/verifyuser/?username=${login.username}&password=${login.password}&type=seller`)
        .then(response => response.json())
        .then(data => {
            if(data === 'false')
            {
                setlogin({ ...login, message: `Failed to login: Either wrong username or password` })
            }else{
                sessionStorage.setItem('username', login.username);
                sessionStorage.setItem('password', login.password);
                sessionStorage.setItem('type', 'seller');
                navigate('/seller_home');
                setlogin({ ...login, message: `` })
               }
        })
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
                    <br/>
                    <h5 style={{color:'red'}}>{login.message}</h5>
                    </center>
                </div>
            </center>
        </div>
    )
    
  };
  
  export default Seller_Login;