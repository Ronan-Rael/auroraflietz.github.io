import './Drawings.css'
import { useState } from "react"
import { Link, useLoaderData } from "react-router-dom";
import "./fonts/BOMBARD_.ttf";
import FloatingActionButton from "./components/FloatingActionButton";

export default function Drawings() {
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
                <div className="itemBox1"></div>
                <div className="itemBox2"></div>
                <div className="itemBox1"></div>
                <div className="itemBox1"></div>
                <div className="itemBox2"></div>
                <div className="itemBox1"></div>
            </div>
        </div>
        {/* Floating Action Button */}
        <FloatingActionButton />
        </>
    )
}