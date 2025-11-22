import './Models.css'
import { useState } from "react"
import {Link, useLoaderData} from "react-router-dom";
import "./fonts/BOMBARD_.ttf";
import FloatingActionButton from "./components/FloatingActionButton";

export default function Models(){
    return(
        <>
        <div className="content">
            <div className="top">
                <svg className="topBar" viewBox='0 0 100 100' preserveAspectRatio='none'>
                    <path d="M   0   0
                    L 0  100
                    L 70 100
                    L 67 0
                    Z"
                    fill="#0BE3BF" />
                    <path d="M   70   0
                    L 73  100
                    L 100 100
                    L 100 0
                    Z"
                    fill="#0BE3BF" />
                </svg>
            </div>
            <div className="text">
                <text className="headingText">CAD Page Description</text>
                <text className='subHeadingText'>We straight gassin', cuttin' straight to the bricks, haha</text>
                <text className='subHeadingText'>This shit ain't nothin' to me, man</text>
                <text className='subHeadingText'>We smokin' runtz</text>
            </div>
            <div className="items">
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