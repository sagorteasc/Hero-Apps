import { use } from "react";
import App from "../App/App";
import { useLocation } from "react-router-dom";

const AllApps = ({ appsPromise }) => {

    const appsData = use(appsPromise);
    const location = useLocation()
    const homeData = appsData.slice(0, 8);

    return (
        <div className="w-11/12 mx-auto grid gap-4 mb-10 md:grid-cols-2 lg:grid-cols-4">
            {
                location.pathname === "/" ?
                    homeData.map(app => <App
                        key={app.id}
                        app={app}
                    ></App>)

                    : appsData.map(app => <App
                        key={app.id}
                        app={app}
                    ></App>)
            }
        </div>
    );
};

export default AllApps;