import Bottombar from '@/components/shared/Bottombar'
import Headline from '@/components/shared/Headline'
import LeftSideBar from '@/components/shared/LeftSideBar'
import TopBar from '@/components/shared/TopBar'
import React from 'react'

function Dashboard() {
  return (
    // Top Division
    <div>
        <div>
          <Headline />
        </div>
    {/* Left Side Bar */}

      <div className="flex flex-row">
        <LeftSideBar />
        <div className="flex flex-col">
          <div>
            Content
          </div>
          <div>
          Content
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