import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function handler(req, res) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

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
