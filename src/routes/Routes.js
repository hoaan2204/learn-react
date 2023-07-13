import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Create from '../pages/Create';

export const PublicRoutes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/gallery",
    component: Gallery
  },
  {
    path: "/crud",
    component: Gallery
  },
  {
    path: "/crud/create",
    component: Create
  },
  {
    path: "/crud/update",
    component: Gallery
  },
];

export const PrivateRoutes = [];
