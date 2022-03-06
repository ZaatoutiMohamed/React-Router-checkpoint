import React from "react";
import {Card,Button} from "react-bootstrap";
import ShowMoreText from "react-show-more-text";
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";

const MovieCard = ({el}) => {
    return (

        <div className = "movieCard"> 
        <Card style={{ width: '18rem' , height: '40rem' }}>
       <Card.Img variant="top" src={el.posterURL} />
            <Card.Body>
                <Card.Title>
                    {el.title} 
                </Card.Title>
                <ShowMoreText>
                    <Card.Text>
                        {el.description}
                    </Card.Text>
                </ShowMoreText>
                <Link to={`/Movies/${el.id}`} ><Button variant="dark">Description</Button></Link>
            <Rating name="read-only" value={el.rate} readOnly />
            </Card.Body>
      </Card>
      </div>
    )
};
export default MovieCard;