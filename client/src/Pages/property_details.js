import React from 'react';
import './property_details.css';
import { useState , useEffect} from "react";
import { useNavigate,Link } from 'react-router-dom';
import { BsFillFilePersonFill, BsCurrencyDollar,BsFillGeoAltFill } from "react-icons/bs";
import { FaDog,FaBath,FaBuilding} from "react-icons/fa";
import { MdBedroomParent } from "react-icons/md";
import { endPoint } from './endpoint';

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

    const [data, setdata] = useState('');
    useEffect(() => {
        const id = sessionStorage.getItem('id');
        fetch(`${endPoint}/getpropertybyID/?id=${id}`)
        .then(response => response.json())
        .then(d => {
            setdata(d);
            console.log(data[0]);
            
        })
    },[]);
    const id = sessionStorage.getItem('id');
    if(data != ''){
        return(
            <div>
                <center>
                    <img src = {data[0].url} className = 'Details_img' alt=''/>
                    <h1 className='Card_title' >{data[0].title}</h1>
                    <h3><BsFillFilePersonFill/> Listed by: {data[0].username}</h3>
                    <h3><FaBuilding/>  Type: {data[0].type}</h3>
                    <h4 className='Card_address'><BsFillGeoAltFill/> Address: {data[0].city}, {data[0].state}, {data[0].zipcode}</h4>
                    <h5><FaDog/> {data[0].description}</h5>
                    <ul style={{display:'flex', listStyle:'none', justifyContent:'center', marginTop:'-25px'}}>
                        <li style={{paddingRight:'20px'}}><h5><MdBedroomParent/> Rooms: {data[0].rooms}</h5></li>
                        <li><h5><FaBath/> Bathrooms: {data[0].bathrooms}</h5></li>
                    </ul>
                    <h5 style={{ marginTop:'-25px'}}>Type: {data[0].purchase}</h5>
                    <h3>Payment =  <BsCurrencyDollar/>{data[0].amount}</h3>
                    
                    <button className = 'Details_Button'>Buy</button>
                </center>
            </div>
        )
    }
}

export default Property_details;
