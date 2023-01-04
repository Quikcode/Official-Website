import {Outlet} from "react-router-dom";
import Navbar from "@/components/organisms/navbar";

function Default() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Default