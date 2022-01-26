import { Slide, Slider } from '@material-ui/core';
import React from 'react';
import './Home.css';
import Product from './Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';
import './Footer'

SwiperCore.use([Navigation]);

function Home() {  
    const slides=[]
    for (let i=0;i<4;i +=1){
        slides.push(
            <SwiperSlide  key={`slide-${i}`} tag="li">
                <img className="swiper_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"  alt={`slide${i}`} ></img>  
   
            </SwiperSlide>    

        )
        slides.push(
            <SwiperSlide  key={`slide-${i}`} tag="li">
                <img className="swiper_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/Herotator/WFH/Offer/V2/WFH-Herotator-hero_1500x600._CB405299564_.jpg"  alt={`slide${i}`} ></img>  
   
            </SwiperSlide> 
        )
        slides.push(
            <SwiperSlide  key={`slide-${i}`} tag="li">
                <img className="swiper_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg"  alt={`slide${i}`} ></img>  
   
            </SwiperSlide> 
        )
        slides.push(
            <SwiperSlide  key={`slide-${i}`} tag="li">
                <img className="swiper_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/PostLaunch/Uber/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launchtall-hero_1500x600_1._CB405488972_.jpg"  alt={`slide${i}`} ></img>  
   
            </SwiperSlide> 
        )                        

    }
    
     
    return (
        <div className="home">
            <React.Fragment>
            <Swiper tag="section" wrapperTag="ul" className="main" navigation  >{slides}</Swiper>

            </React.Fragment>
            
          
       
            
          
            {/*<img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" alt=""></img>*/}
            
            {/* product id, title , price,rating,image */}
            <div className="home_row">
            <Product id="1233211341"
            title="Apple iPhone 11 (64GB) - Purple"
            price={63999}
            rating={3}
            image="https://m.media-amazon.com/images/I/51oXVi+ZhhL._AC_UY327_FMwebp_QL65_.jpg">

            </Product>
            {/* product*/}
            <Product id="325914798"
            title="Apple iPhone 11 Pro Max (512GB) - Midnight Green"
            price={109099}
            rating={4}
            image="https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY327_FMwebp_QL65_.jpg">

            </Product>

            

            </div>
            <div className="home_row">
            <Product id="124682419"
            title="Sony WH-1000XM3 Industry Leading Wireless Noise Cancelling Headphones, Bluetooth Headset with Mic"
            price={26990}
            rating={5}
            image="https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_UY327_FMwebp_QL65_.jpg">
            </Product>
             
            <Product id="632497147"
            title="Apple AirPods Pro"
            price={21349}
            rating={4}
            image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY327_FMwebp_QL65_.jpg">
                
            </Product>
            <Product id="632497147"
            title="GoPro CHDHC-601-RW HERO7 Camera (Black)"
            price={18999}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Xbu0FUDAL._AC_UY327_FMwebp_QL65_.jpg">
            </Product>
          
           
         
           
            </div>
            <div className="home_row">
            <Product id="32050417902"
            title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
            price={83500}
            rating={4}
            image="https://m.media-amazon.com/images/I/91pi34PiUPL._AC_UY327_QL65_.jpg">
            </Product>
            </div>
            <div className="home_row">
            <Product id="32050417902"
            title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
            price={199900}
            rating={5}
            image="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY327_FMwebp_QL65_.jpg">
            </Product>
            <Product id="32050417902"
            title="Microsoft Xbox One Wireless Controller with Bluetooth (With 3.5 mm Jack) (White)"
            price={5378}
            rating={3}
            image="https://m.media-amazon.com/images/I/61cIz9OsQOL._AC_UY327_FMwebp_QL65_.jpg">
            </Product>
            </div>
            
            
            
        </div>
       
    )
}


 

export default Home;
