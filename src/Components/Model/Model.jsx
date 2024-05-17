import img1 from "../../assets/imgs/poert1.png";

import { useState } from "react";

export default function Model() {
    let [currentImg, setCurrentImg] = useState(img1);

    const myModel = document.querySelector(".my-model");
    const modelLayer = document.querySelector(".modelLayer");
    const cards = Array.from(document.querySelectorAll(".card"));

    // Show Model
    function showModel() {
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener("click", function () {
                myModel.classList.remove("hidden");
                let img = cards[i].getAttribute("data-img");
                setCurrentImg(img);
            });
        }
    }

    // Hide Model
    function hiddenModel() {
        myModel.addEventListener("click", function (e) {
            if (e.target == modelLayer) {
                myModel.classList.add("hidden");
            }
        });
    }

    showModel();
    return (
        <>
            <div
                onClick={hiddenModel}
                className="my-model fixed top-0 bottom-0 right-0 left-0  bg-blue-500 bg-opacity-45 z-50 hidden"
            >
                <div className="modelLayer cursor-pointer flex-center h-full">
                    <img
                        src={currentImg}
                        className="max-w-xl"
                        alt="Home img and some trees"
                    />
                </div>
            </div>
        </>
    );
}
