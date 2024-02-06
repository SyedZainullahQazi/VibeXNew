import Bottombar from '@/components/shared/Bottombar'
import Headline from '@/components/shared/Headline'
import LeftSideBar from '@/components/shared/LeftSideBar'
import RightBar from '@/components/shared/RightBar';
import React, { useState } from 'react'
import Catalogue from './Catalogue'

function Dashboard() {
  const [showCatalogue, setShowCatalogue] = useState(false);
  const showCatalogueHandler = (state) => {
    console.log("This Fuction in Dashboard is Called");
    setShowCatalogue(state);
    console.log("This Fuction in Dashboard is Called");
  }

  return (
    // Top Division
    <div className="">
      <div>
        <Headline />
      </div>
      {/* Left Side Bar */}

      <div className="flex flex-row justify-between">
        <LeftSideBar CatalogueHandler={showCatalogueHandler} />

        <div className="flex flex-row justify-center w-10/12 bg-[#f1f5f9] text-white">
          <div>
            {showCatalogue ? <Catalogue /> : <></>}
            <div> 
              heylo
            </div>
            <div >
              heylo
            </div>
          </div>
        </div>
        <RightBar />
        <Bottombar />
      </div>
      <div>

      </div>

    </div>

  )
}

export default Dashboard