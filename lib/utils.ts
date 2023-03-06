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
export const getTopicSingle = cache(async (id: string) => {
  const topic = await db.topic.findUnique({
    where: { id: id },
    include: {
      tokoh: true,
    },
  });

  return { topic };
});
export const getQuote = cache(async (id: string) => {
  const quotes = await db.quotes.findMany({
    where: { ownerId: id },
    orderBy: { dateQuote: "asc" },
    include: {
      topic: true,
      owner: true,
    },
  });

  return { quotes };
});

export const getQuotes = cache(async (id: string) => {
  const quotes = await db.quotes.findMany({
    where: { topicId: id },
    orderBy: { dateQuote: "asc" },
    include: {
      owner: true,
      topic: true,
    },
  });

  return { quotes };
});
