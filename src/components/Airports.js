import React, { useState, Fragment} from 'react'
import beckgroungTransperant from '../beckgroungTransperant.png'
import decoder from '../services/ImageDecoder'
import {airports} from '../services/Airports'

export default function AirportsPanel() {
  const [success, setSuccess] = useState(false)
  const [img, setImg] = useState("no image")

 

  async function onSubmit(event) {
  event.preventDefault(); 
   airports().then((response)=>{
          const image = response.data.data
          setImg(image)
          setSuccess(true)

   })
   .catch(function(error){
          console.log(error);
      });
     
      
  
  }


  return (
    <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
            <h1><span>Airports Data!</span></h1>
            <h2 style={{fontSize: 20}} className="pt-running-text">
            here you can view data regarding airports all over the world
            </h2> 
            <input type="submit" value="see report" onClick={(event) => onSubmit(event)}/>
            
            {success && 
            <Fragment>
            <h3>The report</h3>
            <img src={decoder(img)}></img>
            </Fragment>}
        </div>)}
    // <div style={{backgroundImage: `url(${transperantBackground})`}}>
    //     <h1>Upload your data</h1>
    //     <p>Please upload 2 excel files:
    //         one for the cytokins raw data and the other one for the patients data. 
    //         For outcom analysis, patients data must be inserted as an additional file.
    //     </p>
    //     <form>
    //     <h3>Project Name:</h3>
    //         <p>Insert the name of the data/chort</p> 
    //         <label> Name: </label>
    //       <input type="text" name="name_data" placeholder="Your project name" onChange={event => setName(event.target.value)}/>
    //       {Nameerror && <medium className='error'>please insert your project's name</medium>}
    //       <h3>Cytokines Data:</h3>
    //       <p>
    //       <p>Insert cytokines data file. The file should be in .xlsx format and all values should be numeric. i.e - if cutokines values are below or above the normal values and presented as ">", a numeric value should be inserted instead.</p> 
    //       <p>If the data was collected using Luminex, the Luminex output file can be inserted. However, it should be marked in the right place when setting the analysis parameters. The values should also be numeric only in this case</p> 
    //       <p>Each column should be a different cytokine value and each row should specify the cytokine profile for one subject</p>
    //       <p>The first column should be the subject IDs or a numerical index</p>
    //       <label> Cytokines Data: </label>
    //        <input type = "file" name = "cytokines" onChange={event => setCytokines(event.target.files[0])} />
    //       </p>
    //       {Cytoerror && <medium className='error'>please insert cytokine data</medium>}
    //       <h3>Patients Data:</h3>
    //         <p>
    //         <p>Insert patients data file. The file should be in .xlsx format. </p> 
    //         <p>This dataframe should contain outcome variables to be analyzed in the associations to outcomes analysis.</p>
    //         <p>It may also contain covariate variables for controlling the regression models built for the associations calculation.</p>
    //         <p>Make sure binary columns contain 0 and 1 values, or True and False values (and cells with unknown values are left empty).</p>
    //         <p>The first column should be the subject IDs or a numerical index</p>
    //         <label>Patients Data:</label>
    //         <input type = "file" name = "patients" onChange={event => setPatients(event.target.files[0])} />
    //         </p>
    //         <input type="submit" value="Submit" onClick={(event) => onSubmit(event)} />
    //         {/* {success &&  <div style={{color: '#0B7478'}}>SUCCESS! your data was uploaded. please set your params</div>}  */}
    //         {success &&  navigateTo("set/parameters")}  
    
            
    //         </form>
    //     </div>

