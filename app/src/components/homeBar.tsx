import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { AddBoxRounded } from '@material-ui/icons';
import Logo from '../images/logo.png';
import { AuthContext } from '../contexts/authContext';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const { window } = props;

  const history = useHistory();
  const location = useLocation();

  const auth = useContext(AuthContext)

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const homePath = () => {
    history.push('/')
  }

  function signOutClicked() {
    auth.signOut()
    history.push('/')
  }

  function changePasswordClicked() {
    history.push('changepassword')
  }

  const navItems = [
    {
        label: 'Sign Out',
        route: signOutClicked
    }, 
    {
        label: 'Change Password',
        route: changePasswordClicked
    }
 ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box component="div" sx={{ my: 2 }}>
        <Link href="/">
            <img width={"48%"} src={Logo} alt="logo" />
        </Link>
      </Box>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            
            <ListItemButton sx={{ textAlign: 'center' }} onClick={item.route}>
              <ListItemText primary={item.label} style={{
                color: "#3d9ae8"
              }} />
            </ListItemButton>
            
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" style={{
        backgroundColor: '#fff',
        padding: '10px'
      }}>
        <Toolbar>
          <IconButton
            
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: "#3d9ae8" }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link href="/">
                <img width={"12%"} src={Logo} alt="logo" />
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => (
              <Button key={index} sx={{ color: '#3d9ae8' }} onClick={item.route}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
