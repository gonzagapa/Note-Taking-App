import { Outlet } from "react-router";
import { Navbar } from "../shared";


export function HomeLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
