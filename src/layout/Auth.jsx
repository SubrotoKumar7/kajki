import { Outlet } from "react-router";
import Container from "../components/Container";

const Auth = () => {
    return (
        <div>
            <Container>
                <div className="flex h-screen relative items-center justify-center flex-col md:flex-row gap-10 p-5">
                    <div className="flex-1 text-center mt-30 md:mt-0">
                        <img src="/analytics.svg" className="w-1/2 md:w-3/5 mx-auto" alt="analytics illustrations" />
                        <h1 className="text-3xl mt-7 mb-3 font-bold">Organize your work, simplify your life.</h1>
                        <p className="font-medium">Manage all your tasks in one place and say goodbye to missed deadlines.</p>
                    </div>
                    <div className="flex-1 w-full h-fit mb-20">
                        <Outlet></Outlet>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Auth;