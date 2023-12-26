import {Outlet} from "react-router";
import StatusBar from "../components/StatusBar.tsx";


const RootLayout = () => {
    return <>
        <StatusBar />
        <Outlet />
    </>
}

export default RootLayout;
