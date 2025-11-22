import './Drawings.css'
import { useState } from "react"
import { Link, useLoaderData } from "react-router-dom";
import "./fonts/BOMBARD_.ttf";

export default function Drawings() {
    /* Brief rundown of the structure here since comments cant be in a return:
    Content: main holder for the page, keeps it nice and tidy
    topBar: creates a cool design for the top of the page
    scrollable(?): if decide to keep topBar at top, this will hold scrollable material
    textPortion: holds the top portion of text before the actually cool content*/
    return (
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
                <text className="headingText">Drawing Page Description</text>
                <text className='subHeadingText'>Can you remind me who I am?</text>
                <text className='subHeadingText'>Get the president on the phone now</text>
                <text className='subHeadingText'>I fronted him a brick, I need my money</text>
            </div>
            <div className="items">
                <div className="itemBox1"></div>
                <div className="itemBox2"></div>
                <div className="itemBox1"></div>
                <div className="itemBox1"></div>
                <div className="itemBox2"></div>
                <div className="itemBox1"></div>
            </div>
        </div>
    )
}