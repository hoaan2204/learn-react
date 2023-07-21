import HomePage from "../pages/HomePage";
import GalleryPage from "../pages/GalleryPage";
import ReadPage from '../pages/crud/ReadPage';
import CreatePage from '../pages/crud/CreatePage';
import UpdatePage from '../pages/crud/UpdatePage';

export const PublicRoutes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/gallery",
    component: GalleryPage,
  },
  {
    path: "/crud/",
    component: ReadPage
  },
  {
    path: "/crud/create",
    component: CreatePage
  },
  {
    path: "/crud/update",
    component: UpdatePage
  },
];

export const PrivateRoutes = [];
