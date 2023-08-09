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
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const handleImageClick = (index) => {
    setSelectedImg(ImgTop[index]);
    setSelectedImgIndex(index)
  };

  return (
    <>
   <Header /> 
    <Container style={{ padding: '0 6rem' }} >
    <div style={{ height: '' }}>
          <img src={selectedImg} alt="selected-product" style={{ maxHeight: '22rem', width: '18rem', borderRadius: '.6rem' }} />
        </div>
      <div style={{ display: 'flex' ,  width: '18rem', justifyContent: 'space-between'}}>
{Img.map((imgSrc, index) => 
   (
    <div key={index} onClick={() => handleImageClick(index)} style={{ cursor: 'pointer' }}>
      <img   style={{ height: '3.4rem', width: '3.4rem', borderRadius: '.5rem', border: selectedImgIndex === index ?  '2px solid hsl(26, 100%, 55%)' : 'none', backgroundColor: selectedImgIndex === index ? 'hsl(25, 100%, 94%)' : 'none'  }} src={imgSrc} alt="product-1" />
      </div>
))}</div>
    </Container>
 

    </>
  )
}

export default Home