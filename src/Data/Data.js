import {UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal
} from "@iconscout/react-unicons"
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'

export const SidebarData = [
 {
    icon: UilEstate,
    heading:"Dashboard",
 },
 {
    icon:UilClipboardAlt,
    heading: "Orders",
 },
 {
    icon: UilUsersAlt,
    heading: "Customers"
 },
 { 
    icon: UilPackage,
    heading: "Products"
 },
 {
    icon: UilChart,
    heading: "Analytics"
 },

];


export const CardData = [
   {
      title: "Sales",
      color: {
         backGround:"linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)",
         boxShadow:"0px 10px 20px 0px #e0c6f5"
      },
      barValue: 70,
      value : "25,970",
      png:UilUsdSquare,
      series:[
         {
            name:"Sales",
            data:[31,40,28,51,42,109,100],
         },
      ],
   },
   {
      title: "Revenue",
      color: {
         backGround:"linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)",
         boxShadow:"0px 10px 20px 0px #e0c6f5"
      },
      barValue: 80,
      value : "25,970",
      png:UilMoneyWithdrawal,
      series:[
         {
            name:"Sales",
            data:[31,40,28,51,42,109,100],
         },
      ],
   },
   {
      title: "Expenses",
      color: {
         backGround:"linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)",
         boxShadow:"0px 10px 20px 0px #e0c6f5"
      },
      barValue: 40,
      value : "25,970",
      png:UilUsdSquare,
      series:[
         {
            name:"Sales",
            data:[31,40,28,51,42,109,100],
         },
      ],
   },
   
]

export const UpdateData = [
{
   img: img1,
   name: "Nelson",
   noti: "has ordered Apple smart watch 2500mh battery",
   time: "25 seconds ago"
},
{
   img: img2,
   name: "James",
   noti:"has ordered samsung gadget",
   time:"30 minutes ago"
},
{
   img: img3,
   name: "James",
   noti:"has ordered samsung and apple gadget",
   time:"2 hours ago"
},
]