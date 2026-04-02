const Stats = () => {
    return (
        <div className="bg-linear-to-tl from-[#632EE3] to-[#9F62F2] text-white mb-15 py-15 md:mb-20 md:py-20">

            <div className="text-center mb-5 md:mb-10">
                <h3 className="font-bold text-3xl md:text-5xl">Trusted by Millions, Built for You</h3>
            </div>

            <div className="flex flex-col w-full mx-auto md:flex-row md:w-11/12">
                <div className="stat place-items-center space-y-2">
                    <div className="opacity-80">Total Downloads</div>
                    <div className="font-extrabold text-6xl">29.6M</div>
                    <div className="opacity-80">21% more than last month</div>
                </div>

                <div className="stat place-items-center space-y-2">
                    <div className="opacity-80">Total Reviews</div>
                    <div className="font-extrabold text-6xl">906K</div>
                    <div className="opacity-80">46% more than last month</div>
                </div>

                <div className="stat place-items-center space-y-2">
                    <div className="opacity-80">Active Apps</div>
                    <div className="font-extrabold text-6xl">132+</div>
                    <div className="opacity-80">31 more will Launch</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;