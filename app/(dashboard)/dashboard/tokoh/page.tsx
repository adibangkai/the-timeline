import AddTokoh from "@/components/AddTokoh";

export default function TokohPage() {
  return (
    <div className="h-fit w-5/6 md:w-4/6 mx-auto mt-10 min-h-max">
      <div className=" py-8 ">
        <p className="text-4xl font-bold  text-center">Tambah Tokoh</p>
      </div>
      <AddTokoh />
    </div>
  );
}
