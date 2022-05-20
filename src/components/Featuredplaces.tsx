import React from 'react'
import roomfooter3 from "./images/roomfooter3.png"
import apartmentfooter3 from "./images/apartmentfooter3.png"
import housefooter3 from "./images/housefooter3.png"
import room2footer3 from "./images/room2footer3.png"
import room from "./images/room.svg"
import aparrtment from "./images/aparrtment.svg"
import house from "./images/house.svg"
import room2 from "./images/room2.svg"
import featuredplacesarrow from "./images/featuredplacesarrow.svg"

const Featuredplaces = () => {
  return (
    <div>
        <div className='featured-places'>
            <h1>Featured Places</h1>
            <div className='featured-places-wrapper'>
                <div>
                    <img src={room} alt=""  className='room'/>
                    <img src={roomfooter3} alt="" className='roomfooter' />
                </div>
                <div>
                    <img src={aparrtment} alt="" className='apartment'/>
                    <img src={apartmentfooter3} alt="" className='apartmentfooter'/>
                </div>
                <div>
                    <img src={house} alt="" className='house' />
                    <img src={housefooter3} alt="" className='housefooter'/>
                </div>
                <div> 
                    <img src={room2} alt="" className='room2' />
                    <img src={room2footer3} alt="" className='room2footer'/>
                    <img src={featuredplacesarrow} alt="" className='arrow' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featuredplaces