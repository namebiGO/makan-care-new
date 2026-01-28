import { SignUp } from "@clerk/clerk-react";
import { APPROUTES } from "../../constants/routes/appRoutes";

const Signup = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <SignUp
                routing="path"
                path="/signup"
                signInUrl="/login"
                afterSignUpUrl={APPROUTES.HOME}
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

export default Signup;
