import Jejak from "@/components/Jejak";
import Quotes from "@/components/Quotes";
import { getQuotes, getTopic, getTopicSingle } from "@/lib/utils";

export default async function JejakPage({ params }) {
  const { quotes } = await getQuotes(params.id);
  if (quotes.length === 0) {
    return (
      <div className="mt-80 text-center  text-2xl md:text-4xl font-extralight text-gray-400">
        no quotes yet...
      </div>
    );
  }
  return (
    <>
      <div className="w-full ">
        <Jejak id={params.id} mode={"jejak"} />
      </div>
    </>
  );
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { topic } = await getTopicSingle(params.id);
  return { title: `${topic?.tokoh.name} - ${topic?.topicName}` };
}
