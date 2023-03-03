"use client";

import { signin, signup } from "@/lib/api";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const registerContent = {
  linkUrl: "/signin",
  linkText: "Already have an Account?",
  header: "Create new account",
  subheader: "Just few things to get started",
  buttonText: "Register",
};
const signinContent = {
  linkUrl: "/register",
  linkText: "Don't have an account?",
  header: "Welcome!",
  subheader: "Enter your credentials to access your account",
  buttonText: "Sign In",
};

const AuthForm = ({ mode }) => {
  const router = useRouter();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      if (mode === "register") {
        console.log("register trigger", data);
        await signup(data);
      } else {
        await signin(data);
      }
      router.replace("/dashboard");
      toast.success(`${mode} success`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (e) {
      toast.error(`could not ${mode}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const content = mode === "register" ? registerContent : signinContent;

  return (
    <div className="h-fit w-5/6 md:w-4/6 mx-auto mt-32 min-h-max flex justify-center">
      <div className="card w-3/6  shadow-xl bg-gray-100 ">
        <div className="card-body gap-5">
          <h2 className="normal-case text-4xl judul text-sky-700 text-center">
            {" "}
            JEJAK
          </h2>
          {mode === "register" && (
            <>
              <div className="form-control w-full justify-centers">
                <label className="label">
                  <span className="label-text">Nama Depan</span>
                </label>
                <input
                  type="text"
                  placeholder="Nama Depan"
                  className="input input-bordered w-full "
                  {...register("firstName", { required: true })}
                />
              </div>
              <div className="form-control w-full justify-centers">
                <label className="label">
                  <span className="label-text">Nama Belakang</span>
                </label>
                <input
                  type="text"
                  placeholder="Nama Belakang"
                  className="input input-bordered w-full"
                  {...register("lastName", { required: true })}
                />
              </div>
            </>
          )}
          <div className="form-control w-full justify-centers">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered w-full "
              {...register("email", { required: true })}
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
              {...register("password", { required: true })}
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
            <button
              className="btn btn-primary px-10"
              onClick={handleSubmit(onSubmit)}
            >
              {content.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
