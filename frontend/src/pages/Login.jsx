import OptionCard from "../components/login/OptionCard";
import { RiAdminLine } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";    

const Login = () => {
    return (
        <div className="p-5">
            <BackButton />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl m-16 font-semibold">
                    Welcome to Doc. Chain!
                </h1>
                <div className="flex gap-5 justify-center items-center">
                    <Link to={"/login/student"}>
                        <OptionCard role="student" Icon={PiStudentBold} />
                    </Link>
                    <Link to={"/login/admin"}>
                        <OptionCard role="admin" Icon={RiAdminLine} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;