import React from 'react'
import { useEffect, useState } from 'react';
import "./styles/GameCard.css"

function GameCard() {

        const [windowSize, setWindowSize] = useState(window.innerHeight);

        useEffect(() => {
            const handleResize = () => setWindowSize(window.innerHeight);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return (
            <div className="container2 item2">
            <div className="container2">
                <div className="wrapper">
                <div className="banner-image2"> </div>
                <h1>Games</h1>
                {windowSize >= 500 ? (
                    <p>
                        The Game part. <br />
                        By Mohamed
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

export default GameCard
