import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DrawerAppBar from '../components/appBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';

import './css/howItWorks.css';

export default function HowItWorks() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
        <DrawerAppBar />
    <Box style={{
        display: 'flex',
        flexDirection: 'row'
    }}>
    <Box style={{
        margin: "256px 0 0 256px",
        width: "50%"
    }}>
      <Typography variant="h1" gutterBottom>
        Heading
      </Typography>
      
      <Typography variant="subtitle1" gutterBottom>
        Whoa! I'm signing the contract!
        <br />
        <strong>But there's a Catch, There's not a single soul in sight!</strong>
      </Typography>
      <Typography variant="body1" gutterBottom>
        No need to worry, WitnessPool can Help! We offer a database of verified witnesses that can be used to verify your contract.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Our Witnesses could be online or offline, but they are all verified and can be used to verify your contract. No need to call that cousin you're trying to avoid, we've got you covered!
      </Typography>
    </Box>
    <Box style={{
        width: '50%',
        margin: '256px 0 0 384px'
    }}>
        <Typography variant="h1" gutterBottom><strong>Features</strong></Typography>
        <br />
        <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Verified Witnesses" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Reliable Witnesses" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Quick and Painful Process" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Managed Saas Platform" />
        </ListItemButton>
      </ListItem>
    </List>
        
    </Box>
    </Box>
    </Box>
  );
}
