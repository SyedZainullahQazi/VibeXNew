import React from 'react'
import {
    Card,
  } from "@/shadcn-components/ui/card"
import { Button } from '@/shadcn-components/ui/button'
import ImgUrl3 from "../../assets/ImageSlider/slider_3.jpg";
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function UserSearch({userData}) {
  return (
    <Card className="rounded-3xl h-[10vh] mt-[1vh]  ">
  
   
    <div className="flex justify-between ">
    <div className="mt-2">
    <NavLink to={`/profile/${userData?._id}`}>
        <div className="flex">
          <LazyLoadImage
            src={userData?.profilepicture}
            effect="blur"
            className={`w-[3.1vw] h-[7vh] ml-[1vw] mr-[1vw] rounded-full`}
          />

          <p className="text-base  mt-[1.2vh] ">{userData?.name}</p>
          </div>
    </NavLink>
    </div>
    <div>
    <NavLink to={`/profile/${userData?._id}`}>
        <Button className="rounded-3xl mt-[1.3vh] mr-[2vh]">View</Button>
    </NavLink>
    </div>
    </div>
</Card>

  )
}

export default UserSearch