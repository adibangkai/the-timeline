import { NextApiRequest, NextApiResponse } from "next";

import { serialize } from "cookie";

export default async function logout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader(
    "Set-Cookie",
    serialize(process.env.COOKIE_NAME, null, {
      httpOnly: true,
      path: "/",
      maxAge: -1,
    })
  );
  res.status(201).json({ message: "logout success" });
}
