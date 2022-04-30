import React from "react";
import './card.css'
import Userdata from "./userdata";

export default function Card() {
    return (
        <>
            <div className="featured">
                <div className="featuredItem">
                    <span className="featuredTitle">Total house listed</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">200</span>

                    </div>
                    <span className="featuredSub">This year data</span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Total House sold</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">89</span>
                    </div>
                    <span className="featuredSub">This year data</span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Total Unsold houses</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">21</span>
                    </div>
                    <span className="featuredSub">This year data</span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Average Commison</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$5000</span>
                    </div>
                    <span className="featuredSub">Per sold house </span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Average View</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">200</span>
                    </div>
                    <span className="featuredSub">Per day in one listing </span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Current Listings</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">309</span>
                    </div>
                    <span className="featuredSub">Houses </span>
                </div>

            </div>
            <Userdata />
        </>
    );

}