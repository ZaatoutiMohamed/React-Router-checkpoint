import React, {useState} from 'react';
import {Modal,Button,InputGroup,FormControl} from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import {v4 as uuidv4} from 'uuid';




//adding modal
const Add =  ({handleAdd})  =>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [title,setTitle] = useState("");
  const [potserURL,setPosterURL] = useState("");
  const [description,setDescription] = useState("");
  const [rate,setRate] = useState (0);
return (
    <div className = "AddMovie">
     <>
      <Button  
        id = "btnAdd" 
        variant="primary" 
        onClick={handleShow}>
          Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>

  <Modal.Body>
      {/* //forms */}
  <>
  {/* text input */}
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1" >Title</InputGroup.Text>
    <FormControl
      onChange = { (e) => setTitle(e.target.value)}
      placeholder="Enter Movie Title"
      aria-label="Movie Title"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  {/* URL input */}
  <InputGroup className="mb-3">
  <InputGroup.Text id="basic-addon2">URL</InputGroup.Text>
    <FormControl
      onChange ={ (e) => setPosterURL(e.target.value)}
      placeholder="Enter Movie URL"
      aria-label="Movie URL"
      aria-describedby="basic-addon2"
    />
  </InputGroup>

{/* contolled rating button from mui.com */}

<InputGroup className="mb-3">
  <InputGroup.Text id="basic-addon2"> Rate</InputGroup.Text>
  <Rating
  
  onChange= {(e) => setRate(e.target.value)}
/>
  </InputGroup>


{/* Description input */}
<InputGroup>
    <InputGroup.Text>Enter description</InputGroup.Text>
    <FormControl 
    onChange = {(e) => setDescription(e.target.value)}
    as="textarea" 
    aria-label="With textarea" 
    />
  </InputGroup>
</>
  
  
  </Modal.Body>

  <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleAdd({id: uuidv4(),title,potserURL,rate,description}); handleClose()}}>
           Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
 
    </div>
)
}
export default Add;