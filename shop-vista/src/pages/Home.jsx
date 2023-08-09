import React, { useState } from 'react'
import Header from '../components/Header'
import { Container } from '@mui/material'
import ImgTop1 from '../assets/image-product-1-thumbnail.jpg'
import ImgTop2 from '../assets/image-product-2-thumbnail.jpg'
import ImgTop3 from '../assets/image-product-3-thumbnail.jpg'
import ImgTop4 from '../assets/image-product-4-thumbnail.jpg'


import Img1 from '../assets/image-product-1.jpg'
import Img2 from '../assets/image-product-2.jpg'
import Img3 from '../assets/image-product-3.jpg'
import Img4 from '../assets/image-product-4.jpg'

let ImgTop = [
  ImgTop1,
  ImgTop2,
  ImgTop3,
  ImgTop4,
];

let Img = [
  
  Img1,
  Img2,
  Img3,
  Img4
]
  


const Home = () => {
  const [selectedImg, setSelectedImg] = useState(ImgTop[0])
  const handleImageClick = (index) => {
    setSelectedImg(ImgTop[index]);
  };

  return (
    <>
   <Header /> 
    <Container style={{ padding: '0 6rem' }} >
    <div style={{ }}>
          <img src={selectedImg} alt="selected-product" style={{ maxHeight: '200px' }} />
        </div>
      <div style={{ display: 'flex' , gap: '1rem'}}>
{Img.map((imgSrc, index) => 
   (
    <div key={index} onClick={() => handleImageClick(index)} style={{ cursor: 'pointer' }}>
      <img   style={{ height: '3rem', width: '3rem', borderRadius: '.5rem'}} src={imgSrc} alt="product-1" />
      </div>
))}</div>
    </Container>
 

    </>
  )
}

export default Home