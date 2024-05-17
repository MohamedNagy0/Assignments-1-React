import Star from "../../Star/Star";
import img1 from "../../../assets/imgs/poert1.png";
import img2 from "../../../assets/imgs/port2.png";
import img3 from "../../../assets/imgs/port3.png";
import Model from "../../Model/Model";

export default function Portfolio() {
    return (
        <>
            <section className="min-h-screen flex items-start justify-center pt-5 text-white">
                <Model />
                <div className="container">
                    <header className="mb-5">
                        <h2 className="text-my-gray  mb-5 text-center text-3xl md:text-[40px] font-bold">
                            PORTFOLIO COMPONENT
                        </h2>
                        <Star bgColor={"bg-my-gray"} iColor={"text-my-gray"} />
                    </header>

                    <div className="flex-center flex-wrap gap-y-10 lg:gap-y-5 px-4 w-[90%] mx-auto">
                        <div
                            className="card overflow-hidden md:w-1/2 xl:w-1/3  md:px-3 "
                            data-img={img1}
                        >
                            <div className="relative rounded-xl group img-parent">
                                <img
                                    src={img1}
                                    alt="Home img and some trees"
                                    className="size-full"
                                />
                                <div className="layer cursor-pointer flex-center text-8xl  rounded-xl duration-500 group-hover:opacity-70 opacity-0 bg-my-green absolute size-full top-0 bottom-0">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div
                            className="card md:w-1/2 xl:w-1/3  md:px-3"
                            data-img={img2}
                        >
                            <div className="relative rounded-xl group img-parent">
                                <img
                                    src={img2}
                                    alt="Home img and some trees"
                                    className="size-full"
                                />
                                <div className="layer cursor-pointer flex-center text-8xl rounded-xl duration-500 group-hover:opacity-70 opacity-0 bg-my-green absolute size-full top-0 bottom-0">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div
                            className="card md:w-1/2 xl:w-1/3  md:px-3"
                            data-img={img3}
                        >
                            <div className="relative rounded-xl group img-parent">
                                <img
                                    src={img3}
                                    alt="Home img and some trees"
                                    className="size-full"
                                />
                                <div className="layer cursor-pointer flex-center text-8xl rounded-xl duration-500 group-hover:opacity-70 opacity-0 bg-my-green absolute size-full top-0 bottom-0">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div
                            className="card md:w-1/2 xl:w-1/3  md:px-3"
                            data-img={img1}
                        >
                            <div className="relative rounded-xl group img-parent">
                                <img
                                    src={img1}
                                    alt="Home img and some trees"
                                    className="size-full"
                                />
                                <div className="layer cursor-pointer flex-center text-8xl rounded-xl duration-500 group-hover:opacity-70 opacity-0 bg-my-green absolute size-full top-0 bottom-0">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div
                            className="card md:w-1/2 xl:w-1/3  md:px-3"
                            data-img={img2}
                        >
                            <div className="relative rounded-xl group img-parent">
                                <img
                                    src={img2}
                                    alt="Home img and some trees"
                                    className="size-full"
                                />
                                <div className="layer cursor-pointer flex-center text-8xl rounded-xl duration-500 group-hover:opacity-70 opacity-0 bg-my-green absolute size-full top-0 bottom-0">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div
                            className="card md:w-1/2 xl:w-1/3  md:px-3"
                            data-img={img3}
                        >
                            <div className="relative rounded-xl group img-parent">
                                <img
                                    src={img3}
                                    alt="Home img and some trees"
                                    className="size-full"
                                />
                                <div className="layer cursor-pointer flex-center text-8xl rounded-xl duration-500 group-hover:opacity-70 opacity-0 bg-my-green absolute size-full top-0 bottom-0">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            ;
        </>
    );
}
