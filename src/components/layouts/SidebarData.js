import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />
  },
  {
    title: "Gallery",
    path: "/gallery",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />
  },
  {
    title: "CRUD",
    path: "",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Create",
        path: "/crud/create",
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Update",
        path: "/crud/update",
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Delete",
        path: "/crud/delete",
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  // {
  //   title: "About Us",
  //   path: "/about-us",
  //   icon: <AiIcons.AiFillHome />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: "Our Aim",
  //       path: "/about-us/aim",
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: "Our Vision",
  //       path: "/about-us/vision",
  //       icon: <IoIcons.IoIosPaper />
  //     }
  //   ]
  // },
  // {
  //   title: "Services",
  //   path: "/services",
  //   icon: <IoIcons.IoIosPaper />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: "Service 1",
  //       path: "/services/services1",
  //       icon: <IoIcons.IoIosPaper />,
  //       cName: "sub-nav"
  //     },
  //     {
  //       title: "Service 2",
  //       path: "/services/services2",
  //       icon: <IoIcons.IoIosPaper />,
  //       cName: "sub-nav"
  //     },
  //     {
  //       title: "Service 3",
  //       path: "/services/services3",
  //       icon: <IoIcons.IoIosPaper />
  //     }
  //   ]
  // },
  // {
  //   title: "Contact",
  //   path: "/contact",
  //   icon: <FaIcons.FaPhone />
  // },
  // {
  //   title: "Events",
  //   path: "/events",
  //   icon: <FaIcons.FaEnvelopeOpenText />,

  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: "Event 1",
  //       path: "/events/events1",
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: "Event 2",
  //       path: "/events/events2",
  //       icon: <IoIcons.IoIosPaper />
  //     }
  //   ]
  // },
  // {
  //   title: "Support",
  //   path: "/support",
  //   icon: <IoIcons.IoMdHelpCircle />
  // }
];
