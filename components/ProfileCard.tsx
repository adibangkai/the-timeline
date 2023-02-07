import Link from "next/link";

const ProfileCard = ({ poto }) => {
  return (
    <Link href={"/jejak/anie"}>
      <div className="justify-center  cursor-pointer grayscale hover:grayscale-0 overflow-hidden ">
        <div className="h-min overflow-hidden ">
          <img
            src={`/capres/${poto}.png`}
            alt=""
            className="w-[300px] scale-[1.04] hover:scale-[1.1] transition-all"
          />
        </div>
        <div className="bg-gray-400 px-2 py-2 z-10 ">
          <p className="text-lg font-medium text-center text-white capitalize">
            Ganjar Baswedan S.IKOM
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;
