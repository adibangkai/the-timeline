import { db } from "@/lib/db";

export default async function handler(req, res) {
  await db.saran.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      masukan: req.body.masukan,
    },
  });

  res.json({ data: { message: "ok" } });
}
