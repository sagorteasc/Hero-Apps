import { ScrollRestoration } from "react-router-dom";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div className="max-w-400 mx-auto">
            <NavBar></NavBar>
            <ScrollRestoration />
            <Outlet></Outlet>
        </div>
    );
};

export default Root;