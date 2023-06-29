import './galery.scss';
import Slider from "react-slick";
import React, { useRef, useEffect } from "react";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Galery = () => {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      var settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };


      var settings3= {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };

      var settings4= {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (

        <div className='galery'> 

            <div className='photoslider' >  
                <div className='txt'>
                    Полка маркет   
                </div>
                <Slider {...settings}>
                        <img src = "img/1.jpg"/>               
                        <img src = "img/2.jpg"/>               
                        <img src = "img/3.jpg"/>               
                        <img src = "img/4.jpg"/>
                        <img src = "img/5.jpg"/>
                        <img src = "img/6.jpg"/>
                </Slider>
            </div>

            <div className='photoslider2' >  
                <div className='txt'>
                    Масло   
                </div>
                <Slider {...settings3}>
                        <img src = "img/1oil.jpg"/>               
                        <img src = "img/2oil.jpg"/>               
                        <img src = "img/3oil.jpg"/>               
                        <img src = "img/4oil.jpg"/>
                </Slider>
            </div>

            <div className='photoslider3' >  
                <div className='txt'>
                    Концепция фирменного стиля
                </div>
                <Slider {...settings2}>
                        <img src = "img/1b.jpg"/>               
                        <img src = "img/2b.jpg"/>               
                </Slider>
            </div>

            <div className='photoslider4' >  
                <div className='txt'>
                    Руководство по использованию логотипа
                </div>
                <Slider {...settings4}>
                        <img src = "img/1lig.jpg"/>               
                        <img src = "img/2lig.jpg"/>
                        <img src = "img/3lig.jpg"/>               
                        <img src = "img/4lig.jpg"/>   
                        <img src = "img/5lig.jpg"/>               
                        <img src = "img/6lig.jpg"/>   
                        <img src = "img/7lig.jpg"/>               
                        <img src = "img/8lig.jpg"/>   
                        <img src = "img/9lig.jpg"/>               
                        <img src = "img/10lig.jpg"/>                 
                </Slider>
            </div>

        </div>
  
    )

}



