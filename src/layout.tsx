import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar.tsx";

export default function Layout() {
    return (
        <>
            <div id="detail">
                <Navbar/>
                <Outlet />
            </div>
        </>
    );
}