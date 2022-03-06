import React from 'react';
import { Rating } from "@mui/material";
import { Button } from "react-bootstrap";

const Filter = ({search, searchRate, setSearch,setSearchRate}) => {
    const handleReset =()=>{
        setSearch('')
        setSearchRate(0)
    }
    return (
        <div className = "search">
        <input 
            id = "input-search"
            placeholder = "search film" 
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
        />
        <Rating 
            value={searchRate} 
            name="simple-controlled" onChange={(e)=> setSearchRate(e.target.value)} 
        />
        <Button 
            id = "reset-button"
            variant="info"
            onClick={handleReset}>Reset
        </Button>
        </div>
    )
}

export default Filter;

