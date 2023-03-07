"use client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { addSaran } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function SaranForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await addSaran(data);
      router.replace("/");
      toast.success(`Terimakasih atas saran yang diberikan`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch {
      router.refresh();
      toast.error(`ada yang error nih`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <form action="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control w-full flex flex-row gap-4 ">
        <div className="w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full rounded-none"
            {...register("name", { required: true, maxLength: 20 })}
          />
        </div>
        <div className="w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full rounded-none"
            {...register("email", { required: true, maxLength: 50 })}
          />
        </div>
      </div>
      <div className="form-control w-full mb-4">
        <label className="label">
          <span className="label-text">Masukan</span>
        </label>
        <textarea
          placeholder="tulis pesan anda disini..."
          className="textarea textarea-bordered textarea-lg w-full rounded-none"
          {...register("masukan", { required: true })}
        ></textarea>
      </div>
      <button className="btn btn-outline w-full rounded-none">Submit</button>
    </form>
  );
}
