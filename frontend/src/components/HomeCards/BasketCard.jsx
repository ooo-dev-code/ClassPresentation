import React from 'react'
import "./styles/BasketCard.css"
import { useEffect, useState } from 'react';

function BasketCard() {

        const [windowSize, setWindowSize] = useState(window.innerHeight);

        useEffect(() => {
            const handleResize = () => setWindowSize(window.innerHeight);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return (
            <div className="container item1">
            <div className="container">
                <div className="wrapper">
                <div className="banner-image"> </div>
                <h1>BasketBall</h1>
                {windowSize >= 500 ? (
                    <p>
                        The BasketBall part. <br />
                        By Matthew
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

export default BasketCard
