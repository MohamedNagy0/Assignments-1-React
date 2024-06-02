import errorImg from "../../assets/imgs/404.jpg";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-center flex-col ">
            <img
                src={errorImg}
                alt="Not Found Page Picture"
                className="max-w-[450px]"
            />
        </div>
    );
}
