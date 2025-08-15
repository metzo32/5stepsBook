import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const books = [
      {
        id: "1",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        published: "2024-10-10",
        image: "/images/the_great_gatsby.jpg",
        pageNum: 200,
      },
      {
        id: "2",
        title: "1984",
        author: "George Orwell",
        published: "2020-01-01",
        image: "/images/the_great_gatsby.jpg",
        pageNum: 300,
      },
      {
        id: "3",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        published: "2015-05-20",
        image: "/images/the_great_gatsby.jpg",
        pageNum: 281,
      },
      {
        id: "4",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        published: "2010-03-15",
        image: "/images/the_great_gatsby.jpg",
        pageNum: 279,
      },
      {
        id: "5",
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        published: "2018-08-10",
        image: "/images/the_great_gatsby.jpg",
        pageNum: 214,
      },
      {
        id: "6",
        title: "Brave New World",
        author: "Aldous Huxley",
        published: "2019-11-30",
        image: "/images/the_great_gatsby.jpg",
        pageNum: 268,
      },
      {
        id: "7",
        title: "Moby-Dick",
        author: "Herman Melville",
        published: "2012-06-25",
        image: "/images/the_great_gatsby.jpg",
        pageNum: 635,
      },
      {
        id: "8",
        title: "War and Peace",
        author: "Leo Tolstoy",
        published: "2016-09-14",
        image: "/images/the_great_gatsby.jpg",
        pageNum: 1225,
      },
      {
        id: "9",
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        published: "2014-12-01",
        image: "/images/the_great_gatsby.jpg",
        pageNum: 310,
      },
      {
        id: "10",
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        published: "2011-04-05",
        image: "/images/the_great_gatsby.jpg",
        pageNum: 671,
      },
    ];

    console.log("🔍 API Route - Returning books:", books);
    console.log("🔍 API Route - Number of books:", books.length);
    
    res.status(200).json(books);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
