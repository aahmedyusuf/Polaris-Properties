import React from 'react';
import './Home.css';
import { useState } from "react";
import { useNavigate,Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <Navbar></Navbar>
            <Card_Parent/>
        </div>
    )
}
function Navbar(){
    function handleSubmit(){
        
    }
    return (
        <ul className = 'nav_parent'>
            <li className='nav_button'> <Link to="/"> <span onClick={handleSubmit}>Logout</span> </Link></li> 
        </ul>
    );
}
function Card_Parent(){
    return(
        <div className = 'Card_Parent'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

function Card(){
    return(
        <div className = 'Card'>
            <img src = 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg' className = 'Card_img'/>
            <br/>
            <center>
                
            <h3 className='Card_title'>The Ivey on Boren</h3>
            <h5 className='Card_address'>* Address: 2019 Boren Ave, Seattle, WA 98121</h5>
            <h5>* Dog Friendly Cat Friendly In Unit Washer & Dryer Dishwasher</h5>
            <h4>* Monthly Rent: $2,195</h4>
            <button className = 'Card_Button'>Click for more information</button>
            </center>
        </div>
    )
}

export default Home;