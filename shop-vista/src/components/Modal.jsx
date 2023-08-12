
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import useMediaQuery from '@mui/material/useMediaQuery';

const Modal = ({ products, selectedProductIndex, closeModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(selectedProductIndex);


const isMobile = useMediaQuery('(min-width:0px) and (max-width:599.99px)')
// const tabSize = useMediaQuery('(min-width:600px) and (max-width:900px)');
// const pcSize = useMediaQuery('(min-width:900px)');
  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentImageIndex < products.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };
 
    
  
  return (
    <div style={{ 
     position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000, 
      flexDirection: 'column',
      marginTop: '3rem'
      }}>

      <span className="close-button" onClick={closeModal} style={{ cursor: 'pointer'}}>
       <CloseIcon style={{color: 'hsl(26, 100%, 55%)'}}/>
      </span>
      <div className="modal-content">
        <button className="prev-button" onClick={prevImage} style={{position: 'absolute', top: '50%', marginLeft: '2rem' }}>
          &#8249;
        </button>
        <img src={products[currentImageIndex].mainImg} alt="Product" style={{ height: isMobile ? '22rem' : '28rem' , width: isMobile ? '22rem' : '28rem'}} />
        <button className="next-button" onClick={nextImage} style={{position: 'absolute', top: '50%', marginLeft: '-3rem' }}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Modal;
 