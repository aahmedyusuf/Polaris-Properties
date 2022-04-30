import React from "react";
import Topbar from './components/navbar.js';
import Sidebar from './components/sidebar.js';
import Card from './components/card.js';
import "./admin.css";
import { useState } from 'react';


export default function DesignAdmin(props) {


    return (
        <>
            <Topbar /><div className="container">
                <Sidebar />
                <div class="widgets">
                    <Card />
                </div>

            </div>

        </>

    );

}
