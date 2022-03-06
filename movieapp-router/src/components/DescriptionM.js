import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {Button} from "react-bootstrap";

const DescriptionM = ({movies}) => {
    const {description} = useParams()
    const navigate = useNavigate()
    const movieTrailer = movies.find(el => el.id == description)

    return (
        <div className = "MovieDescription">

            <div id = "firstpart">
              <h1 style ={{ color : '#474766'}}>{movieTrailer.title}</h1>
              <br/>
              <img src={movieTrailer.posterURL} alt='Not found' witdh = "200" height = "400"/>
              <br/>
              <br/>
              <Button variant="dark" onClick={()=>navigate('/')}>Go Back</Button>

            </div>  

            <div>
                <h2  style = {{color : "#474766"}}>Description </h2>
            
                <br/>
                {movieTrailer.description}
                <br/>
                <h3 style = {{color : "#474766"}}>Trailer</h3>
                <br/>
               <iframe  controls="true" height="400"width="600"  src={movieTrailer.trailer}  ></iframe>

                
             </div>
        </div>
    )
};
export default DescriptionM ;