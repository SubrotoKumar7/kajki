import SocialAuth from "../components/SocialAuth";

const Login = () => {
    return (
      <div className="flex justify-center items-center">
        <div className="grid grid-rows-12 grid-cols-12 gap-1 items-center p-5 md:w-200 md:h-150 shadow-2xl shadow-gray-400">
          {/* welcome message */}
          <div className="md:col-span-6 col-span-12 md:row-span-8 row-span-full">
            <h1 className="text-center text-3xl">
              Hello! <br /> <b>Have a good day</b>
            </h1>
          </div>
          {/* login form */}
          <div className="md:col-span-6 col-span-12 md:row-span-8 p-2 mt-3">
            <h1 className="text-3xl text-center font-bold mb-3 md:block hidden">Login</h1>
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
          </div>
          {/* social auth */}
          <div className="col-span-12 row-span-4">
            <SocialAuth></SocialAuth>
          </div>
        </div>
      </div>
    );
};

export default Login;