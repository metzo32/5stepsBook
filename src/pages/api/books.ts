import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json([
      {
        id: "1",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        published: "2024-10-10",
        image: "/images/the_great_gatsby.jpg",
        pageNum: 200,
      },
    ]);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
