import Link from "next/link";

const ProfileCard = ({ poto }) => {
  return (
    <Link href={"/jejak/anie"}>
      <div className="justify-center  cursor-pointer overflow-hidden grayscale hover:grayscale-0">
        <div className="h-min overflow-hidden  ">
          <img
            src={`/capres/${poto}.png`}
            alt=""
            className="w-[300px] scale-[1.04] hover:scale-[1.1] transition-all"
          />
        </div>
        <div className=" px-2 py-2 z-10 bg-base-300">
          <p className="text-lg font-medium text-center text-base-content capitalize">
            Ganjar Baswedan S.IKOM
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;
