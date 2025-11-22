import './Models.css'
import { useState } from "react"
import {Link, useLoaderData} from "react-router-dom";
import "./fonts/BOMBARD_.ttf";
import FloatingActionButton from "./components/FloatingActionButton";

export default function Models(){
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
                <div className="moditemBox1"></div>
                <div className="moditemBox2"></div>
                <div className="moditemBox1"></div>
                <div className="moditemBox1"></div>
                <div className="moditemBox2"></div>
                <div className="moditemBox1"></div>
            </div>
        </div>
        {/* Floating Action Button */}
        <FloatingActionButton />
        </>
    )
}