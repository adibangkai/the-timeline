import { db } from "@/lib/db";

import Link from "next/link";

const getData = async (id: string) => {
  const topic = await db.topic.findMany({
    where: { tokohId: id },
    orderBy: { topicName: "asc" },
  });

  return { topic };
};

export default async function TopicDetails({ id, topic }) {
  const data = topic || (await getData(id));

  return (
    <div className="w-full mt-4 mx-auto">
      <div className="w-3/4 mx-auto justify-end grid my-4">
        <label htmlFor="my-modal-4" className="btn">
          open modal
        </label>
      </div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label>
      <table className="table w-3/4 rounded-sm mx-auto  mb-14">
        {/* head */}
        <thead>
          <tr>
            <th>Topik</th>
          </tr>
        </thead>
        <tbody>
          {data.map((topik) => (
            <tr key={topik.id}>
              <td>{topik.topicName}</td>
            </tr>
          ))}
          {/* row 1 */}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
}
