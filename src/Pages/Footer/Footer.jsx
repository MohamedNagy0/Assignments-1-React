export default function Footer() {
    return (
        <>
            <div className=" bg-my-gray text-white ">
                <div className="container m-auto text-center  p-12 flex justify-center items-center flex-col sm:flex-row sm:justify-between lg: sm:gap-7">
                    <div className="my-10 md:w-[33.33%]">
                        <h2 className="text-2xl font-medium mb-2">LOCATION</h2>
                        <p>2215 John Daniel Drive</p>
                        <p className="mt-2">Clark, MO 65243</p>
                    </div>
                    <div className="my-10 md:w-[33.33%]">
                        <h2 className="text-2xl font-medium mb-2">
                            AROUND THE WEB
                        </h2>
                        <div className="social flex-center gap-3">
                            <a
                                target="_blank"
                                href="https://www.facebook.com/mohamednagy.mis01/"
                            >
                                <i className=" p-[10px] border rounded-full fa-brands fa-facebook"></i>
                            </a>
                            <a
                                target="_blank"
                                href="https://twitter.com/MohamednagyMis"
                            >
                                <i className=" p-[10px] border rounded-full fa-brands fa-x-twitter"></i>
                            </a>
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/mohamed-nagy-soliman-68918a1a4/"
                            >
                                <i className=" p-[10px] border rounded-full fa-brands fa-linkedin-in"></i>
                            </a>
                            <a target="_blank" href="https://globle-game.com/">
                                <i className=" p-[10px] border rounded-full fa-solid fa-globe"></i>
                            </a>
                        </div>
                    </div>
                    <div className="my-10 md:w-[33.33%]">
                        <h2 className="text-2xl font-medium mb-2">
                            ABOUT FREELANCER
                        </h2>
                        <p className="min-w-[200px]">
                            Freelance is a free to use, licensed Bootstrap theme
                            created by Route
                        </p>
                    </div>
                </div>
            </div>
            <p className="bg-my-dark-gray text-white text-center p-6">
                Copyright © Your Website 2021
            </p>
        </>
    );
}
