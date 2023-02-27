import Jejak from "@/components/Jejak";
import { db } from "@/lib/db";
import Quotes from "@/components/Quotes";
import { Metadata } from "next";

const getData = async (id: string) => {
  const quotes = await db.quotes.findMany({
    where: { ownerId: id },
    orderBy: { dateQuote: "asc" },
  });
  const tokoh = await db.tokoh.findUnique({
    where: { id: id },
  });

  return { quotes, tokoh };
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

export async function generateMetadata({ params }) {
  const { tokoh } = await getData(params.id);
  return { title: `${tokoh.name} - Jejak` };
}
