import Jejak from "@/components/Jejak";
import { db } from "@/lib/db";
import Quotes from "@/components/Quotes";

const getData = async (id: string) => {
  const quotes = await db.quotes.findMany({
    where: { ownerId: id },
    orderBy: { dateQuote: "asc" },
  });
  console.log(quotes);

  return { quotes };
};
export default async function JejakPage({ params }) {
  const { quotes } = await getData(params.id);
  console.log(quotes);

  return (
    <>
      <div className="w-full ">
        <Jejak quotes={quotes} />
      </div>
    </>
  );
}
