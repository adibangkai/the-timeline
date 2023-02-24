"use client";

import Link from "next/link";

const registerContent = {
  linkUrl: "/kurlogin",
  linkText: "Already have an Account?",
  header: "Create new account",
  subheader: "Just few things to get started",
  buttonText: "Register",
};
const signinContent = {
  linkUrl: "/kurlegis",
  linkText: "Don't have an account?",
  header: "Welcome!",
  subheader: "Enter your credentials to access your account",
  buttonText: "Sign In",
};

const AuthForm = ({ mode }) => {
  const content = mode === "register" ? registerContent : signinContent;

  return (
    <div className="h-fit w-5/6 md:w-4/6 mx-auto mt-32 min-h-max flex justify-center">
      <div className="card w-3/6  shadow-xl bg-gray-100 ">
        <div className="card-body gap-5">
          <h2 className="normal-case text-4xl judul text-sky-700 text-center">
            {" "}
            JEJAK
          </h2>
          <div className="form-control w-full justify-centers">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full "
            />
            <label className="label">
              <Link
                //  prefetch for prelaod other page
                href={content.linkUrl}
                className="text-blue-600 font-bold"
              >
                {content.linkText}
              </Link>
            </label>
          </div>
          <div className="card-actions justify-end pt-2">
            <button className="btn btn-primary px-10">
              {content.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
