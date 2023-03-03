import { db } from "@/lib/db";

import Link from "next/link";
import AddTopic from "./AddTopic";

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
      <label htmlFor="my-modal-4" className="modal">
        <div className="modal-box">
          <AddTopic id={id} />
        </div>
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
