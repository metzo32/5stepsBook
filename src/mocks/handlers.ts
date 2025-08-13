
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/books', () => {
    return HttpResponse.json([
      {
        id: '1',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        published: '2024-10-10',
        image: "/images/the_great_gatsby.jpg",
        pageNum: 200,
      },
    ]);
  }),
];
