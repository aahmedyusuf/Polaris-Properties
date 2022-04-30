import React from "react";
import "./navbar.css";
import { NotificationsNone, Language, Email } from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">AdminStats</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone fontSize="large"></NotificationsNone>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language fontSize="Large" ></Language>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Email fontSize="Large"></Email>
                        <span className="topIconBadge">2</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
