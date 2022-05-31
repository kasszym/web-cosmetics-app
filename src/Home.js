import './index.css';
import './data.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './Menu/Sidebar';
import Bars from './Menu/Bars';
import React, { useEffect } from 'react';
import Tekst from './Menu/Tekst';
import ParallaxF from './Parallax';
import data from './Products/data';
import s1 from './images/sculptures/s1.png'
import s2 from './images/sculptures/s2.png'
import s3 from './images/sculptures/s3.png'
import s32 from './images/sculptures/s32.png'
import s4 from './images/sculptures/s4.jpg'
import aboutUs from './Products/aboutUs';
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import newsData from './News/newsData';
import NewsGrid from './News/NewsGrid';
import Contact from './Contact';
import Products from './Products/Products';
import AboutUs from './Products/aboutUs';


function Home() {

  const [menu, setMenu] = React.useState(false)
  const [openClose, setOpenCLose] = React.useState(true)
  const [dataProducts, setDataProducts] = React.useState(data)
  const [productId, setProductId] = React.useState(0)
  const [aboutUsId, setAboutUsId] = React.useState(0)
  const [aboutUsData, setAboutUsData] = React.useState(aboutUs)
  const [dataNews, setDataNews]= React.useState(newsData)


  useEffect(()=> {
    const lastIndex = dataProducts.length-1
    if(productId <0){
    setProductId(lastIndex)}
    if(productId>lastIndex){
    setProductId(0)}
  },[productId, dataProducts])



  useEffect(() => {
    let slider = setInterval(() => {
      setProductId(productId + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [productId]);

  useEffect(()=>{
    const lastIndex = aboutUsData.length-1
    if(aboutUsId<0){
      setAboutUsId(lastIndex)}
     if(aboutUsId>lastIndex)
      {
        setAboutUsId(0)
      }
    },[aboutUsId, aboutUsData])

  // useEffect(()=>{
  //   let slider = setInterval(()=>{
  //     setAboutUsId(aboutUsId+1)
  //   },10000)
  //   return () => {
  //     clearInterval(slider)
  //   }
  // }, [aboutUsId])


  const toggleSidebar = () => {
    setMenu((prevState) => !prevState)
    setOpenCLose((prevState) => !prevState)
  }
  const [closeBtn, setCloseBtn] = React.useState(true)
  const closeSidebar = () => {
    setCloseBtn((prevState) => !prevState)
  }


  return (
 
      
   <div className = "site">
  
    {/* <Route path = "/products" element = {<Products />}/> */}

     <div>
     <Sidebar
      toggleSidebar = {toggleSidebar}
      openClose = {openClose} />
     <Bars 
     close = {closeSidebar}
     bars = {menu} />
     </div>
     <Tekst />
     <ParallaxF />
     <div className = "containerOutside">
     <p className = "ourProducts">Our bestsellers</p>
    <div className = "container">
      <div className = "s1"><img src = {s1}/></div>
      <div className = "s2"><img src = {s2}/></div>
      <div className = "s3"><img src = {s3}/></div>
      <div className = "s4"><img src = {s4}/></div>
     <div className = "productsContainer">
       <div className = "displayProducts">
       {dataProducts.map((product, productIndex) => {
          const { id, image } = product;

          let position = 'nextSlide';
          if (productIndex === productId) {
            position = 'activeSlide';
          }
          if (
            productIndex === productId - 1 ||  (productId === 0 && productIndex === dataProducts.length - 1)
          ) {
            position = 'lastSlide';
          }
      
       return(
         <article className = {position} key = {id}>
           <div className = "imgContainer"><img className= "productImage" alt = "" src = {image}/></div>
         </article>
       )
        })}

         </div>
         </div></div>
        <div className = "productText">
        <p id = "productText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

   </div>

   <div id = "aboutUsContainer" className = "aboutUsContainer">
     <div className = "aboutUsSlider">
       {aboutUsData.map((img, imgId)=>{
         const {id, title, description, image} = img

         let position = 'nextSlide';
          if (imgId === aboutUsId) {
            position = 'activeSlide';
          }
          if (
            imgId === aboutUsId - 1 ||  (imgId === 0 && aboutUsId === aboutUsData.length - 1)
          ) {
            position = 'lastSlide';
          }
      
         return(
           <article id = "slider" className = {position} key = {id}>
           <div className = "abousUsImg"><img src = {image}/></div>
           <div className="sliderText"><p className = "aboutUsTitle">{title}</p>
             <p className = "aboutUsDesc">{description}</p></div>
           </article>
         )
       })}
     </div>
     <div className = "buttonsSlider">
     <button className= "btnSlider" onClick={() => setAboutUsId(prevValue => prevValue-1)}><RiArrowLeftSLine /></button>
     <button className = "btnSlider" onClick={() => setAboutUsId(prevValue => prevValue+1)}><RiArrowRightSLine /></button>
   </div>
   </div>
    
    <div className = "newsContainer">

      <div className = "newsGrid">
      <p className = "ourProducts" id = "news">New products</p>
        <div id = "newsContainer" className = "newsGridIn">
          <NewsGrid /></div>
      </div>
      <div className = "contactContainer">
        <Contact />
      </div>
    </div> 
 
   </div>
 
  );
}


export default Home;
