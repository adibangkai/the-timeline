import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function handler(req, res) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

  await db.topic.create({
    data: {
      topicName: req.body.topicName,
      tokohId: req.body.tokohId,
    },
  });

  res.json({ data: { message: "ok" } });
}
