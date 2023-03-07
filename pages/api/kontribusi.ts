import { db } from "@/lib/db";

export default async function handler(req, res) {
  await db.kontribusi.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      sourceLink: req.body.sourceLink,
      masukan: req.body.masukan,
    },
  });

  res.json({ data: { message: "ok" } });
}
