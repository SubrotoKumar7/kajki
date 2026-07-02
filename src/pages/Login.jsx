import { Link } from "react-router";
import SocialAuth from "../components/SocialAuth";

const Login = () => {
  return (
    <div className="md:w-100 w-full mx-auto mt-10">
        <h1 className="text-2xl text-center font-bold mb-3">Login</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
          />
          <button className="btn btn-primary mt-4">Login</button>
        </fieldset>
        <div className="mt-5">
          <SocialAuth></SocialAuth>
          <div className="mt-5 text-sm text-center">Don't have an account? <Link className="font-bold" to={'/auth/register'}>Sign up</Link> </div>
        </div>
    </div>
  );
};

export default Login;