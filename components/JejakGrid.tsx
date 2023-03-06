import { getTopic } from "@/lib/utils";
import Link from "next/link";

const JejakGrid = async ({ id }) => {
  const data = await getTopic(id);
  return (
    <div className="w-4/5 mx-auto grid gap-4 grid-cols-1 md:grid-cols-3 my-5  ">
      <Link href={`/all/${id}`}>
        <div className="card w-96 bg-base-100 shadow-xl image-full hover:opacity-70 cursor-pointer mx-auto">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center text-white">Semua</h2>
          </div>
        </div>
      </Link>
      {data.topic.map((t) => (
        <Link key={t.id} href={`/jejak/${t.id}`}>
          <div className="card w-96 bg-base-100 shadow-xl image-full hover:opacity-70 cursor-pointer mx-auto">
            <div className="card-body">
              <h2 className="text-2xl font-bold text-center text-white capitalize">
                {t.topicName}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default JejakGrid;
