import React, { useState, Fragment} from 'react'
import beckgroungTransperant from '../beckgroungTransperant.png'
import decoder from '../services/ImageDecoder'
import {popularity} from '../services/Popularity'


export default function PopularityPanel() {
    const [success, setSuccess] = useState(false)
    const [img, setImg] = useState("no image")
    const [img_priority, setImgP] = useState("no image")
   
  
    async function onSubmit(event) {
    event.preventDefault(); 
     popularity().then((response)=>{
            const image = response.data.data
            const priority = response.data.priority
            setImg(image)
            setImgP(priority)
            setSuccess(true)

     })
     .catch(function(error){
            console.log(error);
        });
       
        
    
    }
    
    

    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
            <h1><span>Popularity Data!</span></h1>
            <h2 style={{fontSize: 20}} className="pt-running-text">
            here you can view data of popular routes
            </h2> 
            <input type="submit" value="see report" onClick={(event) => onSubmit(event)}/>
            

            {success && 
            <Fragment>
            <h3>Top 10 airports</h3>
            <img src={decoder(priority)}></img>
            <h3>Airports</h3>
            <img src={decoder(img)}></img>
            </Fragment>}
        </div>
  
    )}
