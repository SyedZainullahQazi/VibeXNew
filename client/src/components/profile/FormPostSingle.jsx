// FormPostSingle.js

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from '@/shadcn-components/ui/form'; // Import necessary components
import {Button} from '@/shadcn-components/ui/button'
import { toast } from '@/shadcn-components/ui/use-toast';
import { Textarea } from "@/shadcn-components/ui/textarea"
import { MdFavoriteBorder } from 'react-icons/md';

 
const FormSchema = z.object({
  comment: z.string().min(2, {
    message: "comment must be at least 2 characters.",
  }),
})

const FormPostSingle = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      comment: "",
    },
  })
  function onSubmit(data) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (

    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} 
    className="mt-4 w-full flex flex-col items-center  
     ">
    <div className="flex flex-row justify-start w-full lg:w-[60vw]">
      <MdFavoriteBorder className='text-4xl md:text-5xl ml-10  lg:text-3xl lg:m-0'/>
      <p className="
      text-base mt-[1vh] font-bold 
      md:text-xl md:mt-[1.4vh]
      lg:text-xs lg:mt-[2vh]">34, Liked By Syed Zainullah Qazi,
      </p>

      </div>
      <FormField
        control={form.control}
        name="comment"
        render={({ field }) => (
          <FormItem className="mt-2">
            <FormLabel>Comment</FormLabel>
            <FormControl>
              <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none w-[80vw] 
                  md:text-xl
                  lg:w-[60vw] lg:text-base"
                  {...field}
                />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" className="mt-3 w-[80vw] 
      md:h-[5vh] md:text-lg
      lg:w-[60vw] lg:h-[7vh]">Submit</Button>
      
    </form>
  </Form>
  );
};

export default FormPostSingle;
