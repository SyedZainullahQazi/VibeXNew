import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProfileCatalogueSliderSm from '../Slider/ProfileCatalogueSliderSm';
import { z } from "zod"


import VibeLayout from '../shared/VibeLayout';
import FormPostSingle from './FormPostSingle';
import CommentsSm from './CommentsSm';
import { Separator } from '@/shadcn-components/ui/separator';
import { CatalogueCommentAdd_API, CatalogueCommentGet_API } from '@/apis/catalogue/CatalogueComments_API';
import Cookies from 'js-cookie';
const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

function ViewCatalogueSm() {
  const location = useLocation();
  const [comments, setComments] = useState(["sss"]);
  const [commentSwitch,setCommentSwitch]=useState(false);

  const commentSwitchHandler=(truthVal)=>{
    setCommentSwitch(truthVal);
  }

  useEffect(() => {
    console.log("------------------------$");
    console.log(location.state);
    console.log("-------------------------$");
  }, [location.state]);

  useEffect(() => {
    async function fetchData() {
      const userComments = await CatalogueCommentGet_API(Cookies.get("jwtToken"), location.state._id)
      setComments(userComments.comments);
      console.log("-------------------")
      console.log(userComments.comments);
      console.log("---------------------");
    }
    fetchData();
  }, [commentSwitch])
  useEffect(()=>
  {
    console.log("**********************");
    console.log(comments[0]);
    console.log("-*************************");
  },[comments])

  function viewCatalogueSm() {
    return (
      <div className="flex flex-col p-0  
      lg:w-[60vw] lg:items-center lg:mt-4 mb-10">
        <div className="w-screen  lg:h-[80vh]  h-[50vh] items-center justify-center bg-black
          lg:w-[60vw]">
          <ProfileCatalogueSliderSm images={location.state.images} />
        </div>

        <div className="flex flex-col h-[41vh] lg:w-[60vw] lg:h-fit">
          <div className="">
            <FormPostSingle postData={location.state} stateHandler={commentSwitchHandler} switchVal={commentSwitch}/>
          </div>
          <div>
            <Separator className="mt-3 mb-2" />
          </div>
          <div className="flex flex-col items-center mt-3 ">
            <p className="font-bold mb-2 md:text-xl">Comments</p>
            {Array.isArray(comments) &&
              comments.map((userComment, index) => (
                <CommentsSm key={index} userComment={userComment} />
              ))
             
              
            }


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