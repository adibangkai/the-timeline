import Jejak from "@/components/Jejak";
import { db } from "@/lib/db";
import Quotes from "@/components/Quotes";
import Image from "next/image";
import { Metadata } from "next";
import MapIndo from "@/components/MapIndo";
import { Suspense } from "react";
import MapSkeleton from "@/components/MapSkeleton";

const getData = async (id: string) => {
  const tokoh = await db.tokoh.findUnique({
    where: { id: id },
  });
  console.log(tokoh);

  return { tokoh };
};
export default async function JejakPage({ params }) {
  const { tokoh } = await getData(params.id);
  console.log(tokoh);

  return (
    <>
      <div className="w-5/6 mx-auto  mt-20 text-black">
        <div className="flex flex-row">
          <div className="w-1/4">
            <Image
              src={`/capres/${tokoh.nick}.png`}
              alt=""
              width={300}
              height={400}
              className=" transition-all mx-auto"
            />
          </div>
          <div className="w-3/4 mt-10 ml-20 content-center grid">
            <div className="text-4xl font-bold">{tokoh.name}</div>
            <div className="text-xl font-extralight text-slate-400">
              {tokoh.fullname} - {tokoh?.partai}
            </div>
            <div>{tokoh?.jabatan}</div>
          </div>
        </div>

        <div className="map mt-8">
          <Suspense fallback={<MapSkeleton />}>
            <MapIndo tokoh={tokoh.nick} />
          </Suspense>
        </div>
        <div className="capitalize font-extralight text-slate-400 text-xl text-center mt-10">
          Lihat Opini Mereka:
        </div>
        <div className="grid gap-4 grid-cols-3 my-5 ">
          <div className="card w-96 bg-base-100 shadow-xl image-full hover:opacity-70 cursor-pointer">
            <div className="card-body">
              <h2 className="text-2xl font-bold text-center">ALL</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({ params }) {
  const { tokoh } = await getData(params.id);
  return { title: `${tokoh.name} - Profil` };
}
