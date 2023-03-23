import { Outlet } from "solid-start";
import Navbar from "~/components/Navbar";

export default function Index() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
