"use client";
import { useForm } from "react-hook-form";

const AddQuotes = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  return (
    <div>
      <form className="w-full grid gap-4">
        <select
          className="select w-full select-bordered"
          {...register("topicId")}
        >
          <option disabled selected>
            Pilih Topik
          </option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <textarea
          placeholder="Quotes"
          className="textarea textarea-bordered w-full rounded-none"
          {...register("quote", { required: true, maxLength: 20 })}
        />
        <input
          type="text"
          placeholder="Sumber"
          className="input input-bordered w-full rounded-none"
          {...register("sourceQuote", { required: true, maxLength: 20 })}
        />
        <input
          type="date"
          placeholder="Topik"
          className="input input-bordered w-full rounded-none"
          {...register("dateQuote", { required: true, maxLength: 20 })}
        />
        <button className="btn btn-outline w-full rounded-none mt-4">
          Tambah
        </button>
      </form>
    </div>
  );
};

export default AddQuotes;
