// import { partaiMap } from "@/lib/partaiColor";
import Link from "next/link";
import { Prisma } from "@prisma/client";
import { FC } from "react";
import clsx from "clsx";
import Image from "next/image";
const tokohV = Prisma.validator<Prisma.TokohArgs>()({});
type Tokoh = Prisma.TokohGetPayload<typeof tokohV>;

const partaiMap = {
  Nasdem: "bg-blue-900 text-white",
  Demokrat: "bg-blue-600 text-white",
  PDIP: "bg-rose-600 text-white",
  PKS: "bg-orange-400 text-white",
  Netral: "bg-slate-600 text-white",
  Golkar: "bg-amber-400 text-white",
};
const ProfileCard: FC<{ tokoh: Tokoh }> = ({ tokoh }) => {
  const { nick, id, name, partai, potoUrl } = tokoh;
  return (
    <Link href={`/profile/${id}`}>
      <div className="justify-center mx-auto flex max-w-[314px] flex-col  cursor-pointer overflow-hidden grayscale hover:grayscale-0">
        <div className="h-min overflow-hidden  ">
          <img
            src={potoUrl}
            alt=""
            // width={300}
            // height={400}
            className="w-[300px] z-30 h-[300px] object-cover scale-[1.04] hover:scale-[1.1] transition-all mx-auto"
          />
        </div>
        <div
          className={clsx(
            `px-2 mx-auto w-full max-w-[314px] py-2 z-10 ${partaiMap[partai]}`
          )}
        >
          <p className="text-lg font-medium font-sans text-center  capitalize ">
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;
