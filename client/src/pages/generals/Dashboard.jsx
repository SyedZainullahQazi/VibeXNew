import Bottombar from '@/components/shared/Bottombar'
import Headline from '@/components/shared/Headline'
import LeftSideBar from '@/components/shared/LeftSideBar'
import TopBar from '@/components/shared/TopBar'
import React, { useState } from 'react'
import Catalogue from './Catalogue'

function Dashboard() {
  const [showCatalogue,setShowCatalogue]=useState(false);
  const showCatalogueHandler=(state)=>{
    console.log("This Fuction in Dashboard is Called");
    setShowCatalogue(state);
    console.log("This Fuction in Dashboard is Called");
  }

  return (
    // Top Division
    <div>
        <div>
          <Headline />
        </div>
    {/* Left Side Bar */}

      <div className="flex flex-row">
        <LeftSideBar CatalogueHandler={showCatalogueHandler}/>
        <div className="flex flex-col">
          <div>
            {showCatalogue?<Catalogue/>:<></>}
          <div>
            Content
          </div>
          <div>
          Content
          </div>
          </div>
        </div>
        <Bottombar/>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Dashboard