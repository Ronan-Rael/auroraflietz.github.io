import './Drawings.css';
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./fonts/BOMBARD_.ttf";
import FloatingActionButton from "./components/FloatingActionButton";
import images from "./imageLoader.js";

// THIS FUNCTION IS NOT BEING USED AT ALL RN

export default function DrawRef(){
    // > content wrapper class
    const content = document.createElement("div");
    content.className = "content";

    // >> top bar
    const top = document.createElement("div");
    top.className = "top";

    // >>> svg setup
    const svgNS = "http://www.w3.org/2000/svg";
    const topBar = document.createElementNS(svgNS,"svg");
    topBar.classList.add("topBar");
    topBar.viewBox = '0 0 100 100';
    topBar.preserveAspectRatio = 'none';

    // >>>> left side
    const leftSide = document.createElementNS(svgNS, "path");
    leftSide.setAttribute("d", "M 0 0  L 0 100  L 70 100  L 67 0  Z");
    leftSide.setAttribute("fill", "#0BE3BF");
    topBar.appendChild(leftSide);

    // >>>> right side
    const rightSide = document.createElementNS(svgNS, "path");
    rightSide.setAttribute("d", "M 70 0  L 73 100  L 100 100  L 100 0  Z");
    rightSide.setAttribute("fill", "#0BE3BF");
    topBar.appendChild(rightSide);

    // >>> end svg
    top.appendChild(topBar);

    // >> end top
    content.appendChild(top);

    // >> text area
    const text = document.createElement("div");
    text.className = "text";

    // >>> header text
    const header = document.createElement("div");
    header.className = "headingText";
    header.textContent = "Drawing Page Description";
    text.appendChild(header);

    // >>> subheading text
    const subHead = document.createElement("div");
    subHead.className = "subHeadingText";
    subHead.textContent = "Collection of Aurora's Drawings";
    text.appendChild(subHead);

    // >> end text
    content.appendChild(text)

    // >> item section

    // drawings stuff
        const column1 = document.createElement("div");
        column1.className = "itemColumn";
        const column2 = document.createElement("div");
        column2.className = "itemColumnMid";
        const column3 = document.createElement("div");
        column3.className = "itemColumnMid";
    
        let imgList = [];
    
        {images.map((image, index) =>(
            imgList[index] = image
        ))}
    
        let num = 0;
        for (const img of imgList){
            const itemBox = document.createElement("div");
            itemBox.className="itemBox1";
    
            const image = document.createElement("img");
            image.src = img;
            image.alt = "drawing";
            itemBox.appendChild(image);
    
            const desc = document.createElement("div");
            desc.className = "itemDescription";
            desc.textContent = "description";
            itemBox.appendChild(desc);
    
            switch(num){
                case 0:
                    column1.appendChild(itemBox);
                    num = 1;
                    break;
                case 1:
                    column2.appendChild(itemBox);
                    num = 2;
                    break;
                case 2:
                    column3.appendChild(itemBox);
                    num = 0;
                    break;
                default:
                    break;
            }
        }
}