"use client";
import { useForm } from "react-hook-form";

const AddTokoh = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
      </div>
      <div className="form-control">
        <div className="w-full">
          <label className="label">
            <span className="label-text">Nama Lengkap</span>
          </label>
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="input input-bordered w-full rounded-none"
            {...register("fullname", { required: true })}
          />
        </div>
      </div>
      <div className="form-control">
        <div className="w-full">
          <label className="label">
            <span className="label-text">Nick</span>
          </label>
          <input
            type="text"
            placeholder="Nickname"
            className="input input-bordered w-full rounded-none"
            {...register("nick", { required: true })}
          />
        </div>
      </div>
      <div className="form-control">
        <div className="w-full">
          <label className="label">
            <span className="label-text">Partai</span>
          </label>
          <input
            type="text"
            placeholder="Partai"
            className="input input-bordered w-full rounded-none"
            {...register("partai", { required: true })}
          />
        </div>
      </div>

      <div className="form-control">
        <div className="w-full">
          <label className="label">
            <span className="label-text">Jabatan</span>
          </label>
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="input input-bordered w-full rounded-none"
            {...register("jabatan")}
          />
        </div>
      </div>
      <button className="btn btn-outline w-full rounded-none mt-4">
        Submit
      </button>
    </form>
  );
};

export default AddTokoh;
