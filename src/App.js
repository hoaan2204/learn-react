import { Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./routes/Routes";

import MainLayout from "./components/layouts/MainLayout";

export default function App() {
  return (
    <>
      <Routes>
        {PublicRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <MainLayout>
                  <Page />
                </MainLayout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}
