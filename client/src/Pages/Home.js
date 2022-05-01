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
    const [cards, setcards] = useState([]);

    const searchField = {
        city:'',
        state:'',
        price:'',
        rooms:'',
        type:''
      };
      const [search, setsearch] = useState(searchField);
      useEffect(() => {
        fetch(`${endPoint}/getproperties/`)
        .then(response => response.json())
        .then(data => {
            setcards(data);
            
        })
    },[]);

      function handleSubmit(){
          console.log(search.price);
          fetch(`${endPoint}/getproperty/?` + new URLSearchParams({
            amount:search.price,
            state:search.state,
            city:search.city,
            zipcode:search.zipcode,
            rooms:search.rooms,
            type:search.type
          }))
          .then(response => response.json())
          .then(data => {
              console.log(data);
              if(data == 'failed'){
                setcards([]);
              }else{
                setcards(data);
              }
              
          })
      }

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
                <Navbar setsearch={setsearch} search={search} handleSubmit={handleSubmit}></Navbar>
                <Card_Parent cards={cards}/>
            </div>
        )
    }
}
function Navbar({search, setsearch, handleSubmit}){

    return (
        <ul className = 'nav_parent'>
            
            <li> <h2 style={{color:'white', padding:'10px'}}>Search Field: </h2> </li>

            <li className = 'nav_field'> <input type='text' placeholder='City' name='city' onChange={(event) => setsearch({ ...search, city: event.target.value })}></input> </li>
            <li className = 'nav_field'> <input type='text' placeholder='State' name='state' onChange={(event) => setsearch({ ...search, state: event.target.value })}></input> </li>
            <li className = 'nav_field'> <input type='text' placeholder='Max price' name='price' onChange={(event) => setsearch({ ...search, price: event.target.value })}></input> </li>
            <li className = 'nav_field'> <input type='text' placeholder='Rooms' name='rooms' onChange={(event) => setsearch({ ...search, rooms: event.target.value })}></input> </li>
            <li className = 'nav_field'> <input type='text' placeholder='apartment/house' name='type' onChange={(event) => setsearch({ ...search, type: event.target.value })}></input> </li>

            <li className='nav_button'> <Link to="#"> <span onClick={() => handleSubmit()}>Search</span> </Link></li> 
            <li className='nav_button' style={{paddingLeft:'50px'}}> <Link to="/"> <span onClick={() => sessionStorage.clear()}>Logout</span> </Link></li> 
        </ul>
    );
}
function Card_Parent({cards}){


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

    if(props.description.length > 70){
        props.description = props.description.substring(0,70) + '... click for more info';
    }

    if(props.sold == 'false'){
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
    }else{
        return(
            <div className = 'Card'>
                <img src = {props.url} className = 'Card_img'/>
                <br/>
                <center>
                    
                <h3 className='Card_title'>{props.title}</h3>
                <h5 className='Card_address'><BsFillGeoAltFill/> {props.city} , {props.state} , {props.zipcode}</h5>
                <h5><FaBuilding/> {props.description}</h5>
                <h4><BsCurrencyDollar/> Monthly Rent: ${props.amount}</h4>
                
                <button className = 'Card_Button_Sold' >Item is Sold</button>

                </center>
            </div>
        )
    }
}

export default Home;