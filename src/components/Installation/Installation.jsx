import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getFromLocalStorage, removeFromLocalStorage } from "../../utility/addToDb";
import { FaCaretDown } from "react-icons/fa";
import InstalledApp from "../InstalledApp/InstalledApp";
import AppNotFoundImg from "../../assets/App-Error.png"

const Installation = () => {

    const [downloaded, setDownloaded] = useState([]);
    const appsData = useLoaderData();

    useEffect(() => {
        setDownloaded(getFromLocalStorage());
    }, []);

    const installedApps = appsData.filter(app => downloaded.includes(app.id));

    // uninstall the app
    const handleUninstall = (id) => {
        removeFromLocalStorage(id);

        const uninstallApp = downloaded.filter(appId => appId !== id);
        setDownloaded(uninstallApp);
    }

    return (
        <div className="bg-[#f5f5f5]">
            <div className="w-11/12 mx-auto pb-10">
                <div className="py-10 text-center">
                    <h3 className="font-bold text-5xl mb-2">Your Installed Apps</h3>
                    <p className="text-[#627382] text-xl">Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className="flex justify-between items-center mb-5">
                    <h3 className="font-semibold text-2xl">{installedApps.length} Apps Found</h3>

                    <div className="dropdown dropdown-bottom dropdown-center">
                        <div tabIndex={0} role="button" className="text-[#627382] btn">Sort By Size <FaCaretDown /></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                            <li><a>High to Low</a></li>
                            <li><a>Low to High</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    {
                        installedApps.length === 0 ?
                            <div className="flex flex-col justify-center items-center text-center col-span-full gap-5 my-10">
                                <img src={AppNotFoundImg} />
                                <h3 className="font-semibold text-4xl">OPPS!! No Application Has Been Installed</h3>
                            </div>
                            :
                            installedApps.map(installApp => <InstalledApp
                                key={installApp.id}
                                installApp={installApp}
                                handleUninstall={handleUninstall}
                            ></InstalledApp>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;