import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const Forgetpass = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState(searchParams.get("email") || ""); 

  const handleResetPassword = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert(`Password reset email sent to ${email}`);
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        console.error("Password reset error:", error.message);
        alert("Error sending password reset email. Please try again.");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <h1 className="text-4xl font-bold mb-6">Reset Your Password</h1>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleResetPassword} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgetpass;
