import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { fetchData } from '../libs/dynamo'

import DrawerAppBar from '../components/homeBar';

function Logs() {

  const fetchDataFromDynamoDb = () => {
    fetchData('stagno-logs')
  }

  React.useEffect(() => {
    fetchDataFromDynamoDb()
  }, [])

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <DrawerAppBar />
      <Box component="div">
      <Card style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '264px',
        padding: '20px',
        width: '30%',
        marginLeft: '20px'
      }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Entry Title
        </Typography>
        <Typography variant="h5" component="div">
          14/10/2022
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          You took 2 Tylenol and 1 Advil.
        </Typography>
        <Typography variant="body2">
          You may have had a headache.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Recommendations</Button>
        <Button size="small">Helpful Links</Button>
      </CardActions>
    </Card>
    </Box>
    </Box>
  );
}

export default Logs;