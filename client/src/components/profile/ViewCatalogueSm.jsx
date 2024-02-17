import React from 'react'
import { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProfileCatalogueSliderSm from '../Slider/ProfileCatalogueSliderSm';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/shadcn-components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcn-components/ui/form"
import { Input } from "@/shadcn-components/ui/input"
import { toast } from "@/shadcn-components/ui/use-toast"
import { FaHeart } from 'react-icons/fa'


import VibeLayout from '../shared/VibeLayout';
import FormPostSingle from './FormPostSingle';
import CommentsSm from './CommentsSm';
import { Separator } from '@/shadcn-components/ui/separator';
const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

function ViewCatalogueSm() {
  const location = useLocation();

  useEffect(() => {
    console.log(location.state);
  }, [location.state]); // Example of using useEffect to manage side effects related to state changes

  function viewCatalogueSm(){
    return(
      <div className="flex flex-col p-0 
      lg:w-[60vw] lg:items-center lg:mt-4">
          <div className="w-screen  lg:h-[80vh]  h-[50vh] items-center justify-center bg-black
          lg:w-[60vw]">
            <ProfileCatalogueSliderSm images={location.state.images} />
          </div>

          <div className="flex flex-col h-[41vh] lg:w-[60vw] lg:h-fit">
            <div className="">
              <FormPostSingle />
            </div>
            <div>
              <Separator  className="mt-3 mb-2"/>
            </div>
            <div className="flex flex-col items-center mt-3 ">
            <p className="font-bold mb-2 md:text-xl">Comments</p>
            <CommentsSm />
            <CommentsSm />
            <CommentsSm />
            </div>
              
          </div>
            
        </div>
    )
  }
  return location?.state ? (
    <VibeLayout
      elementBody={viewCatalogueSm}
    />
  ) : (
    <div>Hello World</div>
  )
}

export default ViewCatalogueSm