import React, { useState, Fragment} from 'react'
import beckgroungTransperant from '../beckgroungTransperant.png'
import decoder from '../services/ImageDecoder'
import {routes} from '../services/Routes'

export default function RoutesPanel() {
    const [success, setSuccess] = useState(false)
    const [img, setImg] = useState("no image")
    const [airport, setAirport] = useState(" ")
    const [destinations, setDest] = useState([])
    const [total, setTotal] = useState(0)

  
    async function onSubmit(event) {
    event.preventDefault(); 
     routes(airport).then((response)=>{
            console.log(response.data)
            const image = response.data.data
            const dest = response.data.destinations
            const total = response.data.total
            setImg(image)
            setDest(dest)
            setTotal(total)
            setSuccess(true)

     })
     .catch(function(error){
            console.log(error);
        });
       
        
    
    }
  

return (
<div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
            <h1><span>Routes Data!</span></h1>
            <h2 style={{fontSize: 20}} className="pt-running-text">
            here you can view data regarding routes
            </h2> 
            <label>Airport</label>
             <input type="text" name="airport" placeholder="JFK" onChange={event => setAirport(event.target.value)}/ >
         
            <input type="submit" value="see report" onClick={(event) => onSubmit(event)}/>
            
            {success && 
            <Fragment>
            <h2>{airport} Summary</h2>
            <h3>Total amount of routes: {total} routes</h3>
            <h3>Destinations are:</h3>
            <table style={{textAlign: "center"}}>
                  <tbody>
                {destinations.map(row =>                  
                    
                    <h4 style={{fontSize: 16}} > * {row}</h4>

                    )
                }
                </tbody>
                </table>
            <h3> All Routes</h3>
            <img src={decoder(img)}></img>
            </Fragment>}
        </div>)}


    
