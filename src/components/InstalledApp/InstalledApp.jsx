import DownloadImg from "../../assets/icon-downloads.png"
import RatingImg from "../../assets/icon-ratings.png"
import PropTypes from "prop-types";

const InstalledApp = ({ installApp, handleUninstall }) => {

    const { id, image, title, downloads, ratingAvg, size } = installApp;

    return (
        <div>
            <div>
                <div className="card card-side bg-base-100 drop-shadow-2xl shadow-sm mb-5">
                    <figure>
                        <img
                            className="w-20 h-20 ml-5"
                            src={image} />
                    </figure>
                    <div className="card-body">
                        <div className="md:flex md:justify-between md:items-center">
                            <div>
                                <h2 className="font-medium text-xl mb-2">{title}</h2>

                                <div className="flex items-center gap-10">
                                    <div>
                                        <img className="w-5 h-5" src={DownloadImg} />
                                        <p className="text-[#00D390] font-medium">{downloads}</p>
                                    </div>
                                    <div>
                                        <img className="w-5 h-5" src={RatingImg} />
                                        <p className="text-[#FF8811] font-medium">{ratingAvg}</p>
                                    </div>
                                    <div>
                                        <p className="text-[#627382]">{size} MB</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-actions mt-4 justify-end md:mt-0">
                                <button
                                    onClick={() => handleUninstall(id)}
                                    className="bg-[#00D390] text-white btn">
                                    Uninstall
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

InstalledApp.propTypes = {
    installApp: PropTypes.object.isRequired,
    handleUninstall: PropTypes.func.isRequired
}

export default InstalledApp;