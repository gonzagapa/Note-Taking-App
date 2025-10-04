import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage";
import CreateNotePage from "../pages/CreateNotePage";
import { HomeLayout } from "../layout/HomeLayout";
import { FetchingNote } from "../home/components/FetchingNote";

const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
      { index: true, Component: HomePage },
    ]
  },
  {
    path:"create",
    element:<CreateNotePage/>
  },
  {
    path:"note/:id",
    element:<FetchingNote/>
  }
]);

export function AppRoute() {
  return ( <RouterProvider router={router} />)
}
