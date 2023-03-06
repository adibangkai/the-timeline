"use client";
import { editTokoh } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DetailsFormSkeleton from "./DetailsFormSkeleton";

const DetailsForm = ({ id }) => {
  const [dataTokoh, setDataTokoh] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const route = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetch(`/api/tokoh?tokohId=${id}`);
      const json = await data.json();
      setDataTokoh(json);
      setLoading(false);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [isUpdate]);

  if (isLoading) return <DetailsFormSkeleton />;

  if (!dataTokoh) return <p>No profile data</p>;

  setValue("name", `${dataTokoh.tokoh.name}`);
  setValue("nick", `${dataTokoh.tokoh.nick}`);
  setValue("fullname", `${dataTokoh.tokoh.fullname}`);
  setValue("partai", `${dataTokoh.tokoh.partai}`);
  setValue("jabatan", `${dataTokoh.tokoh.jabatan}`);
  setValue("position", `${dataTokoh.tokoh.position}`);
  setValue("potoUrl", `${dataTokoh.tokoh.potoUrl}`);
  const onSubmit = async (data) => {
    const dataFinal = {
      ...data,
      id: id,
      position: parseInt(data.position),
    };
    try {
      setUpdate(true);
      await editTokoh(dataFinal);
      route.refresh();
      toast.success(`berhasil`, {
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
            <span className="label-text">Foto</span>
          </label>
          <input
            type="text"
            placeholder="Foto URL"
            className="input input-bordered w-full rounded-none"
            {...register("potoUrl")}
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

      <div className="form-control">
        <div className="w-full">
          <label className="label">
            <span className="label-text">position</span>
          </label>
          <input
            type="text"
            placeholder="urutan"
            className="input input-bordered w-full rounded-none"
            {...register("position")}
          />
        </div>
      </div>
      <button className="btn btn-outline w-full rounded-none mt-4">
        Update
      </button>
    </form>
  );
};

export default DetailsForm;
