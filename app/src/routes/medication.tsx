import React, { useState } from 'react';
import DrawerAppBar from '../components/homeBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Medication() {

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
    <Box component="div">
      <DrawerAppBar />
      <Box component="div"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: '264px',
          padding: '20px'
        }}
      >
        <Typography variant="h4" style={{ marginBottom: '20px' }}>
            Which Medications have you taken Today?
        </Typography>
        <TextField
          id="standard-multiline-flexible"
          label="Entry Title"
          placeholder="Enter a title for your entry"
          multiline
          maxRows={4}
          variant="standard"
          style={{ width: '75%' }}
        />
        <TextField
          id="standard-multiline-static"
          label="Content"
          multiline
          rows={4}
          placeholder="e.g. Today I took 2 Tylenol and 1 Advil."
          variant="standard"
          style={{
            marginTop: '40px',
            width: '75%'
          }}
        />
        <Button
          variant="contained"
          style={{
            backgroundColor: '#23408e',
            color: '#fff',
            width: '240px',
            height: '80px',
            fontSize: '24px',
            marginTop: '40px'
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
    </>
  );
}

export default Medication;