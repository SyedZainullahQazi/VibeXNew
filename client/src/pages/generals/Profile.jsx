import Account from "@/components/profile/Accout"
import Activity from "@/components/profile/Activity"
import Catalogue from "@/components/profile/Catalogue"
import VibeLayout from "@/components/shared/VibeLayout"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/shadcn-components/ui/tabs"

export function Profile() {
  function myTemp(){
    return(
      <Tabs defaultValue="catalogue" className="w-screen sm:w-[90vw] lg:w-[58vw] mt-4">
      <TabsList className="grid w-full grid-cols-3 ">
        <TabsTrigger value="catalogue">Catalogue</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
      </TabsList>
      <Catalogue/>
      <Activity/>
      <Account/>

    </Tabs>
    )
  }
  return (
    <VibeLayout elementBody={myTemp}/>
  )
}

export default Profile;