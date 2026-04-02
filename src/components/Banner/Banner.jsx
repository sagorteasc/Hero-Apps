import { Link } from "react-router-dom";
import BannerImg from "../../assets/hero.png"

const Banner = () => {
    return (
        <div className="bg-[#f5f5f5]">
            <div className="hero pt-15 w-11/12 mx-auto md:pt-20">
                <div className="hero-content pb-0 text-center">
                    <div className="max-w-3xl">
                        <h1
                            className="text-4xl font-black opacity-90 md:text-7xl">We Build <br /> <span className="bg-linear-to-tl from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
                        <p className="text-[#627382] py-6 text-xl">
                            At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>

                        <div className="flex justify-center items-center mb-10">
                            <button className="border border-[#D2D2D2] btn bg-transparent rounded font-semibold text-base mr-4 md:text-xl">
                                <Link className="flex items-center gap-2" to={"https://play.google.com/store/apps?hl=en_US&pli=1"}>
                                    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.03711 0.734506L22.0478 11.1302L28.9817 15.136C29.6323 15.5274 29.6376 16.4626 28.9918 16.8591L28.9613 16.8796L4.05227 31.2606L4.03182 31.2707C3.77775 31.4131 3.49817 31.4283 3.2542 31.3571C2.84758 31.2351 2.5271 30.8641 2.5271 30.3812V1.61896C2.5271 1.13607 2.84734 0.765063 3.2542 0.643078C3.50322 0.571619 3.7828 0.587018 4.03711 0.734506Z" fill="#47BCFF" />
                                        <path d="M4.03707 0.734321L22.0478 11.13L17.5235 16L3.25415 0.642652C3.50317 0.571434 3.78275 0.586832 4.03707 0.734321Z" fill="#0BDF74" />
                                        <path d="M22.0477 11.13L28.9816 15.1358C29.6322 15.5272 29.6375 16.4625 28.9917 16.859L28.9612 16.8794L22.0477 20.8647L17.5234 16L22.0477 11.13Z" fill="#FDBA21" />
                                        <path d="M17.5235 16L22.0478 20.865L4.05223 31.2606L4.03177 31.2707C3.7777 31.4132 3.49812 31.4283 3.25415 31.3571L17.5235 16Z" fill="#FB434C" />
                                    </svg>
                                    Google Play
                                </Link>
                            </button>

                            <button className="border border-[#D2D2D2] btn bg-transparent rounded font-semibold text-base md:text-xl">
                                <Link className="flex items-center gap-2" to={"https://www.apple.com/app-store/"}>
                                    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.5328 0H6.46319C2.89163 0 0 2.89162 0 6.46319V25.5368C0 29.1044 2.89163 31.996 6.46319 31.996H25.5368C29.1044 31.996 32 29.1044 32 25.5328V6.46319C31.996 2.89162 29.1044 0 25.5328 0Z" fill="url(#paint0_linear_1_717)" />
                                        <path d="M15.8619 7.35108L16.5099 6.2312C16.9098 5.53126 17.8017 5.29533 18.5016 5.69526C19.2016 6.0952 19.4375 6.98708 19.0376 7.68701L12.7943 18.4937H17.3097C18.7736 18.4937 19.5934 20.2135 18.9576 21.4053H5.71924C4.91137 21.4053 4.26343 20.7574 4.26343 19.9495C4.26343 19.1416 4.91137 18.4937 5.71924 18.4937H9.4308L14.1822 10.2587L12.6984 7.68301C12.2985 6.98308 12.5344 6.0992 13.2344 5.69126C13.9343 5.29133 14.8182 5.52726 15.2261 6.2272L15.8619 7.35108Z" fill="white" />
                                        <path d="M10.2466 22.9051L8.84682 25.3328C8.44688 26.0328 7.55501 26.2687 6.85507 25.8688C6.15513 25.4688 5.91919 24.5769 6.31913 23.877L7.35901 22.0773C8.53482 21.7133 9.49069 21.9933 10.2466 22.9051Z" fill="white" />
                                        <path d="M22.3011 18.5017H26.0886C26.8965 18.5017 27.5444 19.1496 27.5444 19.9575C27.5444 20.7654 26.8965 21.4133 26.0886 21.4133H23.9849L25.4047 23.877C25.8046 24.577 25.5687 25.4608 24.8688 25.8688C24.1688 26.2687 23.2849 26.0328 22.877 25.3328C20.4853 21.1853 18.6895 18.0818 17.4977 16.014C16.2778 13.9103 17.1498 11.7985 18.0096 11.0826C18.9656 12.7225 20.3934 15.1981 22.3011 18.5017Z" fill="white" />
                                        <defs>
                                            <linearGradient id="paint0_linear_1_717" x1="16" y1="0" x2="16" y2="31.996" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#00BFFC" />
                                                <stop offset="1" stop-color="#0073F6" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    App Store
                                </Link>
                            </button>
                        </div>

                        <div>
                            <img src={BannerImg} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;