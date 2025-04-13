import React, { use } from 'react'
import { useState } from 'react'
import BasketCard from '../components/HomeCards/BasketCard'
import GameCard from '../components/HomeCards/GameCard'
import BoxeCard from '../components/HomeCards/BoxeCard'
import { useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import HockeyCard from '../components/HomeCards/HockeyCard'
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'

function Home() { 

    const [rotation, setRotation] = useState(0);
    const { user } = useAuthContext()

    const handleRotationChange = () => {
        setRotation((prevRotation) => {
            const newRotation = prevRotation + 90;
            const colors = ['linear-gradient(45deg, rgb(255, 119, 0) 0%, rgba(11,3,45,1) 100%)', 'linear-gradient(45deg, rgb(44, 5, 72) 0%, rgb(147, 13, 13) 100%)', 'linear-gradient(45deg, rgb(238, 239, 245) 0%, rgba(11,3,45,1) 100%)', 'linear-gradient(45deg, rgb(140, 255, 0) 0%, rgba(11,3,45,1) 100%)'];
            const newColor = colors[(newRotation / 90) % colors.length];
            document.body.style.background = newColor;
            document.querySelector('.slider').style.setProperty('--rotation', `${newRotation}deg`);
            return newRotation;
        });
    };


    return (
        <div>
            

            <div className="banner" onClick={handleRotationChange}>
                <div className="slider" >
                    <GameCard />
                    <HockeyCard />
                    <BoxeCard />
                    <BasketCard />
                </div>
            </div>
        </div>
    )
}

export default Home
