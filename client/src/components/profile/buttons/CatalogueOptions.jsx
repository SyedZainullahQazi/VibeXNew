import React from 'react'
import { Button } from "@/shadcn-components/ui/button"
import { RiMore2Fill } from 'react-icons/ri';
import { FaEdit, FaTrash } from 'react-icons/fa'; // for FontAwesome icons
import { MdEdit, MdDelete } from 'react-icons/md'; 

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/shadcn-components/ui/dialog"
function CatalogueOptions() {
  return (
    <Dialog>
  <DialogTrigger><RiMore2Fill className='' /></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogDescription className="flex flex-col items-center">

        <Button className="w-[25vw] m-2 rounded-full text-sm mt-[1px] flex justify-right">
            <FaEdit className="text-lg mr-3"/>
            Edit
        </Button>
        <Button className="w-[25vw] rounded-full bg-red-600 flex justify-right ">
            <FaTrash className="text-base mr-3 ml-3"/>
            <p className="">Delete</p>
        </Button>   
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default CatalogueOptions