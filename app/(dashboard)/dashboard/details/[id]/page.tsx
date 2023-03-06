import DetailsForm from "@/components/DetailsForm";
import DetailsFormSkeleton from "@/components/DetailsFormSkeleton";
import QuotesDetails from "@/components/QuotesDetails";
import TopicDetails from "@/components/TopicDetails";
import { db } from "@/lib/db";
import { Suspense } from "react";

const getData = async (id: string) => {
  const tokoh = await db.tokoh.findUnique({
    where: { id: id },
    include: {
      topic: true,
      quotes: true,
    },
  });

  return { tokoh };
};
export default async function DetailsPage({ params }) {
  const { tokoh } = await getData(params.id);
  return (
    <div className="h-fit w-5/6 md:w-5/6 mx-auto mt-10 min-h-max">
      <div className=" py-8 ">
        <p className="text-4xl font-extralight  text-center">
          {" "}
          Data - {tokoh.name}
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div className="w-full place-content-center">
          <img
            src={tokoh?.potoUrl}
            className=" mx-auto content-center w-[300px] z-30 h-[400px] object-cover my-auto "
          />
        </div>
        <Suspense fallback={<DetailsFormSkeleton />}>
          <DetailsForm id={tokoh.id} />
        </Suspense>
      </div>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          {/* @ts-expect-error Server Component */}
          <TopicDetails id={tokoh?.id} />
        </div>
        <div className="col-span-3">
          {/* @ts-expect-error Server Component */}
          <QuotesDetails id={tokoh?.id} />
        </div>
      </div>
    </div>
  );
}
