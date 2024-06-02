export default function Card({ objInfo, index }) {
    let { img } = objInfo;

    return (
        <>
            <div className="inner relative rounded-xl group img-parent">
                <img
                    src={img}
                    alt="Home img and some trees"
                    className="size-full"
                />
                <div className="layer cursor-pointer flex-center text-8xl  rounded-xl duration-500 group-hover:opacity-70 opacity-0 bg-my-green absolute size-full top-0 bottom-0">
                    <i className="fa-solid fa-plus"></i>
                </div>
            </div>
        </>
    );
}
