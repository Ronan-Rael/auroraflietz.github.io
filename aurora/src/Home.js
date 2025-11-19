import './Home.css'
import { useState } from "react"
import {Link, useLoaderData} from "react-router-dom";

export default function Home(){
    return(
        <>
            <div className="content">
                <div className="leftHome home-btn home-sides">
                    <svg width="100%" height="100%">
                        <path d="M   0   0
                                L 0  100%
                                L 100% 65%
                                L 100% 0
                                Z"
                            fill="#0BE3BF"/>
                    </svg>
                </div>
                <div className="rightHome home-btn home-sides">
                    <svg width="100%" height="100%">
                        <path d="M   0   0
                                L 0  65%
                                L 100% 100%
                                L 100% 0
                                Z"
                            fill="#0BE3BF"/>
                    </svg>
                </div>
                <div className="bottomHome home-btn home-button">
                    <svg width="100%" height="100%">
                        <path d="M   0   100%
                                L 100%  100%
                                L 100% 70%
                                L 50% 0
                                L 0% 70%
                                Z"
                            fill="#0BE3BF"/>
                    </svg>
                </div>
            </div>
        </>
    )
}