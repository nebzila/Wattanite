import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import voteRoutes from './routes/Vote';
import apiRoutes from './routes/Api'
import { VoteType } from './models/types';

const PORT: number = 3002;
const app: Application = express();

import http from 'http';

const server = http.createServer(app)

const socketIO = require('socket.io')(server, {
  cors: {
      origin: "http://localhost:3000"
  }
});

let votes: any[] = [];

socketIO.on('connection', (socket: any) => {
  socket.emit('vote-update-broadcast', votes)


  console.log(`${socket.id} user  connected!`);
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });


  socket.on('userStart', (user: any) => {
      console.log(`user: ${user.socketID} or ${user.name} with postcode ${user.postcode}`)
  })


  socket.on('vote', (vote: any) => {
      votes = vote
      console.log('vote has been received')
      socket.broadcast.emit('vote-update-broadcast', votes)
  })

  socket.on('end', (winners: any) => {
    console.log('end is sent out: ', winners)
    socket.broadcast.emit('end-all', winners)
    votes = []
  })



})

app.use(express.json())
app.use(cors())



app.use('/vote', voteRoutes );
app.use('/api', apiRoutes );


server.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}/`)
})