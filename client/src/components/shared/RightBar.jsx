import React from 'react'
import RightAdvertSlider from '../Slider/RightAdvertSlider';

function RightBar() {
  return (
      <div className=" sticky flex-col items-around h-screen bg-slate-200 w-80 hidden lg:flex">
        <div>
          <RightAdvertSlider/>
        </div>
          {/* <hr className='mt-2'/>
          <div>
            Haylou
          </div> */}
      </div>
  )
}

export default RightBar;