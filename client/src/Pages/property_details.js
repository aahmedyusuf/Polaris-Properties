import React from 'react';
import './property_details.css';
import { useState } from "react";
import { useNavigate,Link } from 'react-router-dom';
import { BsFillFilePersonFill, BsCurrencyDollar,BsFillGeoAltFill } from "react-icons/bs";
//
import { FaDog,FaBath,FaBuilding} from "react-icons/fa";
import { MdBedroomParent } from "react-icons/md";

function Property_details(){

    return(
        <div>
            <Navbar/>
            <Details/>
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

function Details(){
    return(
        <div>
            <center>
                <img src = 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg' className = 'Details_img'/>
                <h1 className='Card_title'>The Ivey on Boren</h1>
                <h3><BsFillFilePersonFill/> Listed by: Sanders Team</h3>
                <h3><FaBuilding/>  Type: Single Family Residence</h3>
                <h4 className='Card_address'><BsFillGeoAltFill/> Address: 2019 Boren Ave, Seattle, WA 98121</h4>
                <h5><FaDog/> Dog Friendly Cat Friendly In Unit Washer & Dryer Dishwasher</h5>
                <ul style={{display:'flex', listStyle:'none', justifyContent:'center', marginTop:'-25px'}}>
                    <li style={{paddingRight:'20px'}}><h5><MdBedroomParent/> Rooms: 2</h5></li>
                    <li><h5><FaBath/> Bathrooms: 1/2</h5></li>
                </ul>
                <h5 style={{ marginTop:'-25px'}}>Type: Rental</h5>
                <h3><BsCurrencyDollar/> Monthly Rent: $2,195</h3>
                
                <button className = 'Details_Button'>Buy</button>
            </center>
        </div>
    )
}

export default Property_details;
