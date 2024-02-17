// ReplyCommentForm.js

import React from 'react';
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from '@/shadcn-components/ui/form'; // Import necessary components
import {Input} from '@/shadcn-components/ui/input'
import {Button} from '@/shadcn-components/ui/button'
import {FaHeart} from 'react-icons/fa'
import { toast } from '@/shadcn-components/ui/use-toast';
import { Textarea } from "@/shadcn-components/ui/textarea"
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

 
const FormSchema = z.object({
  replyComment: z.string().min(2, {
    message: "replyComment must be at least 2 characters.",
  }),
})

const ReplyCommentForm = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      replyComment: "",
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
    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-1 w-[75vw] flex flex-col items-center
    lg:w-[60vw] lg:items-stretch lg:ml-5 lg:mt-0">
    
      <FormField
        control={form.control}
        name="replyComment"
        render={({ field }) => (
          <FormItem className="">
            
            <FormControl>
              <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none w-[70vw] md:text-xl
                  lg:w-[45vw] lg:text-sm"
                  {...field}
                />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" className="mt-3 w-[70vw] 
      md:text-lg md:h-[5vh]
      lg:w-[45vw] lg:h-[6vh] lg:text-sm">Submit</Button>
      
    </form>
  </Form>
  )
}

export default ReplyCommentForm;
