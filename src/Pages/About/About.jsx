import Star from "../../Components/Star/Star";

export default function About() {
    return (
        <>
            <section className="min-h-[91vh] flex-center flex-col bg-my-green text-white">
                <div className="container">
                    <h2 className="text-center text-3xl font-bold mb-4">
                        ABOUT COMPONENT
                    </h2>
                    <Star bgColor={"bg-white"} />
                    <div className="p-16 gap-5  flex-center flex-col sm:flex-row">
                        <p className=" max-w-[550px]">
                            Freelancer is a free bootstrap theme created by
                            Route. The download includes the complete source
                            files including HTML, CSS, and JavaScript as well as
                            optional SASS stylesheets for easy customization.
                        </p>
                        <p className=" max-w-[550px]">
                            Freelancer is a free bootstrap theme created by
                            Route. The download includes the complete source
                            files including HTML, CSS, and JavaScript as well as
                            optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
