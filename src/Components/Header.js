import React, { useState } from 'react';
import './Header.css';

export default function Header() {
    //init this to the state
    const [region, setRegion] = useState("kanto");
    //setting the region based on the user input 
    const handleClick = game => setRegion(game);
    //divs should have different styling based on the region
    return (
        <div className='header-container'>
            <div className={region === "kanto" ? "selected" : "not-selected"} onClick={() => handleClick('kanto')}>Kanto</div>
            <div className={region === "original-johto" ? "selected" : "not-selected"} onClick={() => handleClick('original-johto')}>Johto</div>
            <div className={region === "hoenn" ? "selected" : "not-selected"} onClick={() => handleClick('hoenn')}>Hoenn</div>
            <div className={region === "original-sinnoh" ? "selected" : "not-selected"} onClick={() => handleClick('original-sinnoh')}>Sinnoh</div>
        </div>
    )
}
