import { useLoaderData } from "react-router-dom";
import App from "../App/App";

const Apps = () => {

    const appsData = useLoaderData();

    return (
        <div className="w-11/12 mx-auto">
            <div className="text-center my-10">
                <h3 className="font-bold text-5xl mb-2">Our All Applications</h3>
                <p className="text-[#627382] text-xl">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className="flex flex-wrap gap-3 justify-evenly mb-4 md:justify-between md:gap-0">
                <h3 className="font-semibold text-2xl">({appsData.length}) Apps Found</h3>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input className="text-[#627382]" type="search" placeholder="Search Apps" />
                </label>
            </div>

            <div className="grid gap-4 mb-10 md:grid-cols-2 lg:grid-cols-4">
                {
                    appsData.map(app => <App
                        key={app.id}
                        app={app}
                    ></App>)
                }
            </div>
        </div>
    );
};

export default Apps;