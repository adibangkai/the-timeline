import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function handler(req, res) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);
  if (req.method === "GET") {
    const { tokohId } = req.query;
    const tokoh = await db.tokoh.findUnique({
      where: { id: tokohId },
    });

    res.json({ tokoh });
  } else if (user && req.method === "PUT") {
    await db.tokoh.update({
      where: {
        id: req.body.id,
      },
      data: {
        name: req.body.name,
        nick: req.body.nick,
        fullname: req.body.fullname,
        partai: req.body.partai,
        jabatan: req.body.jabatan,
        position: req.body.position,
        potoUrl: req.body.potoUrl,
      },
    });

    res.json({ data: { message: "ok" } });
  } else {
    await db.tokoh.create({
      data: {
        name: req.body.name,
        nick: req.body.nick,
        fullname: req.body.fullname,
        partai: req.body.partai,
        jabatan: req.body.jabatan,
        position: req.body.position,
        potoUrl: req.body.potoUrl,
      },
    });

    res.json({ data: { message: "ok" } });
  }
}
