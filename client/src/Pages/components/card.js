import React from "react";
import './card.css'
import Userdata from "./userdata";

export default function Card() {
    return (
        <>
            <div className="featured">
            
            <Card_info title={'Total property listed'} info ={'200'}/>
            <Card_info title={'Total property Sold'} info ={'200'}/>
            <Card_info title={'Total Unsold property'} info ={'200'}/>
            <Card_info title={'Total Houses'} info ={'200'}/>
            <Card_info title={'Total Apartments'} info ={'200'}/>
            <Card_info title={'Average Commision'} info ={'200'}/>
            <Card_info title={'Average View'} info ={'200'}/>
            <Card_info title={'Current Listing'} info ={'200'}/>


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