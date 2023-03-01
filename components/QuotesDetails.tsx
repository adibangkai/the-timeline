import { db } from "@/lib/db";

import Link from "next/link";

const getData = async (id: string) => {
  const quotes = await db.quotes.findMany({
    where: { ownerId: id },
    orderBy: { dateQuote: "asc" },
    include: {
      topic: true,
    },
  });

  return quotes;
};
export default async function QuotesDetails({ id }) {
  const data = await getData(id);
  console.log(data);
  return (
    <div className="w-full ">
      <div className="w-full mx-auto justify-end grid my-4">
        <Link href={"/tokoh"}>
          <button className="btn btn-primary  ">tambah quote</button>
        </Link>
      </div>
      <table className="table-fixed table-compact  mx-auto  mb-14 text-left w-full">
        {/* head */}
        <thead className="bg-base-200 rounded-lg">
          <tr className="">
            <th className="w-4/6 p-4">quote</th>
            <th className="w-1/6 p-4">topik</th>
            <th className="w-1/6 p-4">sumber</th>
          </tr>
        </thead>
        <tbody>
          {data.map((quote) => (
            <tr key={quote.id} className="overflow-x-scroll">
              <td className="w-4/6 rounded-t-lg">{quote.quote}</td>
              <td className="w-1/6">{quote.topic.topicName}</td>
              <td className="w-1/6 truncate">{quote.sourceQuote}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
