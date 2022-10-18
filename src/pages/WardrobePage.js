import React from 'react'
import WardRobe from '../components/WardRobe' 
import HomeBar from '../components/HomeBar';
import Reccomendations from '../components/Reccomendations';

function WardrobePage() {
    return (
        <div>
            <HomeBar/>
            <WardRobe />
            <Reccomendations/>
        </div>
    )
}
export default WardrobePage