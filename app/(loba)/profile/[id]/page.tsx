import Jejak from "@/components/Jejak";
import { db } from "@/lib/db";
import Quotes from "@/components/Quotes";
import Image from "next/image";
import { Metadata } from "next";
import MapIndo from "@/components/MapIndo";
import { Suspense } from "react";
import MapSkeleton from "@/components/MapSkeleton";
import Link from "next/link";
import { cache } from "react";
import { getTokoh } from "@/lib/utils";

export default async function JejakPage({ params }) {
  const { tokoh } = await getTokoh(params.id);

  return (
    <>
      <div className="w-full mx-auto  mt-20 text-black">
        <div className="flex md:flex-row flex-col w-5/6 mx-auto">
          <div className="w-full md:w-1/4">
            <img src={tokoh?.potoUrl} className=" mx-auto content-center" />
          </div>
          <div className="w-full md:w-3/4 mt-10 md:ml-20 ml-0 mx-auto  content-center grid relative md:text-left text-center">
            <Image
              src={`/partai/${tokoh?.partai}.png`}
              alt=""
              width={100}
              height={100}
              className=" absolute top-0 right-0 invisible md:visible"
            />
            <div className="text-4xl font-bold">
              {tokoh.name}
              <span className="text-xs font-extralight text-slate-400">
                ({tokoh.fullname})
              </span>
            </div>

            <div className="text-xl font-extralight text-slate-400">
              Dikenal publik sebagai {tokoh?.jabatan}
            </div>
          </div>
        </div>

        <div className="map mt-8 bg-slate-100 w-full px-10">
          <Suspense fallback={<MapSkeleton />}>
            <MapIndo tokoh={tokoh.nick} />
          </Suspense>
        </div>
        <div className="capitalize font-extralight text-slate-400 text-xl text-center mt-10">
          Lihat Opini {tokoh?.name}:
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 my-5  ">
          <Link href={`/jejak/${tokoh.id}`}>
            <div className="card w-96 bg-base-100 shadow-xl image-full hover:opacity-70 cursor-pointer mx-auto">
              <div className="card-body">
                <h2 className="text-2xl font-bold text-center text-white">
                  Semua
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({ params }) {
  const { tokoh } = await getTokoh(params.id);
  return { title: `${tokoh.name} - Profil` };
}
