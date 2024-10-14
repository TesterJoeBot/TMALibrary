// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import books from "@/data/books";
import { Book } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  books: Book[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json({ books: books });
    return;
  }

  res.status(405).end();
}
