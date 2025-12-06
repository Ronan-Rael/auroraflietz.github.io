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
                <div className="label-text-overlay" style={{left: '10%', color:'white'}}>
                    DRAWINGS
                </div>
                <div className="label-text-overlay" style={{left: '30%',color:'white'}}>
                    MODELS
                </div>
                <div className="label-text-overlay" style={{left: '50%',textDecoration:'underline'}}>
                    ITEM
                </div>
                <div className="label-text-overlay" style={{left: '85%',color:'white',fontSize:'64px'}}>
                    AURORA
                </div>
            </div>
            {/* Header and sub header that appear before items */}
            <div className="doubleColumn">
                <div className="text">
                    {/* Header */}
                    <text className="headingText">{location.state.item}</text>
                    {/* Sub-Header (seperate lines cause it was being a nuisance) */}
                    <text className='subHeadingText' style={{color:'gray', paddingBottom:'1%'}}>Model creation date</text>
                    <text className='subHeadingText'>{location.state.desc}</text>
                </div>
                <img id="itemscrn" style={{maxHeight:'90vh'}} src={location.state.image}/>
            </div>
        </div>
        {/* Floating Action Button */}
        <FloatingActionButton />
        </>
    )
}