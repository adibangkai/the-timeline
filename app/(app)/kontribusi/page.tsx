import KontribusiForm from "@/components/KontribusiForm";

export default function KontribusiPage() {
  return (
    <div className="h-fit w-5/6 md:w-4/6 mx-auto mt-20 min-h-max">
      <div className=" py-8 ">
        <p className="text-2xl font-bold  text-center">Kontribusi</p>
        <p className="text-md font-extralight ">
          Bantu kami melengkapi data, jika anda mengetahui ucapan atau perkataan
          dari mereka silahkan kirim kepada kami...
        </p>
      </div>
      <KontribusiForm />
    </div>
  );
}
