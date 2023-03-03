import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function handler(req, res) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

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
}
