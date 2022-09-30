import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import voteRoutes from './routes/Vote';
import apiRoutes from './routes/Api'

const PORT: number = 3002;
const app: Application = express();

app.use(express.json())
app.use(cors())

app.use('/vote', voteRoutes );
app.use('/api', apiRoutes );


app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}/`)
})