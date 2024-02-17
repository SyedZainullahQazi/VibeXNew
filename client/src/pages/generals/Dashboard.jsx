import Bottombar from '@/components/shared/Bottombar'
import Headline from '@/components/shared/Headline'
import LeftSideBar from '@/components/shared/LeftSideBar'
import RightBar from '@/components/shared/RightBar';
import React, { useState } from 'react'
import Catalogue from './Catalogue'
import VibeLayout from '@/components/shared/VibeLayout';

function Dashboard() {
  const [showCatalogue, setShowCatalogue] = useState(false);
  const showCatalogueHandler = (state) => {
    console.log("This Fuction in Dashboard is Called");
    setShowCatalogue(state);
    console.log("This Fuction in Dashboard is Called");
  }
  function temp(){
    return (<div>Hello</div>)
  }
  return (
    <VibeLayout elementBody={temp}
    />
  )
}

export default Dashboard