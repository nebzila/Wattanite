import { handlers } from './server-handlers';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(...handlers);
export { server, rest };
