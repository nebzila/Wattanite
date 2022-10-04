import { rest } from 'msw'; // msw supports graphql too!
import { movies, restaurants } from './mocks';

const handlers = [
  rest.get('http://localhost:3002/api/movies', (req, res, ctx) => {
    return res(ctx.json(movies));
  }),
  rest.get('/api/restaurants', (req, res, ctx) => {
    return res(ctx.json(restaurants));
  }),
];

export { handlers };
