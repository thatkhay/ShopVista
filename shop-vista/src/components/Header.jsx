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
import useMediaQuery from '@mui/material/useMediaQuery';
import '../index.css';
import CartItemCounter from './CartItemCounter';
import CartCard from './CartCard';
import ClearIcon from '@mui/icons-material/Clear';

const drawerWidth = 240;


function Header(props) {
  const tabSize = useMediaQuery('(min-width:600px) and (max-width:900px)');
  const pcSize = useMediaQuery('(min-width:900px)');


  
  const [CartFilled, setCartFilled] = useState(false)

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [IconActive , setIconActive] = useState(false)
 
  


const handleShowCart = () => {
  setCartFilled(!CartFilled)
}

 

 
  const handleIconActive = () => {
    setIconActive((prevState) => !prevState);
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
      
      <Divider />
      <List style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0 1rem', marginTop: '2rem'}}>
        <ClearIcon  fontSize='small' style={{marginBottom: '1.4rem'}}/>

          <ListItem className='list-Home' style={{padding: '0 .4rem'}}  disablePadding>
           <Link style={{textDecoration: 'none', color: 'black'}} to='/'>Home</Link>
          </ListItem>

          <ListItem className='list-Men' style={{padding: '0 .4rem'}}  disablePadding>
           <Link style={{textDecoration: 'none', color: 'black'}} to='/'>Men</Link>
          </ListItem>

          <ListItem className='list-Women' style={{padding: '0 .4rem'}}  disablePadding>
           <Link style={{textDecoration: 'none', color: 'black'}} to='/'>Women</Link>
          </ListItem>

          <ListItem className='list-About' style={{padding: '0 .4rem'}}  disablePadding>
           <Link style={{textDecoration: 'none', color: 'black'}} to='/'>About</Link>
          </ListItem>

          <ListItem className='list-Contact' style={{padding: '0 .4rem'}}  disablePadding>
           <Link style={{textDecoration: 'none', color: 'black'}} to='/'>Contact</Link>
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
          
     <List style={{ display: 'flex' , maxWidth: '500px', gap: tabSize ? '2rem' : '4rem', marginLeft: pcSize ? '-32rem' : '0'}}>
       
          <ListItem  className= 'homeActive' style={{  height: '4rem', width: '2rem' , display: 'flex', alignItems: 'center', justifyContent: 'center' }}  disablePadding>
           <Link style={{textDecoration: 'none',  color:'hsl(219, 9%, 45%)', fontSize: '.7rem'}} to='/'>Home</Link>
          </ListItem>
          
          <ListItem className='menActive' style={{ height: '4rem', width: '2rem' , display: 'flex', alignItems: 'center', justifyContent: 'center'}}  disablePadding>
           <Link style={{textDecoration: 'none', color:'hsl(219, 9%, 45%)', fontSize: '.7rem'}} to='/'>Men</Link>
          </ListItem>
          
          <ListItem className='womenActive' style={{  height: '4rem', width: '2rem' , display: 'flex', alignItems: 'center', justifyContent: 'center'}}  disablePadding>
           <Link style={{textDecoration: 'none', color:'hsl(219, 9%, 45%)', fontSize: '.7rem'}} to='/'>Women</Link>
          </ListItem>
          
          <ListItem className='aboutActive' style={{  height: '4rem', width: '2rem' , display: 'flex', alignItems: 'center', justifyContent: 'center'}}  disablePadding>
           <Link style={{textDecoration: 'none', color:'hsl(219, 9%, 45%)', fontSize: '.7rem'}} to='/'>About</Link>
          </ListItem>
          
          <ListItem className='contactActive'  style={{  height: '4rem', width: '2rem' , display: 'flex', alignItems: 'center', justifyContent: 'center'}}  disablePadding>
           <Link style={{textDecoration: 'none', color:'hsl(219, 9%, 45%)', fontSize: '.7rem'}} to='/'>Contact</Link>
          </ListItem>
     
      </List>
  
          </Box>
          <div style={{  display: 'flex', alignItems: 'center', gap: '.6rem', width: '6rem'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
              
              
              <div style={{ position: 'relative'}}>
              <CartItemCounter  numOfCartItem={props.numOfCartItem}  />
              </div>

            <div onClick={handleShowCart} style={{cursor: 'pointer'}}>
            <ShoppingCartIcon fontSize='small' sx={{ color: 'gray'}} />
            </div>
         {CartFilled &&  <CartCard  />}
            </div>
         
          <img src={iconImg} alt=""  style={{ height: '2rem', width: '2rem', border: IconActive ? '2px solid hsl(26, 100%, 55%)' : 'none', borderRadius: '50%' }} onClick={handleIconActive}/>
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


