import { useNavigate } from "react-router-dom";
import ErrorImg from "../../assets/error-404.png"

const ErrorPage = () => {

    const navigate = useNavigate();

    return (
        <div className="bg-[f5f5f5]">
            <div className="flex flex-col justify-center items-center text-center col-span-full gap-5 my-10">
                <img src={ErrorImg} />
                <h3 className="font-semibold text-4xl">OPPS!! PAGE NOT FOUND</h3>
                <p className="text-[#627382] text-xl">The page you are looking for is not available.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-linear-to-tl from-[#632EE3] to-[#9F62F2] text-white btn rounded">
                    Go Back!
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;