import SaranForm from "@/components/SaranForm";

export default async function SaranPage() {
  return (
    <div className="h-fit w-5/6 md:w-4/6 mx-auto mt-20 min-h-max">
      <div className="px-10 py-8 ">
        <p className="text-2xl font-bold  text-center">Saran Untuk Kami</p>
      </div>
      <SaranForm />
    </div>
  );
}
