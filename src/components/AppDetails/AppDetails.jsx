import { useLoaderData, useParams } from "react-router-dom";
import DownloadImg from "../../assets/icon-downloads.png"
import RatingImg from "../../assets/icon-ratings.png"
import ReviewImg from "../../assets/icon-review.png"
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { useState } from "react";
import { storeInLocalStorage } from "../../utility/addToDb";

const AppDetails = () => {

    const [install, setInstall] = useState({
        status: "installing"
    });
    const { appId } = useParams();
    const appIdNumber = parseInt(appId);
    const appsData = useLoaderData()
    const currentApp = appsData.find(app => app.id === appIdNumber);
    const { id, image, title, companyName, downloads, ratingAvg, reviews, size, ratings, description } = currentApp;

    const handleInstall = (id) => {
        storeInLocalStorage(id)
        setInstall({
            status: "installed"
        })
    }

    return (
        <div className="bg-[#f5f5f5]">
            <div className="w-11/12 mx-auto">
                <div className="card border-[#00193120] border-b flex flex-col py-10 md:flex-row">
                    <figure>
                        <img
                            className="w-44 h-44"
                            src={image} />
                    </figure>
                    <div className="card-body">
                        <div>
                            <h2 className="font-bold text-[32px]">{title}</h2>
                            <p
                                className="text-[#627382] border-b border-[#00193120] pb-5 text-xl">
                                Developed by
                                <span
                                    className="bg-linear-to-tl from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold">
                                    {companyName}
                                </span>
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-12 justify-evenly my-5 md:justify-normal">

                            <div className="grid place-items-center">
                                <img className="mb-2" src={DownloadImg} />
                                <div>Downloads</div>
                                <div className="font-extrabold text-[40px]">{downloads}</div>
                            </div>

                            <div className="grid place-items-center">
                                <img className="mb-2" src={RatingImg} />
                                <div>Average Ratings</div>
                                <div className="font-extrabold text-[40px]">{ratingAvg}</div>
                            </div>

                            <div className="grid place-items-center">
                                <img className="mb-2" src={ReviewImg} />
                                <div>Average Ratings</div>
                                <div className="font-extrabold text-[40px]">{reviews}</div>
                            </div>

                        </div>

                        <div className="flex justify-center md:justify-normal">
                            <button
                                onClick={() => handleInstall(id)}
                                className={
                                    install.status === "installed" ?
                                        "bg-[#00D390] text-white btn btn-disabled font-semibold text-lg rounded"
                                        : "bg-[#00D390] text-white btn font-semibold text-lg rounded"
                                }>
                                {
                                    install.status === "installed" ?
                                        "Installed"
                                        : `Install Now (${size} MB)`
                                }

                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-[#00193120] border-b py-10">
                    <h3 className="font-semibold text-2xl">Ratings</h3>
                    <ComposedChart
                        layout="vertical"
                        style={{ width: '100%', maxWidth: '1600px', maxHeight: '35vh', aspectRatio: 1 / 1.618 }}
                        responsive
                        data={[...ratings].reverse()}
                        margin={{
                            top: 20,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="count" type="number" />
                        <YAxis dataKey="name" type="category" width="auto" />
                        <Legend />
                        <Bar dataKey="count" barSize={20} fill="#FF8811" />
                    </ComposedChart>
                </div>

                <div className="py-10">
                    <h3 className="font-semibold text-2xl mb-2">Description</h3>
                    <p className="text-[#627382] text-xl">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;