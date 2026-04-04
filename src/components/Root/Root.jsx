import { ScrollRestoration } from "react-router-dom";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <ToastContainer />
            <div className="max-w-400 mx-auto">
                <NavBar></NavBar>
                <ScrollRestoration />
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;