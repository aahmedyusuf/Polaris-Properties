import React from 'react';
import './Attentition_Page.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Attentition_Page() {
    const navigate = useNavigate();

    function handle(value) {
        navigate(`/${value}`)
    }

    return (
        <div>
            <center>
                <h1>Welcome To Polaris Properties</h1>
                <br />
                <h2>Are you a Seller or a Buyer</h2>
                <br />
                <br />
                <br />
                <br />

                <button className="action-Button" onClick={() => handle('Customerlogin')}> Buyer </button>
                <br />
                <button className="action-Button" onClick={() => handle('Sellerlogin')}> Seller </button>
                <br />
                <button className="action-Button" onClick={() => handle('admin_login')}> Admin  </button>
            </center>
        </div>
    );
}



export default Attentition_Page;