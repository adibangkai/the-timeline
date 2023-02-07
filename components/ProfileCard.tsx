const ProfileCard = ({ poto }) => {
  return (
    <div className="justify-center  cursor-pointer grayscale hover:grayscale-0">
      <img src={`/capres/${poto}.png`} alt="" className="w-[300px] " />
      <p className="text-xl font-bold text-center text-sky-800 capitalize">
        {poto}
      </p>
    </div>
  );
};

export default ProfileCard;
