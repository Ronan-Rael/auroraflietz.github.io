import './Home.css'
import { useState } from "react"
import {Link, useLoaderData} from "react-router-dom";
import "./fonts/BOMBARD_.ttf";
import modelIcon from "./assets/cad_icon.svg";
import artIcon from "./assets/art_icon.svg";
import aboutIcon from "./assets/about_icon.svg";

export default function Home(){
    return(
        <>
            <div className="content">
                <div className="leftHome home-btn home-sides">
                    
                    <svg className = "clickable" width="100%" height="100%" viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <Link to={`/auroraflietz.github.io/models`}>
                        <path d="M   0   0
                                L 0  100
                                L 100 65
                                L 100 0
                                Z"
                            fill="#0BE3BF"/>
                        </Link>
                    </svg>
                    <svg width="100%" height="100%" viewBox='0 0 100 100'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="41" y="18" height="25" viewBox="0 -960 960 960" width="25" fill="#ffffff">
                            <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"/>
                        </svg>
                        <text textAnchor='middle' 
                        transform="translate(52,60)" 
                        className='label-text'
                        preserveAspectRatio='xMidYMid'>MODELS</text>
                    </svg>
                </div>
                <div className="rightHome home-btn home-sides">
                    <svg className = "clickable" width="100%" height="100%" viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <Link to={`/auroraflietz.github.io/drawings`}>
                        <path
                            d="M   0   0
                                L 0  65
                                L 100 100
                                L 100 0
                                Z"
                            fill="#0BE3BF"/>
                        </Link>
                    </svg>
                    <svg width="100%" height="100%" viewBox='0 0 100 100'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="38" y="18" height="25" viewBox="0 -960 960 960" width="25" fill="white"><path d="M160-80q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-720h160l132-132q12-12 28-12t28 12l132 132h160q33 0 56.5 23.5T880-640v480q0 33-23.5 56.5T800-80H160Zm0-80h640v-480H160v480Zm290-120-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11h400q12 0 18-11t-2-21L586-419q-6-8-16-8t-16 8L450-280Zm250-160q25 0 42.5-17.5T760-500q0-25-17.5-42.5T700-560q-25 0-42.5 17.5T640-500q0 25 17.5 42.5T700-440ZM404-720h152l-76-76-76 76ZM160-160v-480 480Z"/></svg>
                        <text textAnchor='middle' 
                        transform="translate(52,60)" 
                        className='label-text'
                        preserveAspectRatio='xMidYMid'>DRAWINGS</text>
                    </svg>
                </div>
                <div className="bottomHome home-btn home-bottom">
                    <svg className = "clickable" width="100%" height="100%" viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <Link to={`/auroraflietz.github.io/about`}>
                        <path d="M   0   100
                                L 100  100
                                L 100 71
                                L 50 0
                                L 0 71
                                Z"
                            fill="#0BE3BF"/>
                        </Link>
                    </svg>
                    <svg width="100%" height="100%" viewBox='0 0 100 100'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="23" y="12" height="55" viewBox="0 -960 960 960" width="55" fill="#ffffff"><path className = "unclickable" d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Zm80 0h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                        <text textAnchor='middle' 
                        transform="translate(50,90)" 
                        fontSize="25px"
                        className='label-text'
                        preserveAspectRatio='xMidYMid'>ABOUT</text>
                    </svg>
                </div>
            </div>
        </>
    )
}