import React, { useState } from 'react';
import { useContext } from 'react';
import { RegionContext } from '../Helper/Context';
import './Header.css';

export default function Header() { 
    const { region, setRegion } = useContext(RegionContext);
    
    function handleClick(game) {
        setRegion(game);
    };

    return (
        <div className='header-container'>
            <div className={region === "kanto" ? "selected" : "not-selected"} onClick={() => handleClick('kanto')}>Kanto</div>
            <div className={region === "original-johto" ? "selected" : "not-selected"} onClick={() => handleClick('original-johto')}>Johto</div>
            <div className={region === "hoenn" ? "selected" : "not-selected"} onClick={() => handleClick('hoenn')}>Hoenn</div>
            <div className={region === "original-sinnoh" ? "selected" : "not-selected"} onClick={() => handleClick('original-sinnoh')}>Sinnoh</div>
        </div>
    )
}
