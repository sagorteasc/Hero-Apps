import NavbarLogo from "../../assets/logo.png"
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#001931] text-white">
            <footer className="w-11/12 mx-auto py-10">
                <div className="footer flex justify-between items-center pb-10">
                    <aside>
                        <h3 className="flex font-bold items-center gap-2">
                            <img className="w-8 h-8" src={NavbarLogo} />
                            HERO.IO
                        </h3>
                    </aside>
                    <nav>
                        <h6 className="font-medium text-xl">Social Links</h6>
                        <div className="grid grid-flow-col gap-4">
                            <a>
                                <div className="bg-white rounded-full">
                                    <FaXTwitter className="text-black w-5 h-5 p-0.5" />
                                </div>
                            </a>
                            <a>
                                <div className="bg-white rounded-full">
                                    <FaLinkedinIn className="text-black w-5 h-5 p-0.5" />
                                </div>
                            </a>
                            <a>
                                <div className="bg-white rounded-full">
                                    <FaFacebookF className="text-black w-5 h-5 p-0.5" />
                                </div>
                            </a>
                        </div>
                    </nav>
                </div>

                <hr className="text-gray-600 py-5" />

                <div>
                    <p className="text-[#627382] text-center"><small>Copyright © 2025 - All right reserved</small></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;