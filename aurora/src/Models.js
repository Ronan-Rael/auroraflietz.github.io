import './Drawings.css'
import { useState } from "react"
import {Link, useLoaderData} from "react-router-dom";
import "./fonts/BOMBARD_.ttf";
import { useNavigate } from "react-router-dom";
import FloatingActionButton from "./components/FloatingActionButton";
import image1 from "./assets/models/WBdolphinRENDER.png";
import image2 from "./assets/tempModel2.png";

export default function Models(){
    const navigate = useNavigate();
    return(
        <>
        {/* Wrapper class */}
        <div className="content">
            {/* Creates a cool design for the top of the page */}
            <div className="top">
                <svg className="topBar" viewBox='0 0 100 100' preserveAspectRatio='none'>
                    {/* Left bar */}
                    <path d="M   0   0
                    L 0  100
                    L 70 100
                    L 67 0
                    Z"
                    fill="#0BE3BF" />
                    {/* Right bar */}
                    <path d="M   70   0
                    L 73  100
                    L 100 100
                    L 100 0
                    Z"
                    fill="#0BE3BF" />
                </svg>
            </div>
            {/* Header and sub header that appear before items */}
            <div className="text">
                {/* Header */}
                <text className="headingText">CAD Page Description</text>
                {/* Sub-Header (seperate lines cause it was being a nuisance) */}
                <text className='subHeadingText'>We straight gassin', cuttin' straight to the bricks, haha</text>
                <text className='subHeadingText'>This shit ain't nothin' to me, man</text>
                <text className='subHeadingText'>We smokin' runtz</text>
            </div>
            {/* Models wrapper class; holds all the model images and links to their pages */}
            <div className="items">
                {/* Items are currently just colored boxes, will make them fancy and functional once we've got images */}
                <div className="itemColumn">
                    <div className="itemBox1" onClick={()=>navigate("/itemMod",{state:{item:"Dolphin",model:"https://p3d.in/PZ7tt"}})}>
                        <img src={image1}/>
                        <div className="itemDescription">Dolphin Model</div>
                    </div>
                </div>
                <div className="itemColumnMid" >
                    <div className="itemBox1" onClick={()=>navigate("/itemMod",{state:{item:"Dolphin",model:"https://p3d.in/PZ7tt"}})}>
                        <img src={image1}/>
                        <div className="itemDescription">Dolphin Model</div>
                    </div>
                </div>
                <div className="itemColumn">
                    <div className="itemBox1" onClick={()=>navigate("/itemMod",{state:{item:"Dolphin",model:"https://p3d.in/PZ7tt"}})}>
                        <img src={image1}/>
                        <div className="itemDescription">Dolphin Model</div>
                    </div>
                </div>
            </div>
        </div>
        {/* Floating Action Button */}
        <FloatingActionButton />
        </>
    )
}