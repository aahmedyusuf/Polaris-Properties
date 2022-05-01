import React from 'react';
import './checkout.css';
import { useState , useEffect} from "react";
import { useNavigate,Link } from 'react-router-dom';

import { endPoint } from './endpoint';


function CheckOut(){
    const navigate = useNavigate();

    const info = {
        name:'',
        cardN:'',
        code:'',

      };
      const [card, setcard] = useState(info);

      function handleSubmition(){
        const id = sessionStorage.getItem('id');
            console.log(id);
            fetch(`${endPoint}/buyproperty/?id=${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                navigate('/home');
            })
        }

    return(
        <center>
        <div className = 'checkout-form'>
        <h1 className='title'> Checkout </h1>
        <input type="text" placeholder='Card Name' name="uname" required  className = "field" onChange={(event) => setcard({ ...card, name: event.target.value })}/>
        <input type="text" placeholder='Card Number' name="unumber" required  className = "field" onChange={(event) => setcard({ ...card, cardN: event.target.value })}/>
        <input type="text" placeholder='Security code' name="ucode" required  className = "field" onChange={(event) => setcard({ ...card, code: event.target.value })}/>
        <input type="text" placeholder='Expiration date' name="udate" required  className = "field"/>
        <button className = 'checkout-button' onClick={()=> handleSubmition()}>Buy</button>
        </div>
        </center>
    )
}

export default CheckOut;