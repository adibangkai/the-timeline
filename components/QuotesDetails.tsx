import { getQuote } from "@/lib/utils";
import AddQuotes from "./AddQuotes";

export default async function QuotesDetails({ id }) {
  const data = await getQuote(id);

  return (
    <div className="w-full ">
      <div className="w-full mx-auto justify-end grid my-4">
        <label htmlFor="quote-modal" className="btn">
          Tambah Quotes
        </label>
      </div>
      <input type="checkbox" id="quote-modal" className="modal-toggle" />
      {/* <label htmlFor="quote-modal" className="modal cursor-pointer"> */}
      <div className="modal">
        <div className="modal-box ursor-pointer pt-10">
          <label
            htmlFor="quote-modal"
            className="text-black  cursor-pointer absolute right-2 top-2"
          >
            ✕
          </label>
          <AddQuotes id={id} />
        </div>
      </div>
      {/* </label> */}
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
          {data.quotes.map((quote) => (
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
