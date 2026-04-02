import { BsDownload } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";

const App = ({ app }) => {

    const { image, title, downloads, ratingAvg } = app;

    return (
        <div className="w-11/12 mx-auto">
            <div className="card bg-base-100 w-full drop-shadow-2xl shadow-sm">
                <figure className="px-5 pt-5">
                    <img
                        src={image}
                        className="w-40 h-40 object-contain rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="font-medium text-xl">{title}</h2>
                    <div className="flex flex-wrap justify-between items-center gap-2">
                        <button className="btn bg-[#F1F5E8] text-[#00D390] border-none shadow-none text-sm"><BsDownload /> {downloads}</button>

                        <button className="btn bg-[#FFF0E1] text-[#FF8811] border-none shadow-none text-sm"><IoIosStar /> {ratingAvg}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;