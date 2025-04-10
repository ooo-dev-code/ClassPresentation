import React from 'react'
import { useEffect, useState } from 'react';
import "./styles/BoxeCard.css"

function BoxeCard() {

        const [windowSize, setWindowSize] = useState(window.innerHeight);

        useEffect(() => {
            const handleResize = () => setWindowSize(window.innerHeight);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return (
            <div className="item4  ">
            <div className="container">
                <div className="wrapper">
                <div className="banner-image4"> </div>
                <h1>Boxe</h1>
                {windowSize >= 500 ? (
                    <p>
                        The Boxe part. <br />
                        By Yassin
                    </p>
                    ) : ( 
                    <p></p>
                    )}
                </div>
                
                <div className="button-wrapper">
                <a style={{display: "flex", textDecoration: "none"}}>
                    <button className="btn outline">DETAILS</button>
                    <button className="btn fill">PLAYER</button>
                </a>
                </div>
            </div>
            </div>
        );
}

export default BoxeCard
