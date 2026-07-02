import { Link } from "react-router";
import SocialAuth from "../components/SocialAuth";

const Register = () => {
    return (
        <div className="md:w-100 w-full mx-auto mt-10">
            <h1 className="text-2xl text-center font-bold mb-3">Create An Account</h1>
            <div>
                <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                    type="text"
                    className="input w-full"
                    placeholder="Name"
                />
                <label className="label">Email</label>
                <input
                    type="email"
                    className="input w-full"
                    placeholder="Email"
                />
                <fieldset className="fieldset">
                    <legend className="label">Upload Photo</legend>
                    <input type="file" className="file-input w-full" />
                    <label className="label">Max size 2MB</label>
                </fieldset>
                <label className="label">Password</label>
                <input
                    type="password"
                    className="input w-full"
                    placeholder="Password"
                />
                <button className="btn btn-primary mt-4">Register</button>
                </fieldset>
            </div>
            <div className="mt-5">
                <SocialAuth></SocialAuth>
                <div className="mt-5 text-sm text-center">Already have an account? <Link className="font-bold" to={'/auth/login'}>Login</Link> </div>
            </div>
        </div>
    );
};

export default Register;