import './Item.css'
import { useState } from "react"
import { useLocation } from 'react-router-dom';
import { Link, Navigate, useLoaderData } from "react-router-dom";
import "./fonts/BOMBARD_.ttf";
import FloatingActionButton from "./components/FloatingActionButton";
import { useNavigate } from "react-router-dom";

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
                <img id="itemscrn" src={location.state.image}/>
                {/* Sub-Header (seperate lines cause it was being a nuisance) */}
                <text className='subHeadingText'>{location.state.desc}</text>
            </div>
        </div>
        {/* Floating Action Button */}
        <FloatingActionButton />
        </>
    )
}