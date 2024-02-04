import React, { useEffect, useRef, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shadcn-components/ui/dialog"
import { Input } from "@/shadcn-components/ui/input"
import { Label } from "@/shadcn-components/ui/label"
import { Button } from '@/shadcn-components/ui/button'
import { MdAddToPhotos } from "react-icons/md";

import { Card, CardContent } from "@/shadcn-components/ui/card"
import { GoPencil } from 'react-icons/go';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shadcn-components/ui/carousel"

export function Catalogue() {
    const [phase, setPhase] = useState(true);
    const [api, setApi] = useState(null);
    const [lastIndex, setLastIndex] = useState(0);
    const [selectedImages, setSelectedImages] = useState([]);
    const phaseHandler = (state) => {
        setPhase(state);
    }
    useEffect(() => {
        if (api) {
            api.reInit();
            api.scrollTo(lastIndex, { speed: 10 });
        }
    }, [selectedImages, api, phase])

    const handleFileChange = (event) => {
        console.log("I was Called HandleFile Change");
        const files = event.target.files;
        const fileListArray = Array.from(files);
        console.log(fileListArray);
        const updatedImages = [...selectedImages, ...fileListArray];
        event.target.value = null;
        setLastIndex(lastIndex + 1);
        setSelectedImages(updatedImages);
    };
    const handleButtonClick = (indexToRemove) => {

        const updatedImages = selectedImages.filter((_, index) => index !== indexToRemove);
        if (indexToRemove === 0) {
            setLastIndex(0);
        }
        else if (indexToRemove > 0) {
            setLastIndex(indexToRemove - 1);
        }
        setSelectedImages(updatedImages);
    };
    const handleWritePost = () => {
        setPhase(false);
    }
    const handleBackToUpload = () => {
        setPhase(true);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <a><MdAddToPhotos className="text-3xl md:text-4xl text-black mt-3 md:mt-4" /></a>
            </DialogTrigger>
            {phase ?
                <DialogContent className="max-w-[300px] sm:max-w-[425px] md:max-w-[500px] lg:max-w-[600px] h-[450px] md:h-[520px] lg:h-[540px]
                	">
                    <DialogHeader>

                        <DialogTitle className="md:text-lg">New Event Catalogue</DialogTitle>
                        <DialogDescription className="md:text-base">
                            Share Your Memories With Friends
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-col items-center ">
                            <Label htmlFor="name" className="mb-2 md:text-base">
                                Upload Your Memories
                            </Label>
                            <Input
                                id="picture"
                                type="file"
                                multiple
                                className="w-40 md:w-3/6  mb-2"
                                onChange={handleFileChange}
                            />


                        </div>
                        <div className="flex flex-col items-center">
                            <Carousel className="w-44 md:w-3/6 md:ml-30" key={selectedImages.length} setApi={setApi}>
                                <CarouselContent>
                                    {selectedImages && selectedImages.length !== 0 ?
                                        selectedImages.map((file, index) => (
                                            <CarouselItem key={index}>
                                                <div className="p-1">
                                                    <Card>
                                                        <CardContent className="relative flex aspect-square items-center justify-center p-6">
                                                            <button
                                                                onClick={() => handleButtonClick(index)}  // Replace handleButtonClick with your actual function
                                                                className="absolute top-0 right-0 mt-1 ml-1 bg-black rounded-full text-white"
                                                            >
                                                                {/* Add your button icon or text here */}
                                                                <AiOutlineCloseCircle className="text-2xl" />
                                                            </button>

                                                            {/* Image */}
                                                            <img
                                                                src={URL.createObjectURL(file)}
                                                                alt={`Selected ${index + 1}`}
                                                                className="h-full w-full rounded object-cover"
                                                            />
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </CarouselItem>
                                        ))
                                        : Array.from({ length: 5 }).map((_, index) => (
                                            <CarouselItem key={index}>
                                                <div className="p-1">
                                                    <Card>
                                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                                            <span className="text-4xl font-semibold">{index + 1}</span>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </CarouselItem>
                                        ))}

                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>


                        {/* Carosel */}
                    </div>
                    <div className="flex flex-row justify-center">
                        <DialogFooter >
                            <Button type="submit" className="bg-zinc-950 text-white " onClick={handleWritePost}>
                                <GoPencil className=" mr-2 mt-1 text-sm" />Write Post</Button>
                        </DialogFooter>
                    </div>

                </DialogContent>
                :
                <DialogContent className="max-w-[300px] sm:max-w-[425px] md:max-w-[500px] lg:max-w-[600px] h-[450px] md:h-[520px] lg:h-[540px]">
                    <DialogHeader>
                        <div><BiArrowBack className="cursor-pointer" onClick={handleBackToUpload} /></div>
                        <DialogTitle>Dialog Title</DialogTitle>
                        <DialogDescription>
                            Dialog description goes here.
                        </DialogDescription>
                    </DialogHeader>

                    {/* Dialog content goes here */}
                    <div className="flex flex-col items-center justify-around">
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="w-full max-w-sm"
                        >
                            <CarouselContent>
                                {selectedImages && selectedImages.length !== 0 ?
                                    selectedImages.map((file, index) => (
                                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                            <div className="p-1">
                                                <Card>
                                                    <CardContent className="flex aspect-square items-center justify-center p-2">
                                                        <img
                                                            src={URL.createObjectURL(file)}
                                                            alt={`Selected ${index + 1}`}
                                                            className="h-full w-full rounded object-cover"
                                                        />
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))

                                    : Array.from({ length: 5 }).map((_, index) => (
                                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                            <div className="p-1">
                                                <Card>
                                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <div>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                                    {/* Input Field */}
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <Input {...field} placeholder="Enter your email" />
                                                <FormDescription>
                                                    You can manage email addresses in your{' '}
                                                    <a href="/examples/forms">email settings</a>.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Select Field */}
                                    <FormField
                                        control={form.control}
                                        name="fruit"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Fruit</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a fruit" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="apple">Apple</SelectItem>
                                                        <SelectItem value="banana">Banana</SelectItem>
                                                        <SelectItem value="orange">Orange</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Submit Button */}
                                    <Button type="submit">Submit</Button>
                                </form>
                            </Form>
                        </div>

                    </div>

                    <DialogFooter>
                        <Button type="submit">
                            Save changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            }
        </Dialog>
    )
}


export default Catalogue;