import './Drawings.css';
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./fonts/BOMBARD_.ttf";
import FloatingActionButton from "./components/FloatingActionButton";
import images from "./imageLoader.js";
import image1 from "./assets/golden age/IMG_0212.PNG";
import image2 from "./assets/golden age/IMG_0213.PNG";
import image3 from "./assets/golden age/IMG_0214.PNG";
import image4 from "./assets/golden age/IMG_0245.JPG";
import image5 from "./assets/golden age/IMG_0250.JPG";
import image6 from "./assets/golden age/IMG_0251.JPG";
import image7 from "./assets/golden age/IMG_0252.JPG";
import image8 from "./assets/golden age/IMG_0253.JPG";
import image9 from "./assets/golden age/IMG_0254.JPG";
import image10 from "./assets/golden age/IMG_0255.JPG";
import image11 from "./assets/golden age/IMG_0256.JPG";
import image12 from "./assets/golden age/IMG_0257.JPG";
import image13 from "./assets/golden age/IMG_0258.JPG";
import image14 from "./assets/golden age/IMG_0259.JPG";
import image15 from "./assets/golden age/IMG_0260.JPG";
import image16 from "./assets/golden age/IMG_0261.JPG";
import image17 from "./assets/golden age/IMG_0262.JPG";
import image18 from "./assets/golden age/IMG_0263.GIF";
import image19 from "./assets/golden age/IMG_0264.JPG";
import image20 from "./assets/golden age/IMG_0265.JPG";
import image21 from "./assets/golden age/IMG_0266.JPG";
import image22 from "./assets/golden age/IMG_0267.GIF";
import image23 from "./assets/golden age/IMG_0268.JPG";
import image24 from "./assets/golden age/IMG_0269.JPG";
import image25 from "./assets/golden age/IMG_0270.JPG";
import image26 from "./assets/golden age/IMG_0271.JPG";
import image27 from "./assets/golden age/IMG_0272.JPG";
import image28 from "./assets/golden age/IMG_0273.JPG";
import image29 from "./assets/golden age/IMG_0274.JPG";
import image30 from "./assets/golden age/IMG_0275.GIF";
import image31 from "./assets/golden age/IMG_0276.JPG";
import image32 from "./assets/golden age/IMG_0277.JPG";
import image33 from "./assets/golden age/IMG_0278.JPG";
import image34 from "./assets/golden age/IMG_0279.JPG";
import image35 from "./assets/golden age/IMG_0280.JPG";
import image36 from "./assets/golden age/IMG_0281.JPG";
import image37 from "./assets/golden age/IMG_0282.JPG";
import image38 from "./assets/golden age/IMG_0283.JPG";
import image39 from "./assets/golden age/IMG_0284.JPG";
import image40 from "./assets/golden age/IMG_0285.JPG";
import image41 from "./assets/golden age/IMG_0286.JPG";
import image42 from "./assets/golden age/IMG_0287.JPG";
import image43 from "./assets/golden age/IMG_0288.JPG";
import image44 from "./assets/golden age/IMG_0289.JPG";
import image45 from "./assets/golden age/IMG_0290.JPG";
import image46 from "./assets/golden age/IMG_0291.JPG";
import image47 from "./assets/golden age/IMG_0292.JPG";
import image48 from "./assets/golden age/IMG_0296.PNG";
import image49 from "./assets/golden age/IMG_0297.PNG";
import image50 from "./assets/golden age/IMG_0298.JPG";
import image51 from "./assets/golden age/IMG_0299.JPG";
import image52 from "./assets/golden age/IMG_0300.JPG";
import image53 from "./assets/golden age/IMG_0301.JPG";
import image54 from "./assets/golden age/IMG_0302.JPG";
import image55 from "./assets/golden age/IMG_0303.JPG";
import image56 from "./assets/golden age/IMG_0304.JPG";
import image57 from "./assets/golden age/IMG_0305.JPG";
import image58 from "./assets/golden age/IMG_0306.JPG";

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
                <text className="headingText">Drawing Gallery</text>
                {/* Sub-Header (seperate lines cause it was being a nuisance) */}
                <text className='subHeadingText'>An archive of all my past art pieces</text>
            </div>
            {/* Drawings wrapper class; holds all the drawings and links to their pages */}
            <div className="items">
                {/* Items are currently just colored boxes, will make them fancy and functional once we've got images */}
                <div className="itemColumn">
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Queen of Spades Design",desc:"part of my custom cards project",image:image1}})}>
                        <img src={image1}/>
                        <div className="itemDescription">Queen of Spades Design</div>
                    </div>
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Augment your Reality",desc:"",image:image4}})}>
                        <img src={image4}/>
                        <div className="itemDescription">Augment your Reality</div>
                    </div>
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Drawing 7",image:image7}})}>
                        <img src={image7}/>
                        <div className="itemDescription">Description</div>
                    </div>
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Sun Frog",desc:"One of my frog fight TCG card art commissions",image:image10}})}>
                        <img src={image10}/>
                        <div className="itemDescription">Sun Frog</div>
                    </div>
                </div>
                <div className="itemColumnMid" >
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Jack of Clubs Design",desc:"part of my custom cards project",image:image2}})}>
                        <img src={image2}/>
                        <div className="itemDescription">Jack of Clubs Design</div>
                    </div>
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Drawing 5",image:image5}})}>
                        <img src={image5}/>
                        <div className="itemDescription">Description</div>
                    </div>
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Null Frog",desc:"One of my frog fight TCG card art commissions",image:image8}})}>
                        <img src={image8}/>
                        <div className="itemDescription">Null Frog</div>
                    </div>
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Moon Frog",desc:"One of my frog fight TCG card art commissions",image:image11}})}>
                        <img src={image11}/>
                        <div className="itemDescription">Moon Frog</div>
                    </div>
                </div>
                <div className="itemColumn">
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Ace of Diamonds Design",desc:"part of my custom cards project",image:image3}})}>
                        <img src={image3}/>
                        <div className="itemDescription">Ace of Diamonds Design</div>
                    </div>
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Drawing 6",image:image6}})}>
                        <img src={image6}/>
                        <div className="itemDescription">Description</div>
                    </div>
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Eldritch Frog",desc:"One of my frog fight TCG card art commissions",image:image9}})}>
                        <img src={image9}/>
                        <div className="itemDescription">Eldritch Frog</div>
                    </div>
                    <div className="itemBox1" onClick={()=>navigate("/item",{state:{item:"Rainbow Frog",desc:"One of my frog fight TCG card art commissions",image:image12}})}>
                        <img src={image12}/>
                        <div className="itemDescription">Rainbow Frog</div>
                    </div>
                </div>
            </div>
        </div>
        {/* Floating Action Button */}
        <FloatingActionButton />
        </>
    )
}