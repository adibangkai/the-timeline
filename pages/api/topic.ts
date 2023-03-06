import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function handler(req, res) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);
  if (req.method === "DELETE") {
    await db.topic.delete({
      where: {
        id: req.body.id,
      },
    });

    await db.quotes.deleteMany({
      where: {
        topicId: req.body.id,
      },
    });
    res.json({ data: { message: "ok" } });
  } else if (req.method === "PUT") {
    await db.topic.update({
      where: {
        id: req.body.id,
      },
      data: {
        topicName: req.body.topicName,
        tokohId: req.body.topicId,
      },
    });

    res.json({ data: { message: "ok" } });
  } else if (req.method === "GET") {
    const { tokohId } = req.query;
    const topic = await db.topic.findMany({
      where: {
        tokohId: tokohId,
      },
    });
    res.json({ data: { topic, message: "ok" } });
  } else {
    await db.topic.create({
      data: {
        topicName: req.body.topicName,
        tokohId: req.body.tokohId,
      },
    });

    res.json({ data: { message: "ok" } });
  }
}
