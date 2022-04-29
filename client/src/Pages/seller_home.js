import React from 'react';
import './seller_home.css';
import { useState } from "react";
import { useNavigate,Link } from 'react-router-dom';

function Seller_home(){

    return(
        <div>
            <Navbar/>
            <Card_Parent/>
        </div>
    )
}

function Card_Parent(){
    return(
        <div className = 'Card_Parent'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card_Create/>
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
            <button className = 'Card_Button'>Remove property</button>
            </center>
        </div>
    )
}

function Card_Create(){
    return(
        <div className = 'Card'>
            <a href='#' className='Card_href'><img src = 'https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=20&m=688550958&s=612x612&w=0&h=wvzUqT3u3feYygOXg3GB9pYBbqIsyu_xpvfTX-6HOd0=' className = 'Card_img_mark'/></a>
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

export default Seller_home;