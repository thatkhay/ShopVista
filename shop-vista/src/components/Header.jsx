import React, { useState } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import iconImg from '../assets/image-avatar.png'
const drawerWidth = 240;


function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [IconActive , setIconActive] = useState(false)



  const handleIconActive = () => {
    setIconActive((prevState) => !prevState);
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      
      <Divider />
      <List>
       
          <ListItem  disablePadding>
           <Link to='/'>Home</Link>
          </ListItem>

          <ListItem  disablePadding>
           <Link to='/'>Home</Link>
          </ListItem>

          <ListItem  disablePadding>
           <Link to='/'>Home</Link>
          </ListItem>

          <ListItem  disablePadding>
           <Link to='/'>Home</Link>
          </ListItem>

          <ListItem  disablePadding>
           <Link to='/'>Home</Link>
          </ListItem>
    
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box >
    
      <AppBar component="nav" style={{backgroundColor: 'hsl(0, 0%, 100%)', width: mobileOpen ? '80%' : '100%' }}>
        <Toolbar style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none', md: 'none' } }}
          >
            <MenuIcon sx={{ color: 'black'}} />
          </IconButton>
          <h1 style={{fontSize: '700', color:'black'}}> sneakers </h1>
          <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }} >
          
     <List style={{ display: 'flex' , maxWidth: '500px', gap: '4rem'}}>
       
          <ListItem  style={{  height: '4rem', width: '2rem' }}  disablePadding>
           <Link style={{textDecoration: 'none',  color:'hsl(219, 9%, 45%)', fontSize: '.7rem'}} to='/'>Home</Link>
          </ListItem>
          
          <ListItem  style={{ height: '4rem', width: '2rem' }}  disablePadding>
           <Link style={{textDecoration: 'none', color:'hsl(219, 9%, 45%)', fontSize: '.7rem'}} to='/men'>Men</Link>
          </ListItem>
          
          <ListItem  style={{  height: '4rem', width: '2rem' }}  disablePadding>
           <Link style={{textDecoration: 'none', color:'hsl(219, 9%, 45%)', fontSize: '.7rem'}} to='/women'>Women</Link>
          </ListItem>
          
          <ListItem  style={{  height: '4rem', width: '2rem' }}  disablePadding>
           <Link style={{textDecoration: 'none', color:'hsl(219, 9%, 45%)', fontSize: '.7rem'}} to='/about'>About</Link>
          </ListItem>
          
          <ListItem  style={{  height: '4rem', width: '2rem' }}  disablePadding>
           <Link style={{textDecoration: 'none', color:'hsl(219, 9%, 45%)', fontSize: '.7rem'}} to='/contact'>Contact</Link>
          </ListItem>
     
      </List>
  
          </Box>
          <div style={{  display: 'flex', alignItems: 'center', gap: '.5rem'}}>
          <ShoppingCartIcon sx={{ color: 'gray'}}/>
          <img src={iconImg} alt=""  style={{ height: '2rem', width: '2rem', border: IconActive ? '2px solid black' : 'none', borderRadius: '50%' }} onClick={handleIconActive}/>
          </div>
        </Toolbar>
        
      </AppBar>
     
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
       
      </Box>
    </Box>
  );
}

Header.propTypes = {
 
  window: PropTypes.func,
};

export default Header;


