
import React from 'react';
import './CustomerPage.css';
import { useState } from "react";
import { endPoint } from './endpoint';
import { useNavigate } from 'react-router-dom';


function Admin_login() {


    const navigate = useNavigate();

    const user = {
        username: '',
        password: '',
        message: ''
    };
    const [login, setlogin] = useState(user);

    function HandleLogin() {
        fetch(endPoint + `/verifyuser/?username=${login.username}&password=${login.password}&type=admin`)
            .then(response => response.json())
            .then(data => {
                if (data === 'false') {
                    setlogin({ ...login, message: `Failed to login: Either wrong username or password` })
                } else {
                    sessionStorage.setItem('username', login.username);
                    sessionStorage.setItem('password', login.password);
                    sessionStorage.setItem('type', 'admin');
                    navigate('/admin');
                    setlogin({ ...login, message: `` })
                }
            })
    }

    return (
        <div>
            <center>
                <h1>Admin login Page</h1>
                <div className='form'>
                    <center>
                        <h1 className="title">Login</h1>
                        <input type="text" placeholder='username' name="uname" required className="field" onChange={(event) => setlogin({ ...login, username: event.target.value })} />
                        <br />
                        <input type="password" placeholder='password' name="uname" required className="field" onChange={(event) => setlogin({ ...login, password: event.target.value })} />
                        <br />
                        <button className="loginB" onClick={() => HandleLogin()}>Login</button>
                        <h5 style={{ color: 'red' }}>{login.message}</h5>

                    </center>
                </div>
            </center>
        </div>
    )

};

export default Admin_login;