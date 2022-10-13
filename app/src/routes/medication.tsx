import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import DrawerAppBar from '../components/homeBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Documents() {

  const [file, setFile] = useState(null);
  const [hasDoc, setHasDoc] = useState(false);
  
  const handleFile = (e: any) => {
    setHasDoc(true);
    setFile(file => e.target.files[0]);
    console.log(e.target.files[0]);
  }

  const submitFile = () => {
    console.log(file);
  }

  return (
    <> 
    <Box>
      <DrawerAppBar />
      <Form.Group controlId="formFileLg" className="mt-lg-5" style={{
        marginLeft: '672px',
        marginTop: '204px'
      }}>
        <Form.Label>Please Upload Your Document</Form.Label>
        <br />
        <Form.Control type="file" size="lg" style={{
            background: '#3d9ae8',
            color: 'white',
            height: '10%'
        }} 
        onChange={handleFile}/>
        <br />
        {hasDoc ? (
        <>
        <Button variant="contained">
            Upload Document
        </Button>
        </>) : null}
      </Form.Group>
    </Box>
    </>
  );
}

export default Documents;