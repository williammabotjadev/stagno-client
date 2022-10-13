import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DrawerAppBar from '../components/homeBar';
import { Typography } from '@material-ui/core';


function Symptoms() {
  const [images, setImages] = React.useState([]);
  const [idSubmitted, setIdSubmitted] = React.useState(false);

  const maxNumber = 69;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const submitImages = () => {
    setIdSubmitted(state => true);
    console.log(images);
  }

  return (
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
            How are you Feeling Today?
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
          placeholder="Describe your symptoms and how you are feeling today."
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
  );
}

export default Symptoms;