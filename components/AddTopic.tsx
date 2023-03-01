"use client";
import { useForm } from "react-hook-form";

const AddTopic = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Topik"
          className="input input-bordered w-full rounded-none"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <label
          htmlFor="my-modal-4"
          className="text-black  cursor-pointer absolute right-2 top-2"
        >
          {" "}
          <button className="btn btn-outline w-full rounded-none mt-4">
            Tambah
          </button>
        </label>
      </form>
    </div>
  );
};

export default AddTopic;
