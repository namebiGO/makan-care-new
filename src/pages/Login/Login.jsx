import { SignIn } from "@clerk/clerk-react";
import { APPROUTES } from "../../constants/routes/appRoutes";

const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <SignIn
                routing="path"
                path="/login"
                signUpUrl="/signup"
                afterSignInUrl={APPROUTES.HOME}
                appearance={{
                    elements: {
                        rootBox: "mx-auto",
                        card: "shadow-lg",
                    },
                }}
            />
        </div>
    );
};

export default Login;
