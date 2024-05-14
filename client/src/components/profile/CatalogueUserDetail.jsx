import React from 'react'
import {
    Card,
  } from "@/shadcn-components/ui/card"
import { Button } from '@/shadcn-components/ui/button'
import { NavLink, useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function CatalogueUserDetail({catalogueDetail}) {

  return (
    <Card className="rounded-3xl h-[10vh] w-[40vw]  mt-[1vh] ">
  
   
    <div className="flex justify-between ">
    <div className="mt-2">
    <NavLink to={`/profile/${catalogueDetail.uploadedBy._id}`}>
        <div className="flex">
          <LazyLoadImage
            src={catalogueDetail?.uploadedBy?.profilepicture}
            effect="blur"
            className={`w-[3.1vw] h-[7vh] ml-[1vw] mr-[1vw] rounded-full`}
          />

          <p className="text-base  mt-[1.2vh] font-bold">{catalogueDetail?.uploadedBy?.name}</p>
          </div>
    </NavLink>
    </div>
    <div>
        <Button className="rounded-3xl mt-[1.3vh] mr-[2vh] bg-[#059669]"
        >
            {new Date(catalogueDetail?.date).toISOString().split('T')[0]}
        </Button>
    </div>
    </div>
</Card>

  )
}

export default CatalogueUserDetail;