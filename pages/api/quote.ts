import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function handler(req, res) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);
  if (user && req.method === "POST") {
    await db.quotes.create({
      data: {
        topicId: req.body.topicId,
        ownerId: req.body.ownerId,
        quote: req.body.quote,
        dateQuote: req.body.dateQuote,
        sourceQuote: req.body.sourceQuote,
      },
    });

    res.json({ data: { message: "ok" } });
  } else {
    const { topicId } = req.query;
    const dataQuote = await db.quotes.findMany({
      where: { topicId: topicId },
      orderBy: { dateQuote: "asc" },
      include: {
        owner: true,
        topic: true,
      },
    });
    res.json({ data: { dataQuote, message: "ok" } });
  }
}
