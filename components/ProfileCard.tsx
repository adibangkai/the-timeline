import Link from "next/link";
import { Prisma } from "@prisma/client";
import { FC } from "react";
import Image from "next/image";
const tokohV = Prisma.validator<Prisma.TokohArgs>()({});
type Tokoh = Prisma.TokohGetPayload<typeof tokohV>;
const ProfileCard: FC<{ tokoh: Tokoh }> = ({ tokoh }) => {
  const { nick, id, name, partai } = tokoh;
  return (
    <Link href={`/jejak/${id}`}>
      <div className="justify-center flex flex-col  cursor-pointer overflow-hidden grayscale hover:grayscale-0">
        <div className="h-min overflow-hidden  ">
          <Image
            src={`/capres/${nick}.png`}
            alt=""
            width={300}
            height={400}
            className="w-[300px] scale-[1.04] hover:scale-[1.1] transition-all mx-auto"
          />
        </div>
        <div className=" px-2 py-2 z-10 bg-base-300">
          <p className="text-lg font-medium text-center text-base-content capitalize">
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;
