"use client"
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";


export default function CLShomepage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-1000${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
      <Carousel 
        autoPlay={true}
        interval={5000}
        width="full"
        autoFocus={false}
        infiniteLoop={true}
        showArrows={false}
        showThumbs={false}
        dynamicHeight={false}
        swipeable={true}
        stopOnHover={false}
      >
        {/* <div>
          <img src="/cls/slide01.jpg" alt="slide1" style={{
                width: '100%',
                height: '100%',
              }} />
          <p className="legend">Beyond to new technology</p>
        </div> */}
        <div>
        
          <img src="/cls/slide02.jpg" alt="slide2" style={{
                width: '100%',
                height: '100%',
              }} />
          <p className="legend">Our Service</p>
        </div>
        <div>
          <img src="/cls/slide03.jpg" alt="slide3" style={{
                width: '100%',
                height: '100%',
              }}/>
          <p className="legend">You never seen before</p>
        </div>
        <div>
          <img src="/cls/slide04.jpg" alt="slide4" style={{
                width: '100%',
                height: '100%',
              }} />
          <p className="legend">5G planning</p>
        </div>
        <div>
          <img src="/cls/slide05.jpg" alt="slide5"  style={{
                width: '100%',
                height: '100%',
              }}/>
          <p className="legend">IoT Everywhere</p>
        </div>
      </Carousel>
    </div>
  );
}
