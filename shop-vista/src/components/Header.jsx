import React from 'react'
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
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const drawerWidth = 240;


function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
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
    <Box style={{ display: 'flex' }}>
    
      <AppBar component="nav" style={{backgroundColor: 'hsl(0, 0%, 100%)',  width: mobileOpen ? '100%' : '80%' , marginRight: mobileOpen ? '0' : '10%', display: 'flex'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ color: 'black'}} />
          </IconButton>
          <h1 style={{fontSize: '700', color:'black'}}> sneakers </h1>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
          
     <List style={{ display: 'flex' , width: '600px', justifyContent: 'space-between', marginLeft: '4rem'}}>
       
          <ListItem  disablePadding>
           <Link style={{textDecoration: 'none',  color:'hsl(219, 9%, 45%)', fontSize: '.7rem'}} to='/'>Home</Link>
          </ListItem>
          
          <ListItem  disablePadding>
           <Link style={{textDecoration: 'none', color:'hsl(219, 9%, 45%)', fontSize: '.7rem'}} to='/men'>Men</Link>
          </ListItem>
          
          <ListItem  disablePadding>
           <Link style={{textDecoration: 'none', color:'hsl(219, 9%, 45%)', fontSize: '.7rem'}} to='/women'>Women</Link>
          </ListItem>
          
          <ListItem  disablePadding>
           <Link style={{textDecoration: 'none', color:'hsl(219, 9%, 45%)', fontSize: '.7rem'}} to='/about'>About</Link>
          </ListItem>
          
          <ListItem  disablePadding>
           <Link style={{textDecoration: 'none', color:'hsl(219, 9%, 45%)', fontSize: '.7rem'}} to='/contact'>Contact</Link>
          </ListItem>
     
      </List>
  
          </Box>
          <div style={{ marginLeft: '12rem' }}>
          <ShoppingCartIcon sx={{ color: 'gray'}}/>
          <img src="" alt="" />
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
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
       
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;


