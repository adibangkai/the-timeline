"use client";
import { addQuotes } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddQuotes = ({ topic }) => {
  const route = useRouter();
  const dateToString = (val) => {
    const event = new Date(val);

    return event.toISOString();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ownerId: topic[0].tokohId,
      topicId: "",
      quote: "",
      sourceQuote: "",
      dateQuote: "",
    },
  });
  // console.log(topic[0].tokohId, "tokai");
  const onSubmit = async (data) => {
    const dataFinal = {
      ...data,
      dateQuote: dateToString(data.dateQuote),
    };
    try {
      await addQuotes(dataFinal);
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
      route.refresh();
      reset({
        ownerId: topic[0].tokohId,
        topicId: "",
        quote: "",
        sourceQuote: "",
        dateQuote: "",
      });
    } catch {
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
    }
  };

  return (
    <div>
      <form className="w-full grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <select
          className="select w-full select-bordered"
          {...register("topicId")}
        >
          <option disabled selected>
            Pilih Topik
          </option>
          {topic.map((t) => (
            <option key={t.id} value={t.id}>
              {t.topicName}
            </option>
          ))}
        </select>
        <textarea
          placeholder="Quotes"
          className="textarea textarea-bordered w-full rounded-none"
          {...register("quote", { required: true })}
        />
        <input
          type="text"
          placeholder="Sumber"
          className="input input-bordered w-full rounded-none"
          {...register("sourceQuote", { required: true })}
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
