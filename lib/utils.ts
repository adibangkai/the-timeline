import { cache } from "react";
import { db } from "./db";

export const getTokoh = cache(async (id: string) => {
  const tokoh = await db.tokoh.findUnique({
    where: { id: id },
  });

  return { tokoh };
});

export const getAll = cache(async () => {
  const tokohIndex = await db.tokoh.findMany({
    orderBy: { position: "asc" },
  });
  return { tokohIndex };
});

export const getTopic = cache(async (id: string) => {
  const topic = await db.topic.findMany({
    where: { tokohId: id },
    orderBy: { topicName: "asc" },
  });

  return { topic };
});
