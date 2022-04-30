import "./sidebar.css";
import {
    LineStyle,
    PermIdentity,
    Storefront,
    AttachMoney,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                </div>
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" fontSize="Large"></LineStyle>
                                Home
                            </li>
                        </Link>
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" fontSize="Large"></PermIdentity>
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon" fontSize="Large"> </Storefront>
                                Products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" fontSize="Large"></AttachMoney>
                            Transactions
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}