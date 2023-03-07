import Jejak from "@/components/Jejak";
import { getQuote } from "@/lib/utils";

export default async function AllPage({ params }) {
  const { quotes } = await getQuote(params.id);

  return (
    <>
      <div className="w-full ">
        <Jejak id={params.id} mode={"all"} />
      </div>
    </>
  );
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { quotes } = await getQuote(params.id);
  return { title: `${quotes[0].owner.name} - Jejak` };
}
