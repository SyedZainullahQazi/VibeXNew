import { Button } from '@/shadcn-components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn-components/ui/card"
import { Input } from '@/shadcn-components/ui/input'
import { Label } from '@/shadcn-components/ui/label'
import { TabsContent } from '@/shadcn-components/ui/tabs'
import React, { useEffect, useState } from 'react'
import CatalogueCover from './CatalogueCover'
import getCatalogue_API from '@/apis/catalogue/getCatalogue_API'
import Cookies from 'js-cookie'
import ViewCatalogue from './ViewCatalogue'

function  Catalogue() {
  const [catalogues,setCatalogue]=useState(null);
  const [selectedCatalogue,setSelectedCatalogue]=useState(null);
  useEffect(()=>{
      const getCatalogue =async ()=>{
          const savedCatalogue=await getCatalogue_API(Cookies.get("jwtToken"));
          setCatalogue(savedCatalogue);
          console.log(savedCatalogue);
      }
      getCatalogue();
  },[]);
  return (
    <div>
    {selectedCatalogue?<ViewCatalogue/>:
    <TabsContent value="catalogue">
    <Card>
      <CardHeader>
        <CardTitle>Catalogue</CardTitle>
        <CardDescription>
          Save Your University Memories in Catalogues.
        </CardDescription>
      </CardHeader>
      <div className="grid w-full grid-cols-3">
      {catalogues? catalogues.map((catalogue,index)=>(
      <CatalogueCover Catalogue={catalogue} Index={index}/>)):<div></div>
      }
      </div>
    </Card>
  </TabsContent>
  }
  </div>
  )
}

export default Catalogue;