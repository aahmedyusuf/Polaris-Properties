import React from 'react';
import './seller_home.css';
import { useState ,useEffect} from "react";
import { useNavigate,Link } from 'react-router-dom';
import { endPoint } from './endpoint';
import { BsFillFilePersonFill, BsCurrencyDollar,BsFillGeoAltFill } from "react-icons/bs";
import { FaDog,FaBath,FaBuilding} from "react-icons/fa";
import { MdBedroomParent } from "react-icons/md";

function Seller_home(){

    if(sessionStorage.getItem('username') == null){
        return(<div>
            <center>
                <h1>login to view this page</h1>
            </center>
        </div>);
    }else{
    
        return(
            <div>
                <Navbar/>
                <Card_Parent/>
            </div>
        )
    }
}

function Card_Parent(){

    const [cards, setcards] = useState([]);

    useEffect(() => {
        const username = sessionStorage.getItem('username');
        fetch(`${endPoint}/getmyproperties/?username=${username}`)
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
            <Card_Create/>
        </div>
    )
}

function Card({props}){

    function Remove(){
        fetch(`${endPoint}/remove_property/?id=${props.id}`)
        window.location.reload(false);
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
            <button className = 'Card_Button' onClick ={()=> Remove()}>Remove property</button>
            </center>
        </div>
    )
}

function Card_Create(){
    return(
        <div className = 'Card'>
            <a href='create_property' className='Card_href'><img src = 'https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=20&m=688550958&s=612x612&w=0&h=wvzUqT3u3feYygOXg3GB9pYBbqIsyu_xpvfTX-6HOd0=' className = 'Card_img_mark'/></a>
        </div>

    )
}

function Navbar(){
    function handleSubmit(){
        sessionStorage.clear();
    }
    return (
        <ul className = 'nav_parent'>
            <li className='nav_button'> <Link to="/"> <span onClick={handleSubmit}>Logout</span> </Link></li> 
        </ul>
    );
}

export default Seller_home;