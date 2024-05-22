import Star from "../../Star/Star";
import img1 from "../../../assets/imgs/poert1.png";
import img2 from "../../../assets/imgs/port2.png";
import img3 from "../../../assets/imgs/port3.png";
import Model from "../../Model/Model";
import { useState } from "react";
import Card from "./Card";

export default function Portfolio() {
    let [images, setImages] = useState([
        { img: img1, id: 1 },
        { img: img2, id: 2 },
        { img: img3, id: 3 },
        { img: img1, id: 4 },
        { img: img2, id: 5 },
        { img: img3, id: 6 },
    ]);
    let [currentImg, setCurrentImg] = useState(img1);
    let [status, setStatus] = useState(false);

    return (
        <>
            <section className="min-h-screen flex items-start justify-center pt-5 text-white">
                <div className="container">
                    <header className="mb-5">
                        <h2 className="text-my-gray  mb-5 text-center text-3xl md:text-[40px] font-bold">
                            PORTFOLIO COMPONENT
                        </h2>
                        <Star bgColor={"bg-my-gray"} iColor={"text-my-gray"} />
                    </header>
                    <div className="flex-center flex-wrap gap-y-10 lg:gap-y-5 px-4 w-[90%] mx-auto mb-6">
                        {images.map((obj, index) => {
                            return (
                                <>
                                    <div
                                        className="card overflow-hidden w-full md:w-1/2 xl:w-1/3  md:px-3 "
                                        onClick={() => {
                                            setCurrentImg(obj.img);
                                            setStatus(true);
                                        }}
                                        key={obj.id}
                                    >
                                        <Card objInfo={obj} index={index} />
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
            <Model
                currentImg={currentImg}
                status={status}
                setStatus={setStatus}
            />
        </>
    );
}
