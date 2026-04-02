import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div className="max-w-400 mx-auto">
            <NavBar></NavBar>
            <Home></Home>
        </div>
    );
};

export default Root;