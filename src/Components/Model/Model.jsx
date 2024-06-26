export default function Model({ currentImg, status, setStatus }) {
    return (
        <>
            {status && (
                <div
                    onClick={function (e) {
                        if (e.target != e.target.firstChild.firstChild) {
                            setStatus(false);
                        }
                    }}
                    className={`h-screen hero w-screen flex bg-blue-600 bg-opacity-70 fixed top-0 bottom-0 right-0 left-0  justify-center items-center`}
                >
                    <div className="model">
                        <img src={currentImg} className="w-full" />
                    </div>
                </div>
            )}
        </>
    );
}
