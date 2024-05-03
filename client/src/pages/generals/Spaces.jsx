import React from 'react'
import VibeLayout from '@/components/shared/VibeLayout';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/shadcn-components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/shadcn-components/ui/button"
import { Input } from "@/shadcn-components/ui/input"
import { toast } from "@/shadcn-components/ui/use-toast"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shadcn-components/ui/card"
import SpaceSearch from '@/components/spaces/TopSpaces';
import spaceArr from '@/components/spaces/SpaceArr';
import AllSpaces from '@/components/spaces/AllSpaces';



const FormSchema = z.object({
    space: z.string().min(2, {
        message: "Spaces must be at least 2 characters.",
    }),
})


function Spaces() {
    return (
        <VibeLayout elementBody={myTemp} />
    )
}

function myTemp() {

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            space: "",
        },
    })

    async function onSubmit() {
        // Handle form submission
    }

    return (
        <>
            {/* <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex ">
                    <FormField
                        control={form.control}
                        name="spaces"
                        render={({ field }) => (
                            <FormItem className="ml-[10vh]">
                                <FormControl>
                                    <Input placeholder="Search Space" {...field} className="mt-[6vh] sm:w-[70vw] md:md:text-lg lg:w-[40vw] lg:text-base" />
                                </FormControl>
                                {form.formState.errors.username ? (
                                    <FormMessage>{form.formState.errors.spaces.message}</FormMessage>
                                ) : (
                                    <div className="p-[2vh]"></div>
                                )}
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="mt-[6vh] ml-[4vw] sm:w-[15vw] lg:w-[8vw] lg:text-sm lg:ml-[2vw]">find</Button>
                </form>
            </Form> */}

            <Card className="mt-[5vh] w-[110vh]">
                <CardHeader>
                    <CardTitle className="ml-[-1vh]">Top Spaces</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-wrap overflow-x-auto ml-[-14.2vh]">
                    {spaceArr.slice(0, 3).map((space, index) => (
                        <div key={index} className={`${index > 0 ? 'ml-[-14vh]' : ''}`}>
                            <SpaceSearch
                                imageUrl={space.imageUrl}
                                spaceName={space.spaceName}
                                totalPosts={space.totalPosts}
                            />
                        </div>
                    ))}
                </CardContent>
            </Card>

            <p className='text-xl font-bold mt-[3vh] ml-[2vh]'>All Spaces</p>
                <div className="flex flex-wrap overflow-x-auto ml-[8.2vh]">
                    {spaceArr.slice(3, 5).map((space, index) => (
                        <div key={index} >
                            <AllSpaces
                                imageUrl={space.imageUrl}
                                spaceName={space.spaceName}
                                totalPosts={space.totalPosts}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap overflow-x-auto ml-[8.2vh]">
                    {spaceArr.slice(5, 7).map((space, index) => (
                        <div key={index}>
                            <AllSpaces
                                imageUrl={space.imageUrl}
                                spaceName={space.spaceName}
                                totalPosts={space.totalPosts}
                            />
                        </div>
                    ))}
                </div>
        </>
    )
}

export default Spaces