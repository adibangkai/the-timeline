import { db } from "@/lib/db";
import Link from "next/link";
import { getAll } from "@/lib/utils";

export default async function DashboardPage() {
  const { tokohIndex } = await getAll();

  return (
    <div className="w-full mt-4 mx-auto">
      <div className="w-3/4 mx-auto justify-end grid my-4">
        <Link href={"/dashboard/tokoh"}>
          <button className="btn btn-primary  ">tambah tokoh</button>
        </Link>
      </div>
      <table className="table w-3/4 rounded-sm mx-auto  mb-14">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>

            <th>Partai</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tokohIndex.map((tokoh) => (
            <tr key={tokoh.id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={`/capres/${tokoh.nick}.png`} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{tokoh.name}</div>
                    <div className="text-sm opacity-50">{tokoh.fullname}</div>
                  </div>
                </div>
              </td>

              <td>{tokoh.partai}</td>
              <th>
                <Link href={`/dashboard/details/${tokoh.id}`}>
                  <button className="btn btn-ghost btn-xs">details</button>
                </Link>
              </th>
            </tr>
          ))}
          {/* row 1 */}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
}
