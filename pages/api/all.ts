import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function handler(req, res) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

  const { tokohId } = req.query;
  const dataQuote = await db.quotes.findMany({
    where: { ownerId: tokohId },
    orderBy: { dateQuote: "asc" },
    include: {
      owner: true,
      topic: true,
    },
  });
  res.json({ data: { dataQuote, message: "ok" } });
}
