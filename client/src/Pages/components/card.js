import React from "react";
import './card.css'
import Userdata from "./userdata";
import { useState, useEffect } from 'react';
import { endPoint } from '../endpoint';

export default function Card() {
    const [info, setinfo] = useState('');
    useEffect(() => {
      fetch(`${endPoint}/adminInfo/`)
      .then(response => response.json())
      .then(data => {
        setinfo(data);
          console.log(data);
      })
  },[]);

    return (
        <>
            <div className="featured">
            
            <Card_info title={'Total property listed'} info ={info.total}/>
            <Card_info title={'Total property Sold'} info ={info.sold}/>
            <Card_info title={'Total Unsold property'} info ={info.unsold}/>
            <Card_info title={'Total Houses'} info ={info.house}/>
            <Card_info title={'Total Apartments'} info ={info.apartments}/>
            <Card_info title={'Average Commision'} info ={'--'}/>
            <Card_info title={'Average View'} info ={'--'}/>


            </div>
            <Userdata />
        </>
    );

}


function Card_info({title, info}){
    return(
        <div className="featuredItem">
        <span className="featuredTitle">{title}</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">{info}</span>

        </div>
        <span className="featuredSub">This year data</span>
    </div>
    )
}