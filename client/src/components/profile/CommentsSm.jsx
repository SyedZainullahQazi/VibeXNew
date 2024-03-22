import React from 'react'
import { Button } from "@/shadcn-components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shadcn-components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/shadcn-components/ui/accordion"

import { Input } from "@/shadcn-components/ui/input"
import { Label } from "@/shadcn-components/ui/label"
import ImgUrl from "../../assets/ImageSlider/slider_3.jpg";
import { MdFavoriteBorder } from 'react-icons/md'
import FormPostSingle from './FormPostSingle'
import ReplyCommentForm from './ReplyCommentForm'
import ReplySm from './ReplySm'
import { MdDelete, MdEdit } from 'react-icons/md';
import { useEffect, useState } from 'react'
import getCommentBy_API from '@/apis/catalogue/commentBy_API'
import Cookies from 'js-cookie'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function CommentsSm(props) {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            console.log("0000000000000000000")
            console.log(props.userComment.commentBy);
            const commentUser = await getCommentBy_API(Cookies.get("jwtToken"), props.userComment._id);
            setUserData(commentUser);
            console.log("lallalalala")
            console.log(commentUser);
        }
        fetchData();
    }, [])
    return (
        <Card className="w-[95vw] flex flex-col p-2 mt-3
        lg:w-[60vw]">
            <div className="w-[95vw] flex flex-row pr-4 mt-3
            lg:w-[60vw]">
                <div>
                    <CardHeader className="p-0 ">
                        <CardDescription className="flex flex-col justify-between p-0 m-0 w-[14vw]
                        lg:w-[6vw]">
                            
                            <LazyLoadImage
                                src={userData?.profilepicture}
                                effect="blur"
                                className={`w-[11vw] h-[11vw] rounded-full lg:w-[4vw] lg:h-[4vw]`}
                            />

                        </CardDescription>
                    </CardHeader>
                </div>
                <div className="flex-grow">
                    <CardContent className="flex flex-col p-0">
                        <p className="font-bold 
                        md:text-2xl
                        lg:text-base">{userData?.name}</p>

                        <p className="md:text-xl lg:text-sm">{props.userComment.commentText}

                        </p>

                    </CardContent>
                </div>
                <div className="sm:flex sm:flex-col sm:space-y-2 
                lg:flex-row lg:space-y-0">
                    <div className="flex items-center mr-2">
                        <MdDelete className='flex text-2xl md:text-5xl lg:text-2xl text-red-500' />
                    </div>
                    <div className="flex items-center mr-2">
                        <MdEdit className='flex text-2xl md:text-5xl lg:text-2xl' />
                    </div>

                    <div className="flex items-center mr-7">
                        <MdFavoriteBorder className='flex text-2xl md:text-5xl lg:text-2xl' />
                    </div>
                </div>

            </div>
            <div className="w-[75vw] ml-14 md:ml-28
            lg:w-[50vw] lg:ml-[6vw] mb-6">
                <Accordion type="single" collapsible >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="md:text-xl lg:text-sm p-0 mt-2">REPLY</AccordionTrigger>
                        <div class="px-0 py-0">
                            <AccordionContent className="w-full ">
                                <div className="">
                                    <ReplyCommentForm />
                                    <ReplySm />
                                </div>
                            </AccordionContent>
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </Card>

    )
}

export default CommentsSm
