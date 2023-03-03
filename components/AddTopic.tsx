"use client";
import { addTopic } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddTopic = ({ id }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tokohId: id,
      topicName: "",
    },
  });
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await addTopic(data);
      reset({ topicName: "", tokohId: id });
      router.refresh();
      toast.success(`berhasil`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch {
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
    <div>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Topik"
          className="input input-bordered w-full rounded-none"
          {...register("topicName", { required: true, maxLength: 20 })}
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
