import boyImg from "../../../assets/imgs/avataaars.svg";
import Star from "../../Star/Star";

export default function Home() {
    return (
        <>
            <section className="min-h-[91vh]  flex-center bg-my-green text-white">
                <div className="container">
                    <article className="flex-center flex-col gap-6">
                        <img
                            className="w-[250px]"
                            src={boyImg}
                            alt="startFramework logo img"
                        />
                        <h2 className="text-center text-3xl font-bold">
                            START FRAMEWORK
                        </h2>
                        <Star bgColor="bg-white" />
                        <p>Graphic Artist - Web Designer - Illustrator</p>
                    </article>
                </div>
            </section>
        </>
    );
}
