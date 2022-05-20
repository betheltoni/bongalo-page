import React from 'react'

const Featuredcities = () => {
  return (
      <div>
          <div className='featured-cities'>
            <h1>Featured Cities</h1>
            <div className='featured-cities-wrapper'>
                <div className='kigali'>
                    <div className='overlay'>
                        <div className='text'>
                            <h1>Kigali</h1>
                            <p>25 Properties</p>
                        </div>
                    </div>
                </div>
                <div className='yaounde'>
                    <div className='overlay'>
                        <div className='text'>
                            <h1>Yaounde</h1>
                            <p>15 Properties</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <div className='featured-cities-wrapper-2'>
                <div className='rubavu'>
                    <div className='overlay'>
                        <div className='text'>
                            <h1>Rubavu</h1>
                            <p>32 Properties</p>
                        </div>
                    </div>
                </div>
                <div className='doula'>
                    <div className='overlay'>
                        <div className='text'>
                            <h1>Doula</h1>
                            <p>16 Properties</p>
                        </div>
                    </div>
                </div>
                <div className='butare'>
                    <div className='overlay'>
                        <div className='text'>
                            <h1>Butare</h1>
                            <p>32 Properties</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Featuredcities