import { useLoaderData } from "react-router-dom";
import App from "../App/App";
import { useState } from "react";
import AppNotFoundImg from "../../assets/App-Error.png"

const Apps = () => {

    const [filteredApps, setFilteredApps] = useState([])
    const [isClicked, setIsClicked] = useState(false);

    const appsData = useLoaderData();

    const handleSearch = () => {
        setIsClicked(true);

        const searchItem = document.getElementById("searchField");
        const searchItemValue = searchItem.value.trim().toLowerCase();
        searchItem.value = '';

        const filterSearch = appsData.filter(app => app.title.toLowerCase().includes(searchItemValue));
        setFilteredApps(filterSearch);
    }

    return (
        <div className="w-11/12 mx-auto">
            <div className="text-center my-10">
                <h3 className="font-bold text-5xl mb-2">Our All Applications</h3>
                <p className="text-[#627382] text-xl">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className="flex flex-wrap gap-3 justify-evenly mb-4 md:justify-between md:gap-0">
                <h3 className="font-semibold text-2xl">({appsData.length}) Apps Found</h3>
                <div className="join">
                    <div>
                        <label className="input validator join-item">
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
                            <input id="searchField" className="text-[#627382]" type="search" placeholder="Search Apps" />
                        </label>
                    </div>
                    <button
                        onClick={handleSearch}
                        className="btn bg-linear-to-tl from-[#632EE3] to-[#9F62F2] text-white join-item">
                        Search
                    </button>
                </div>

            </div>

            <div className="grid gap-4 mb-10 md:grid-cols-2 lg:grid-cols-4">
                {
                    isClicked ?
                        filteredApps.length === 0 ?
                            <div className="flex flex-col justify-center items-center col-span-full gap-5 my-10">
                                <h3 className="font-bold text-4xl">App Not Founded</h3>
                                <img src={AppNotFoundImg} />
                            </div>

                            : filteredApps.map(filter => <App
                                key={filter.id}
                                app={filter}
                            ></App>)
                        :
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