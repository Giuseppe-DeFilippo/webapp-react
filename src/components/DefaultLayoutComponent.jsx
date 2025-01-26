import { Outlet } from "react-router-dom";
import HeaderComponent from "./headerComponent";
import { useGlobalContext } from "../GlobalContext/GlobalContext"


function DefaultLayoutComponent() {

    return (
        <>
            <HeaderComponent />
            <main className="bg-secondary py-4" >
                <Outlet />
            </main>
        </>
    )
}
export default DefaultLayoutComponent;