import { Outlet } from "react-router";
import Header from "./Header";

export default function Root() {
  return (
    <dlv>
      <Header />
      <Outlet />
      {/* Outlet => if have children inside router, render the path inside children*/}
    </dlv>
  );
}
