# Wattanite Refactor

This repository took an existing project, built by one of our colleagues in Codeworks, and refactored it.

Wattanite is an app that allows you and your friends/family to vote on a movie to watch and restaurant to order from for the night.

Multiple users can vote at the same time and results will be displayed simultaneously to all users, using web sockets.

It was built out of frustration of sitting on Netflix too long without any decisions being made.

### Tasks completed during refactor:

- **Converted the client and server to TypeScript from plain Javascript.**

- **Added WebSockets to the app so that multiple users could vote.**

- **Refactored the backend endpoints.**

- **Added Testing to the frontend and backend with Jest & Cypress.**


## Getting Started

1. Fork the repo.

2. `cd client` and `npm run start` to load the client

3. `cd server` and `npm run dev` could instead do `npm run build` and `npm run start`.

## Tech Stack

Testing:
- Jest
- Cypress
- Mock Service Workers

Front-end:
- React
- Tailwind

Back-end: 
- Express
- Socket.IO

APIs:
- Google Maps API
- MovieDB API

### Contributors:

- Alex Kubbinga

- Simon Roope 
