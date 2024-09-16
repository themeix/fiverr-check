import home_1_screenshrot from "../../../public/images/home-showcase/home-showcase-1.jpg"
import home_2_screenshrot from "../../../public/images/home-showcase/home-showcase-2.jpg"
import home_3_screenshrot from "../../../public/images/home-showcase/home-showcase-3.jpg"

import { IoHome, IoDocumentText, IoSettings } from "react-icons/io5"; // Import icons from react-icons



export const menuList = [
    {
        id: 1,
        path: "#",
        lable: "Home",
        megaMenu:false,    
        
        dropDown: true
    },
    {
        id: 2,
        path: "#",
        lable: "Pages",
        dropDown: [
            {
                id: 1,
                path: "/about-us",
                lable: "About Us",
                tag: ""
            },
            {
                id: 2,
                path: "/contact",
                lable: "Contact Us",
                tag: "",
            },
            {
                id: 3,
                path: "#",
                lable: "Our Team",
                tag: "",
                subDropdonwn: [
                    {
                        id: 1,
                        path: "/team",
                        lable: "Our Team",
                        tag: "",
                    },
                    {
                        id: 2,
                        path: "/team-carousel",
                        lable: "Team Carousel",
                        tag: "",
                    },
                    {
                        id: 3,
                        path: "/team-details",
                        lable: "Team Details",
                        tag: "",
                    },

                ]
            },
            {
                id: 4,
                path: "#",
                lable: "Career",
                tag: "2 Open Job",
                subDropdonwn: [
                    {
                        id: 1,
                        path: "/career",
                        lable: "Career",
                        tag: "",
                    },
                    {
                        id: 2,
                        path: "/career-details",
                        lable: "Career Details",
                        tag: "",
                    },

                ]
            } 

        ],
        megaMenu: false
    },
    {
        id: 3,
        path: "#",
        lable: "Services",
        dropDown: false,
        
        megaMenu: [
            {
                id: 1,
                title: "Web Development",
                icon: "IoIosAddCircle", // Use the icon name as a string
                links: [
                  {
                    id: 1,
                    path: "/home-2",
                    label: "Home v2",
                  },
                  {
                    id: 2,
                    path: "/home-3",
                    label: "Home v3",
                  },
                 
                ]
              },
              {
                id: 2,
                title: "Category 2",
                icon: "IoIosAirplane",
                links: [
                  {
                    id: 1,
                    path: "/home-5",
                    label: "Home v5",
                  },
                  {
                    id: 2,
                    path: "/home-6",
                    label: "Home v6",
                  },
                
                ]
              },
              {
                id: 3,
                title: "Category 3",
                icon: "IoIosAlarm",
                links: [
                  {
                    id: 1,
                    path: "/home-8",
                    label: "Home v8",
                  },
                  {
                    id: 2,
                    path: "/home-9",
                    label: "Home v9",
                  },
                 
                ]
              },
              {
                id: 4,
                title: "Category 3",
                icon: "IoIosAlarm",
                links: [
                  {
                    id: 1,
                    path: "/home-8",
                    label: "Home v8",
                  },
                  {
                    id: 2,
                    path: "/home-9",
                    label: "Home v9",
                  },
                 
                ]
              }
        ]
    },
    {
        id: 4,
        path: "/contact",
        lable: "Contact",
        dropDown: false,
        megaMenu: false
    },
    {
        id: 5,
        path: "/blog",
        tag: "2 Open Job",
        lable: "Blog",   
        dropDown: false,
        megaMenu: false
    },
]