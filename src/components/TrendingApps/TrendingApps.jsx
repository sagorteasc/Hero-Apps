import { Suspense } from "react";
import AllApps from "../AllApps/AllApps";
import { Link } from "react-router-dom";

const TrendingApps = () => {

    const appsPromise = fetch("/apps.json").then(res => res.json())

    return (
        <div>
            <div className="text-center mb-10">
                <h3 className="text-5xl mb-2">Trending Apps</h3>
                <p className="text-[#627382] text-xl">Explore All Trending Apps on the Market developed by us</p>
            </div>

            <Suspense fallback={
                <div className="flex items-center justify-center h-40">
                    <span className="loading loading-bars loading-md"></span>
                </div>
            }>
                <AllApps appsPromise={appsPromise}></AllApps>
            </Suspense>

            <div className="flex justify-center items-center mb-10">
                <button>
                    <Link
                        className="btn bg-linear-to-tl from-[#632EE3] to-[#9F62F2] text-white rounded"
                        to={"/apps"}
                    >
                        Show All
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default TrendingApps;