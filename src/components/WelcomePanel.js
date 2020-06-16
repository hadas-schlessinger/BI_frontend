import React from 'react'
import beckgroungTransperant from '../beckgroungTransperant.png'


export default function WelcomePanel() {
    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
            <h1><span>Welcome!</span></h1>
            <p style={{fontSize: 20}} className="pt-running-text">
            Here you will be able to see all the details regarding flights and routes!
            </p> 
            <img src='airplane.png'></img>
           {/* <p style={{color: '#0B7478', fontSize: 22}}>This server was published on XXX - see the paper <a href="">here</a></p> */}
        </div>
    )
}






