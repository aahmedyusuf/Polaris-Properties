import React from 'react';
import './seller_createProperty.css';
import { useState,useEffect } from "react";
import { useNavigate,Link } from 'react-router-dom';
import { endPoint } from './endpoint';

function Seller_Create_Property(){

    const username = sessionStorage.getItem('username');
    const type = sessionStorage.getItem('type');
    if(username == null || type != 'seller'){
        return(
            <div>
                <center>
                    <h1>Login to view this page</h1>
                </center>
            </div>
        )
    }else{
        return(
            <div>
                <Form/>
            </div>
        )
    }
}

function Form(){

    const navigate = useNavigate();

    const data = {
        title:'',
        description:'',
        url:'',
        state:'',
        amount:'',
        city:'',
        zipcode:'',
        rooms:'',
        bathrooms:'',
        purchase:'',

      };
      const [form, setform] = useState(data);

      function CreateProperty(){
        if(form.title.length > 0 && form.url.length > 0){
        fetch(`${endPoint}/createproperty/`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            //req.query.username, req.query.title, req.query.description, req.query.url, req.query.amount, req.query.state, req.query.city, req.query.zipcode,req.query.type, req.query.rooms, req.query.bathroom, req.query.purchase
            body:JSON.stringify({
                username: sessionStorage.getItem('username'),
                description: form.description,
                url: form.url,
                title:form.title,
                amount: form.amount,
                state: form.state,
                city: form.city,
                zipcode: form.zipcode,
                type: form.type,
                rooms:form.rooms,
                bathrooms: form.bathrooms,
                purchase: form.purchase,
            })
        })
        navigate('/seller_home');
    }

    }
    return(
        <center>
        <div className = 'Form'>
            <center>
            <h1 className = 'title'>Property Information</h1>
            <input className='Form_Field' type="text" placeholder='title' name="utitle" required  onChange={(event) => setform({ ...form, title: event.target.value })} style={{marginTop:'0px'}}/>
            <input className='Form_Field' type="text" placeholder='description' name="udescription" required  onChange={(event) => setform({ ...form, description: event.target.value })}/>
            <input className='Form_Field' type="text" placeholder='image' name="uurl" required  onChange={(event) => setform({ ...form, url: event.target.value })}/>
            <input className='Form_Field' type="text" placeholder='state' name="ustate" required  onChange={(event) => setform({ ...form, state: event.target.value })}/>
            <input className='Form_Field' type="text" placeholder='city' name="ucity" required  onChange={(event) => setform({ ...form, city: event.target.value })}/>
            <input className='Form_Field' type="text" placeholder='zipcode' name="uzipcode" required  onChange={(event) => setform({ ...form, zipcode: event.target.value })}/>
            <input className='Form_Field' type="text" placeholder='Type i.e Apartment/house' name="utype" required  onChange={(event) => setform({ ...form, type: event.target.value })}/>
            <input className='Form_Field' type="text" placeholder='rooms' name="urooms" required  onChange={(event) => setform({ ...form, rooms: event.target.value })}/>
            <input className='Form_Field' type="text" placeholder='bathrooms' name="ubathrooms" required  onChange={(event) => setform({ ...form, bathrooms: event.target.value })}/>
            <input className='Form_Field' type="text" placeholder='price' name="uprice" required  onChange={(event) => setform({ ...form, amount: event.target.value })}/>
            <input className='Form_Field' type="text" placeholder='purchase Rental/Buy' name="upurchase" required  onChange={(event) => setform({ ...form, purchase: event.target.value })}/>
            <button className = "Form_button" onClick = {() => CreateProperty()}>Create Property</button>
            </center>
        </div>
        </center>
    )
}

export default Seller_Create_Property;