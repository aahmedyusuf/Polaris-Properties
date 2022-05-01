import React from "react";
import Topbar from './components/navbar.js';
import Sidebar from './components/sidebar.js';
import Card from './components/card.js';
import "./admin.css";


export default function DesignAdmin(props) {
    const username = sessionStorage.getItem('username');
    const type = sessionStorage.getItem('type');

    if(username == null || type != 'admin'){
        return(
            <div>
               <center> <h1>you need to sign up to view this page</h1></center>
            </div>
        )
    }else{
    return (
        <>
            <Topbar /><div className="container">
                <Sidebar />
                <div class="widgets">
                    <Card />
                </div>

            </div>

        </>

    );
    }

}
