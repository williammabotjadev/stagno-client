import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DrawerAppBar from '../components/homeBar';
import { putData } from '../libs/dynamo'
import { Typography } from '@material-ui/core';
import moment from 'moment'
import uuid from 'react-uuid'

import { AuthContext } from '../contexts/authContext'

function Symptoms() {

  const [medicationData, setMedicationData] = useState({
    Id: uuid(),
    beginOffset: 0,
    endOffset: -1,
    score: 0,
    text: "",
    category: "",
    type: "",
    name: "",
    nameScore: 0
  })

  const auth = useContext(AuthContext)

  const attributeInfo = auth.attrInfo

  const addSymptomEntry = async () => {
    const symptomData = {
      userId: attributeInfo[0].Value,
      date_created: moment().format('MMMM Do YYYY, h:mm:ss a'),
    }
    
    await putData('stagno-logs' , symptomData)
  };

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
          onClick={addSymptomEntry}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default Symptoms;