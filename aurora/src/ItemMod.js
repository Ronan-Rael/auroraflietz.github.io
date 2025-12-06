import './Item.css'
import { useState } from "react"
import { useLocation } from 'react-router-dom';
import { Link, Navigate, useLoaderData } from "react-router-dom";
import "./fonts/BOMBARD_.ttf";
import FloatingActionButton from "./components/FloatingActionButton";
import { useNavigate } from "react-router-dom";
import image1 from "./assets/tempDraw1.jpg";
import image2 from "./assets/tempDraw2.jpg";

export default function Item() {
    const { state } = useLocation();
    let location = useLocation();
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
                <text className="headingText">{location.state.item}</text>
                <iframe allowfullscreen width="500vw" height="500vh" loading="lazy" frameborder="0" src="https://p3d.in/e/PZ7tt"></iframe>
                {/* Sub-Header (seperate lines cause it was being a nuisance) */}
                <text className='subHeadingText'>WOAH! It's a drawing!</text>
            </div>
        </div>
        {/* Floating Action Button */}
        <FloatingActionButton />
        </>
    )
}