import { getTopic } from "@/lib/utils";
import Link from "next/link";
import AddTopic from "./AddTopic";

export default async function TopicDetails({ id }) {
  const data = await getTopic(id);

  return (
    <div className="w-full mt-4 mx-auto">
      <div className="w-3/4 mx-auto justify-end grid my-4">
        <label htmlFor="my-modal-4" className="btn">
          Tambah Topik
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.topic.map((topik) => (
            <tr key={topik.id}>
              <td>{topik.topicName}</td>
              <td>x</td>
            </tr>
          ))}
          {/* row 1 */}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
}
