import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";  
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";  
import PeopleIcon from "@material-ui/icons/People";  
import ChatIcon from "@material-ui/icons/Chat";  
import StorefrontIcon from "@material-ui/icons/Storefront";  
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { useStateValue } from './StateProvider';


function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
          <SidebarRow /*src="https://instagram.fbho3-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.68.1080.1080a/s150x150/116434565_711283239436349_8315247218996485322_n.jpg?_nc_ht=instagram.fbho3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=8y5_UbYXuD4AX8Qzs_t&oh=ab6294fbafcd627aa210f4042e72b454&oe=5F8165D1" 
          title='Dushyant Reddy'*/
             src={user.photoURL}
             title={user.displayName}
          />  
          <SidebarRow 
          Icon={LocalHospitalIcon} title="COVID-19 Information Center"
          />  
          <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>  
          <SidebarRow Icon={PeopleIcon} title="Friends"/>  
          <SidebarRow Icon={ChatIcon} title="Messenger" />  
          <SidebarRow Icon={StorefrontIcon} title="Marketplace" />  
          <SidebarRow Icon={VideoLibraryIcon} title="Videos" />  
          <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />  
        </div>
    )
}

export default Sidebar;
