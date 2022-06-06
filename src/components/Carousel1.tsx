import React, { useRef } from 'react'
import roomfooter3 from "./images/roomfooter3.png"
import apartmentfooter3 from "./images/apartmentfooter3.png"
import housefooter3 from "./images/housefooter3.png"
import room2footer3 from "./images/room2footer3.png"
import room from "./images/room.svg"
import aparrtment from "./images/aparrtment.svg"
import house from "./images/house.svg"
import room2 from "./images/room2.svg"
import featuredplacesarrow from "./images/featuredplacesarrow.svg"
import prev from "./images/prev.svg"





const Carousel1 = () => {

    const dataRef: any = useRef();
    console.log(dataRef.current)

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
            image: room,
            footer: roomfooter3
        },
        {
            image: aparrtment,
            footer: apartmentfooter3
        },
        {
            image: house,
            footer: housefooter3
        },
        {
            image: room2,
            footer: room2footer3
        },
        {
            image: room,
            footer: roomfooter3
        },
        {
            image: aparrtment,
            footer: apartmentfooter3
        },
        {
            image: house,
            footer: housefooter3
        },
        {
            image: room2,
            footer: room2footer3
        },
        
        
    ]

    console.log(data)
    
  return (
      <div className='featured-places-carousel'>
          <h1>Featured Places</h1>

           <div className='carousel'>
                <img src={prev} alt="" className='prev-btn' onClick={scrollLeft}/>
               <div className='carousel-wrapper' ref={dataRef}>
                    {data.map((item:any,index:any) => {
                        return(
                            <div key={index} className="carousel-item">
                                <img src={item.image} alt="" className='carousel-image' />
                                <img src={item.footer} alt="" className='carousel-image' />
                            </div>
                        )
                    })}
               </div>
        {/* {data.length && <div className='carousel-wrapper' ref={dataRef}>
            {data.map((item:any, index:number) => {
                return(
                    <div key={index} className="carousel-item"  >

                <img src={item.image} alt=""  className='carousel-image'/>
                <img src={item.footer} alt="" className='carousel-image' />

            </div>
                )
            })}
            
            </div>
        } */}
        <img src={featuredplacesarrow} alt="" onClick={scrollRight} className="carousel1-btn"/>
    </div>
      </div>

    
   
  )
}

export default Carousel1