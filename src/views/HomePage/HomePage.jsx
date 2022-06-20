import React, { useState, useEffect } from 'react';
import "./styles.css";

//icons
import boys from "../../assets/icons/boys.png";
import women from "../../assets/icons/women.png";
import kids from "../../assets/icons/kids.png";
import sale from "../../assets/icons/sale.png";

const HomePage = () => {
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    setTimeout(() => {
      setLoading(true)
    },3000);
  },[])

  return (
    <div data-testid="home">
      <div className='homeCard item1 skeleton'>
        {loading && <img src={"https://c4.wallpaperflare.com/wallpaper/28/832/21/ultrawide-8k-no-mans-sky-poster-wallpaper-thumb.jpg"} alt="" id='homeImage'/>}
      </div>
      <div className='homeCard item2'>
        <div>
          <img src={boys} alt=""/>
          MEN
        </div>
        <div>
          <img src={women} alt=""/>
          WOMEN
        </div>
        <div>
          <img src={kids} alt=""/>
          KIDS
        </div>
        <div>
          <img src={sale} alt=""/>
          SALE
        </div>
      </div>
      <div className='homeCard item3 skeleton'>
        {loading && <img src={"http://cdn.shopify.com/s/files/1/0510/7489/articles/MachinCreationsInc-seotool-28081-TheDifferentTypes-BlogBanner1_1024x1024.jpg?v=1576163202"} alt="" id='homeImage'/>}
      </div>
      <p>There is something For Everyone.</p>
      <div className='homeCard item4'>
        <div className='skeleton'> 
        {loading && <img src={"https://randomwordgenerator.com/img/picture-generator/52e9d54a4956af14f1dc8460962e33791c3ad6e04e507441722a72dc9e4bc7_640.jpg"} alt="" className='gridImage'/>}
        </div>
        <div className='skeleton'>
         {loading && <img src={"https://www.w3schools.com/w3images/mountainskies.jpg"} alt="" className='gridImage'/>}
        </div>
        <div className='skeleton'>
          {loading && <img src={"https://www.w3schools.com/w3images/paris.jpg"} alt="" className='gridImage'/>}
        </div>
        <div className='skeleton'>
          {loading && <img src={"https://www.w3schools.com/w3images/nature.jpg"} alt="" className='gridImage'/>}
        </div>
        <div className='skeleton'>
          {loading && <img src={"https://www.w3schools.com/w3images/wedding.jpg"} alt="" className='gridImage'/>}
        </div>
        <div className='skeleton'>
          {loading && <img src={"https://www.w3schools.com/w3images/underwater.jpg"} alt="" className='gridImage'/>}
        </div>
      </div>
      <div className='homeCard item5 skeleton'>
        {loading && <img src={"https://assets.vogue.com/photos/5f6254938bf8cfd653392788/16:9/w_1280,c_limit/social-holding.jpg"} alt="" id='homeImage'/>}
      </div>

    </div>
  )
}

export default HomePage