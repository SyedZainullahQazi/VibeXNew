import Account from "@/components/profile/Accout"
import Activity from "@/components/profile/Activity"
import Catalogue from "@/components/profile/Catalogue"
import ViewCatalogue from "@/components/profile/ViewCatalogue"
import VibeLayout from "@/components/shared/VibeLayout"
import { Button } from "@/shadcn-components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn-components/ui/card"
import { Input } from "@/shadcn-components/ui/input"
import { Label } from "@/shadcn-components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shadcn-components/ui/tabs"

export function Profile() {
  return (
    <VibeLayout elementBody={()=>(
    <Tabs defaultValue="account" className="w-screen sm:w-[90vw] lg:w-[58vw] mt-4">
      <TabsList className="grid w-full grid-cols-3 ">
        <TabsTrigger value="catalogue">Catalogue</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
      </TabsList>
      <Catalogue/>
      <Activity/>
      <Account/>

    </Tabs>
    )}/>
  )
}

export default Profile;