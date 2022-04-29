import React from 'react';
import './Home.css';
import { useState,useEffect } from "react";
import { useNavigate,Link } from 'react-router-dom';
import { BsFillFilePersonFill, BsCurrencyDollar,BsFillGeoAltFill } from "react-icons/bs";
import { FaDog,FaBath,FaBuilding} from "react-icons/fa";
import { MdBedroomParent } from "react-icons/md";
import { endPoint } from './endpoint';

function Home(){
    const username = sessionStorage.getItem('username');
    const type = sessionStorage.getItem('type');
    console.log(type);
    if(username == null || type != 'customer'){
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
                <Navbar></Navbar>
                <Card_Parent/>
            </div>
        )
    }
}
function Navbar(){

    return (
        <ul className = 'nav_parent'>
            <li className='nav_button'> <Link to="/"> <span onClick={() => sessionStorage.clear()}>Logout</span> </Link></li> 
        </ul>
    );
}
function Card_Parent(){

    const [cards, setcards] = useState([]);

    useEffect(() => {
        const username = sessionStorage.getItem('username');
        fetch(`${endPoint}/getproperties/`)
        .then(response => response.json())
        .then(data => {
            setcards(data);
            
        })
    },[]);

    const listItems = cards.map((card,index) =>
        <Card key={index} props={card}/>
    );

    return(
        <div className = 'Card_Parent'>
           {listItems}
        </div>
    )
}

function Card({props}){
    const navigate = useNavigate();

    function handleSubmit(){
        sessionStorage.setItem('id', props.id);
        navigate('/property_details');
        console.log("button clicked")
    }

    return(
        <div className = 'Card'>
            <img src = {props.url} className = 'Card_img'/>
            <br/>
            <center>
                
            <h3 className='Card_title'>{props.title}</h3>
            <h5 className='Card_address'><BsFillGeoAltFill/> {props.city} , {props.state} , {props.zipcode}</h5>
            <h5><FaBuilding/> {props.description}</h5>
            <h4><BsCurrencyDollar/> Monthly Rent: ${props.amount}</h4>
            <button className = 'Card_Button' onClick={()=>handleSubmit()}>Click for more information</button>
            </center>
        </div>
    )
}

export default Home;