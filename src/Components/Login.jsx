import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Providers/AuthProvider";
const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/"
  console.log(location)

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const password = e.target.password.value;
    signInUser(email, password)
      .then(() => {
        e.target.reset();
        toast.success("Login successful!");
        navigate(from, { replace: true })


      })
      .catch((error) => {
        setError("Invalid email or password. Please try again.");
        toast.error("Login failed. Check your credentials.");
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Login successful with Google!");
        navigate(from, { replace: true })



      })
      .catch((error) => {
        console.error("Google login error:", error.message);
        toast.error("Google login failed. Please try again.");
      });
  };

  return (
    <div className="py-20">
      <div className="hero mx-auto">
        <div className="lg:w-10/12 flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login to Access More Info</h1>
            <p className="py-6">Welcome back! Please login to continue.</p>
          </div>
          <div className="w-full lg:w-8/12 mx-auto bg-[#D9B8A7] ">
            <form onSubmit={handleLogin} className="border-2 border-[#754738] p-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link
                    to={`/ForgetPassword?email=${encodeURIComponent(email)}`}
                    className="text-[#754738] font-bold hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </label>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="form-control mt-6">
                <button className="btn bg-[#754738] hover:bg-[#AE9183] text-white">Login</button>
              </div>

              <div className="text-center mt-4">
                <p className="mb-2">Or login with:</p>
                <button
                  type="button"
                  onClick={handleLoginWithGoogle}
                  className="btn bg-[#754738] hover:bg-[#AE9183] text-white flex items-center justify-center gap-2 w-full"
                >
                    <FcGoogle />
                  Google
                </button>
              </div>

              <p className="mt-4 text-center">
                Don't have an account?{" "}
                <Link to="/Register" className="text-[#754738] font-bold  hover:underline">
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
