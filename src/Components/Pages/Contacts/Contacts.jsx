import Star from "../../Star/Star";

export default function Contacts() {
    function showAndHideLabel() {
        const allInputs = Array.from(document.querySelectorAll("input"));

        for (let i = 0; i < allInputs.length; i++) {
            allInputs[i].addEventListener("input", () => {
                if (allInputs[i].value.length > 0) {
                    allInputs[i].previousElementSibling.classList.replace(
                        "top-6",
                        "-top-5"
                    );
                } else {
                    allInputs[i].previousElementSibling.classList.replace(
                        "-top-5",
                        "top-6"
                    );
                }
            });
        }
    }
    // Show and Hide Label
    showAndHideLabel();
    return (
        <>
            <section className="min-h-screen flex items-start flex-col justify-start pt-5 text-white">
                <div className="container mx-auto w-[80%]">
                    <header className="mb-5">
                        <h2 className="text-my-gray  mb-5 text-center text-3xl md:text-[40px] font-bold">
                            CONTACT SECTION
                        </h2>
                        <Star bgColor={"bg-my-gray"} iColor={"text-my-gray"} />
                    </header>
                    <form className="md:px-40 my-20 pt-3 text-black flex-center flex-col gap-12">
                        <div className="w-full">
                            <label
                                htmlFor="userName"
                                className="text-my-green duration-500 relative top-6 -z-10"
                            >
                                userName :
                            </label>
                            <input
                                type="text"
                                placeholder="userName"
                                id="userName"
                                className=" border-b-2 pb-5 w-full"
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="userAge"
                                className="text-my-green duration-500 relative top-6 -z-10"
                            >
                                userAge :
                            </label>
                            <input
                                type="text"
                                placeholder="userAge"
                                id="userAge"
                                className="w-full border-b-2 pb-5"
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="userEmail"
                                className="text-my-green duration-500 relative top-6 -z-10"
                            >
                                userEmail :
                            </label>
                            <input
                                type="email"
                                placeholder="userEmail"
                                id="userEmail"
                                className="w-full border-b-2 pb-5"
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="userPassword"
                                className="text-my-green duration-500 relative top-6 -z-10"
                            >
                                userPassword :
                            </label>
                            <input
                                type="password"
                                placeholder="userPassword"
                                id="userPassword"
                                className="w-full border-b-2 pb-5"
                            />
                        </div>

                        <button className="bg-my-green py-2 px-4 text-white rounded-lg self-start mt-[-20px]">
                            send Message
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
