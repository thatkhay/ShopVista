import React, { useState } from 'react'
import {data} from '../data'
import Header from '../components/Header'
import { Container } from '@mui/material'
import Modal from '../components/Modal'
import useMediaQuery from '@mui/material/useMediaQuery';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../reduxstore/counter'
import { addtocart } from '../reduxstore/cart'


function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  const openModal = (index) => {
    setSelectedProductIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isMobile = useMediaQuery('(min-width:0px) and (max-width:599.99px)')
  const tabSize = useMediaQuery('(min-width:600px) and (max-width:900px)');
  const pcSize = useMediaQuery('(min-width:900px)');

  const [buttonClicked, setButtonClicked] = useState(false);

const { count } = useSelector((state) => state.counter)

const dispatch = useDispatch()
  const [products] = useState(data)
  const [value, setValue] = useState(0)


  const { mainImg } = products[value]

  


  return (
   
    
    <Container style={{padding: isMobile ? '0' : 'auto', height: pcSize ? '100vh' : 'auto'}}>
   <Header/>
   {isModalOpen && (
        <Modal products={products} selectedProductIndex={selectedProductIndex} closeModal={closeModal} />
      )}
   <Container style={{alignItems: 'center', display: 'flex', marginTop: '3rem', flexDirection: isMobile ? 'column' : 'row', gap: tabSize ? '3rem' : '1rem'}}>
   <main style={{ display: 'flex' , alignItems: 'center' ,  flexDirection: 'column' , width: '50%'}}>
    
    <div style={{position: 'relative', zIndex: 50}}>
    <img src={mainImg} alt="" style={{ height: '20rem', width: '18rem', borderRadius: '.7rem' }} onClick={() => openModal(value)} />
    <div>

    </div>
    </div>

    <ul style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '18rem', marginLeft: '-2rem'}}>
    {products.map((item, index) => (
    <li style={{ display: 'flex' , height: '3.5rem', width: '3.5rem', border: index === value && '2px solid hsl(26, 100%, 55%)', borderRadius: '.6rem', opacity: index === value && 0.5 , overflow: index === value && 'hidden'}} key={item.id} onClick={() => setValue(index)}> <img src={item.thumbnail} alt=""  style={{borderRadius: '.4rem'}}/> </li>
     ))}
    </ul>
    </main>
  

    <main style={{width: isMobile ? '80%' : '50%'}}>
   <h2 style={{textTransform: 'uppercase', color: 'hsl(26, 100%, 55%)', fontSize: '.6rem', fontWeight: 900, letterSpacing: '.8px'}}>Sneaker Company</h2>
   <h1 style={{width: isMobile? '100%' : '70%', fontWeight: 700, textTransform: 'capitalize'}}>Fall limited edition sneaker</h1>
   <p style={{fontSize: '.7rem', color: ' hsl(219, 9%, 45%)', fontWeight: 700, textTransform: 'capitalize', letterSpacing: '.02rem'}}>these low-profile sneaker are your perfect causual wear companion. featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>

   <div style={{display: 'flex', justifyContent: isMobile ? 'space-between' : '0', width: isMobile ? '100%' : '13rem', flexDirection: isMobile ? 'row' : 'column'}}>

    <div style={{display: 'flex', alignItems:'center' , gap: '1rem', marginTop: '1.5rem'}} >
      <span style={{fontSize: '1.2rem', color: 'black', fontWeight: 900}}>$125.00</span>
      <span style={{fontSize: '.7rem', backgroundColor: 'hsl(25, 100%, 94%)', padding: '.2rem .3rem', borderRadius: '.3rem', color: 'hsl(26, 100%, 55%)'}}>50%</span>
    </div>
    <span style={{textDecoration: 'line-through', fontSize: '.7rem', marginTop: isMobile ? '2rem' : '1rem', color: 'hsl(220, 14%, 75%)'}}>$250</span>
   </div>

   <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem' , marginTop: '1.5rem', flexDirection: isMobile ? 'column' : 'row'}}>
  <div style={{ height: '2rem', width: isMobile ? '70%' : '20%', display: 'flex', alignItems: 'center', backgroundColor: 'hsl(223, 64%, 98%)', padding: '0 1rem', borderRadius: '.3rem' , justifyContent: 'center', gap: tabSize ? '.4rem' : '2rem'}}>
    <div onClick={() => dispatch(decrement())}><RemoveIcon fontSize='small' sx={{color: 'hsl(26, 100%, 55%)'}} /></div>
    <span>{count}</span>
   <div onClick={() => dispatch(increment())}><AddIcon fontSize='small' sx={{color: 'hsl(26, 100%, 55%)'}}/></div> 
  </div>
  <div style={{ height: '2rem', width: isMobile ? '70%' :  '40%', display: 'flex', alignItems: 'center', padding: '0 1rem', backgroundColor: 'hsl(26, 100%, 55%)', borderRadius: '.3rem', justifyContent: 'center', gap: '1rem', cursor: 'pointer'}}  onClick={() => {
    dispatch(addtocart({ ...products[value], quantity: count }));
    setButtonClicked(true); 
  }}>
    <ShoppingCartIcon fontSize='small' style={{color: 'white'}}/>
    <p style={{textTransform: 'capitalize', color: 'white', fontSize: tabSize ? '.6rem' : '1rem'}}>add to cart</p> 
    {buttonClicked && <p>{count}</p>}
  </div>
   </div>
    </main>

    
    </Container>
    </Container>
    
  )
}

export default Home