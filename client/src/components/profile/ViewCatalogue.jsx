import { Button } from '@/shadcn-components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/shadcn-components/ui/dialog'
import React, { useEffect, useRef, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { MdOutlineAddToPhotos } from 'react-icons/md'
import { DialogClose } from '@radix-ui/react-dialog';

function ViewCatalogue(props) {
    const [isDialogOpen, setDialogOpen] = useState(true);   
    useEffect(()=>{console.log(isDialogOpen) 
        if(isDialogOpen==false){
            console.log("I was here");
            props.closeCatalog(false);
    }},[isDialogOpen]);
    return (
        <div>

             
        <Dialog  open={isDialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent className="flex flex-col items-center max-w-[300px] sm:max-w-[425px] md:max-w-[500px] lg:max-w-[600px] h-[550px] md:h-[520px] lg:h-[540px]">
                <DialogHeader>
                    <div style={{ position: 'fixed', top: '0', left: '0', padding: '10px' }}>
                        <BiArrowBack className="cursor-pointer mt-2"  />
                    </div>
                    
                    <DialogTitle>Almost There....</DialogTitle>
                    <DialogDescription>
                        Select Cover,Description and Category
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center justify-around">
                    <div className="flex flex-col items-center justify-between">
                        <Button/>
                    </div>

                </div>


            </DialogContent>
        </Dialog>
        </div>
    )
}

export default ViewCatalogue