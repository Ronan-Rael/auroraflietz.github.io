import './Drawings.css'
import { useState } from "react"
import {Link, useLoaderData} from "react-router-dom";
import "./fonts/BOMBARD_.ttf";
import { useNavigate } from "react-router-dom";
import FloatingActionButton from "./components/FloatingActionButton";
import image1 from "./assets/models/WBdolphinRENDER.png";
import image2 from "./assets/models/Dx3castleRENDER.png";
import image3 from "./assets/models/DnDTravelingCartRENDER.png";
import model2 from "./assets/models/DeX3castle.gltf"
import model3 from "./assets/models/Dnd_Traveling_Cart.gltf"

export default function Models(){
    const navigate = useNavigate();
    return(
        <>
        {/* Wrapper class */}
        <div className="content">
            {/* Creates a cool design for the top of the page */}
            <div className="top" style={{ position: "relative" }}>
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
                <div className="label-text-overlay" style={{left: '10%',color:'white'}}>
                    DRAWINGS
                </div>
                <div className="label-text-overlay" style={{left: '30%', textDecoration: 'underline'}}>
                    MODELS
                </div>
                <div className="label-text-overlay" style={{left: '85%',color:'white',fontSize:'64px'}}>
                    AURORA
                </div>
            </div>
            {/* Header and sub header that appear before items */}
            <div className="text">
                {/* Header */}
                <text className="headingText">CAD Models Gallery</text>
                {/* Sub-Header (seperate lines cause it was being a nuisance) */}
                <text className='subHeadingText'>An archive of my 3d models</text>
            </div>
            {/* Models wrapper class; holds all the model images and links to their pages */}
            <div className="items">
                {/* Items are currently just colored boxes, will make them fancy and functional once we've got images */}
                <div className="itemColumn">
                    <div className="itemBox1" onClick={()=>navigate("/auroraflietz.github.io/itemMod",{state:{type:"site",item:"White Beaked Dolphin",model:"https://p3d.in/PZ7tt"}})}>
                        <img src={image1}/>
                        <div className="itemDescription">White Beaked Dolphin</div>
                    </div>
                </div>
                <div className="itemColumnMid" >
                    <div className="itemBox1" onClick={()=>navigate("/auroraflietz.github.io/itemMod",{state:{type:"file",item:"DX3 Castle",model:model2}})}>
                        <img src={image2}/>
                        <div className="itemDescription">DX3 Castle</div>
                    </div>
                </div>
                <div className="itemColumn">
                    <div className="itemBox1" onClick={()=>navigate("/auroraflietz.github.io/itemMod",{state:{type:"file",item:"Dnd Traveling Cart",model:model3}})}>
                        <img src={image3}/>
                        <div className="itemDescription">Dnd Traveling Cart</div>
                    </div>
                </div>
            </div>
        </div>
        {/* Floating Action Button */}
        <FloatingActionButton />
        </>
    )
}