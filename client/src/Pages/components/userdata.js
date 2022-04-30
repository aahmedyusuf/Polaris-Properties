import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Home,


} from "@material-ui/icons";
import { Link } from "react-router-dom";
import './userdata.css';

export default function Userdata() {
    return (
        <>
            <h1 className="userTitle">Property Sold records</h1>
            <div className="mainContainer">
                <Card_info name={'Anwar'} sellername={'james property'} title={'Miam beach house'} price={'1220'}/>
            </div>

        </>

    );
}

function Card_info({name,sellername,title, price }){
    return(
        <div className="user">
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src="https://i.pinimg.com/736x/55/0f/49/550f49a459548599a5a4ea1c67fc0244.jpg"
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{name}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Seller Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">username: {sellername}</span>
                        </div>
                        <span className="userShowTitle">Property</span>
                        <div className="userShowInfo">
                            <Home className="userShowIcon" />
                            <span className="userShowInfoTitle">{title}</span>
                        </div>

                        <div className="userShowInfo">
                            <span className="userShowInfoTitle">Sold: ${price}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}