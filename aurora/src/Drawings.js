import './Drawings.css'
import { useState } from "react"
import { Link, useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./fonts/BOMBARD_.ttf";
import FloatingActionButton from "./components/FloatingActionButton";
import image1 from "./assets/tempDraw1.jpg";
import image2 from "./assets/tempDraw2.jpg";

export default function Drawings() {
    const navigate = useNavigate();
    return (
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
                <text className="headingText">Drawing Page Description</text>
                {/* Sub-Header (seperate lines cause it was being a nuisance) */}
                <text className='subHeadingText'>Can you remind me who I am?</text>
                <text className='subHeadingText'>Get the president on the phone now</text>
                <text className='subHeadingText'>I fronted him a brick, I need my money</text>
            </div>
            {/* Drawings wrapper class; holds all the drawings and links to their pages */}
            <div className="items">
                {/* Items are currently just colored boxes, will make them fancy and functional once we've got images */}
                <div className="itemColumn">
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Drawing 1",image:image1}})}> {/*Holy moley that actually worked, item pages are dynamic now*/}
                        <img src={image1}/>
                        <div className="itemDescription">Temporary drawing I had saved, will be replaced later once we have others</div>
                    </div>
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Drawing 2",image:image1}})}>
                        <img src={image1}/>
                        <div className="itemDescription">Description</div>
                    </div>
                </div>
                <div className="itemColumnMid" >
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Drawing 3",image:image2}})}>
                        <img src={image2}/>
                        <div className="itemDescription">This one serves to test different image sizes. I wanted to keep the cool indenting, but couldn't get it to work dynamically.</div>
                    </div>
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Drawing 4",image:image2}})}>
                        <img src={image2}/>
                        <div className="itemDescription">Description</div>
                    </div>
                </div>
                <div className="itemColumn">
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Drawing 5",image:image1}})}>
                        <img src={image1}/>
                        <div className="itemDescription">Description</div>
                    </div>
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Drawing 6",image:image1}})}>
                        <img src={image1}/>
                        <div className="itemDescription">Description</div>
                    </div>
                </div>
            </div>
        </div>
        {/* Floating Action Button */}
        <FloatingActionButton />
        </>
    )
}