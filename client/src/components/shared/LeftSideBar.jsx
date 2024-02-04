import React, { useEffect, useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom';
import Logo from '../../assets/ImageSlider/vibex.png';
import getUser_API from '@/apis/generals/getUser_API';
import {
  MdHome, MdOutlineSearch, MdChatBubbleOutline, MdWorkspaces, MdAddBox,
  MdAddToPhotos, MdNotificationsActive, MdNotifications, MdLogout
} from "react-icons/md";
import Cookies from 'js-cookie';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useAuth } from '@/contexts/authContext/AuthContext';
import Catalogue from '@/pages/generals/Catalogue';

function LeftSideBar(props) {
  const [catalogueState,setCatalogueState]=useState(false);
  const [userData, setUserData] = useState(null);

  const {logout} = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedUser = await getUser_API(Cookies.get("jwtToken"));
        setUserData(fetchedUser);
        console.log(userData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const showCataloguePage=()=>{
    console.log("This Function  In LeftSideBar IS Called");
    props.CatalogueHandler(true);
    console.log("This Function  In LeftSideBar IS Called");
    setCatalogueState(!catalogueState);
  }

  return (
    <div className="lg:flex flex-col items-center sticky top-0 w-24 h-screen bg-slate-200 hidden">
      <div>
        <NavLink to="/dashboard">
          <img src={Logo} className="h-14 w-17 mt-10 ml-1" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/dashboard"
          className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-[#64748b]" : "text-black"
        }>
          <MdHome className="text-4xl  mt-10" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/team">
          <MdOutlineSearch className="text-4xl text-black mt-3" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/team">
          <MdChatBubbleOutline className="text-3xl text-black mt-4" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/team">
          <MdWorkspaces className="text-3xl text-black mt-4" />
        </NavLink>
      </div>
      <div>
          <Catalogue/>
      </div>  
      <div>
        <NavLink to="/team">
          <MdNotifications className="text-4xl text-black mt-4" />
        </NavLink>
      </div>

      <div>
        <NavLink to="/team">
        <LazyLoadImage  
          src={userData?.profilepicture}
          className={`h-8 rounded-full mt-4`}
        />
        </NavLink>
      </div>

      <div>
          <button onClick={logout}><MdLogout className="text-3xl text-black mt-4" /></button>
      </div>
    </div>
  )
}

export default LeftSideBar