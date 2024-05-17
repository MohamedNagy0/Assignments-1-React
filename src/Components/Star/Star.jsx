export default function Star({ bgColor, iColor }) {
    return (
        <>
            <div className=" flex-center gap-4">
                <span className={`${bgColor} h-1 w-20`}></span>
                <i className={`${iColor} relative fa-solid fa-star`}></i>
                <span className={`${bgColor} h-1 w-20`}></span>
            </div>
        </>
    );
}
