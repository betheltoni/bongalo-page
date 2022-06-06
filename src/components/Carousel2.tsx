import React, { useRef } from 'react'
import memorial from "./images/memorial.svg"
import nirvana from "./images/nirvana.svg"
import anastasia from "./images/anastasia.svg"
import mountain from "./images/mountain.svg"
import experiencesfooter from "./images/experiencesfooter.svg"
import featuredplacesarrow from "./images/featuredplacesarrow.svg"
import prev from "./images/prev.svg"


const Carousel2 = () => {

    const dataRef:any = useRef(null);

    const scrollRight = () => {
        if (dataRef.current) {
            dataRef.current.scrollBy({
                top: 0,
                left: 200,
                behavior: "smooth",
            });
        }
    };

    const scrollLeft = () => {
        if (dataRef.current) {
            dataRef.current.scrollBy({
                top: 0,
                left: -200,
                behavior: "smooth",
            });
        }
    };

    const data:any = [
        {
            image: memorial,
            footer: experiencesfooter,
            text: "Kigali Genocie Memorial"
        },
        {
            image: mountain,
            footer: experiencesfooter,
            text: "Mountain View"
        },
        {
            image: anastasia,
            footer: experiencesfooter,
            text: "Anastasia Paradise"
        },
        {
            image: nirvana,
            footer: experiencesfooter,
            text: "Nirvana Heights"
        },
        {
            image: memorial,
            footer: experiencesfooter,
            text: "Kigali Genocie Memorial"
        },
        {
            image: mountain,
            footer: experiencesfooter,
            text: "Mountain View"
        },
        {
            image: anastasia,
            footer: experiencesfooter,
            text: "Anastasia Paradise"
        },
        {
            image: nirvana,
            footer: experiencesfooter,
            text: "Nirvana Heights"
        },
        
    ]

    console.log(data);

  return (
    <div className='experience-carousel'>
        <h1>Some Amazing Experiences</h1>
        <div className='carousel'>
        <img src={prev} alt="" className='prev-btn' onClick={scrollLeft}/>
        <div className='carousel-wrapper' ref={dataRef}>
                    {data.map((item:any,index:any) => {
                        return(
                            <div key={index} className="carousel-item">
                                <img src={item.image} alt="" className='carousel-image' />
                                <p className='carousel-text'>{item.text}</p>
                                <img src={item.footer} alt="" className='carousel-image' />
                            </div>
                        )
                    })}
               </div>
        
        {/* {data.length && <div className='carousel-wrapper' >
            {data.map((item:any, index:number) => <div key={index} className="carousel-item" ref={dataRef} >

                <img src={item.image} alt=""  className='carousel-image'/>
                <p className='carousel-text'>{item.text}</p>
                <img src={item.footer} alt="" className='carousel-image experience-footer' />

            </div>)}
            
            </div>
        } */}
        <img src={featuredplacesarrow} alt="" onClick={scrollRight} className="carousel1-btn"/>
        </div>
    </div>
  )
}

export default Carousel2