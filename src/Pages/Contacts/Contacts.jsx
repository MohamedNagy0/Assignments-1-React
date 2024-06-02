import { useState } from "react";
import Star from "../../Components/Star/Star";
//
export default function Contacts() {
    const [show, setShow] = useState(false);
    const [inputsArr, setInputsArr] = useState([
        {
            name: "userName",
            id: "userName",
            placeholder: "userName",
            type: "text",
            className: " border-b-2 pb-5 w-full ",
        },
        {
            name: "usrAge",
            id: "usrAge",
            placeholder: "userAge",
            type: "text",
            className: " border-b-2 pb-5 w-full ",
        },
        {
            name: "userEmail",
            id: "userEmail",
            placeholder: "userEmail",
            type: "email",
            className: " border-b-2 pb-5 w-full ",
        },
        {
            name: "userPassword",
            id: "userPassword",
            placeholder: "userPassword",
            type: "text",
            className: " border-b-2 pb-5 w-full ",
        },
    ]);
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
                        {inputsArr.map((obj) => {
                            return (
                                <>
                                    <div key={obj.id} className="w-full">
                                        <label
                                            htmlFor={obj.id}
                                            className={`text-my-green duration-500 relative -z-10 ${
                                                show ? "-top-6" : "top-6"
                                            }`}
                                        >
                                            {obj.id}
                                        </label>

                                        <input
                                            type={obj.type}
                                            name={obj.name}
                                            placeholder={obj.placeholder}
                                            id={obj.id}
                                            className={`${obj.className}`}
                                            onInput={(e) => {
                                                if (
                                                    e.target.value.length != 0
                                                ) {
                                                    setShow(true);
                                                } else {
                                                    setShow(false);
                                                }
                                            }}
                                        />
                                    </div>
                                </>
                            );
                        })}

                        <button className="bg-my-green py-2 px-4 text-white rounded-lg self-start mt-[-20px]">
                            send Message
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
