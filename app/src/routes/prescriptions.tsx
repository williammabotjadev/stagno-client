import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DrawerAppBar from '../components/homeBar';
import { Typography } from '@material-ui/core';


function Prescriptions() {
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
      
    </Box>
  );
}

export default Prescriptions;