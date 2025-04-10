import React from 'react'
import { useEffect, useState } from 'react';
import "./styles/HockeyCard.css"

function HockeyCard() {

        const [windowSize, setWindowSize] = useState(window.innerHeight);

        useEffect(() => {
            const handleResize = () => setWindowSize(window.innerHeight);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return (
            <div className="container3 item3">
            <div className="container3">
                <div className="wrapper">
                <div className="banner-image3"> </div>
                <h1>Hockey</h1>
                {windowSize >= 500 ? (
                    <p>
                        The Hockey part. <br />
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

export default HockeyCard
