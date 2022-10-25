# Wattanite

## Features
Wattanite is an app that allows a group of users to vote on a selection of top movies and local restaurants, <br>retrieved from API calls using user-provided information.

Multiple users can vote at the same time and results will be displayed simultaneously to all users, using web sockets.

It was built out of frustration of sitting on Netflix too long without any decisions being made. It gamifies <br>this experience and makes it fun and fair for all users.

### Tasks completed during refactor:

- **Converted the client and server to TypeScript from plain Javascript.**

- **Added WebSockets to the app so that multiple users could vote.**

- **Refactored the backend endpoints.**

- **Added Testing to the frontend and backend with Jest & Cypress.**


## Getting Started

1. Fork the repo.

2. `npm install` to install the dependencies.

3. `cd client` and `npm run start` to load the client.

4. `cd server` and `npm run dev`, or alternatively `npm run build` and `npm run start` to start the server.

* Please note, this app will require API keys for Google and TMDB.

## Tech Stack

| Front End     | Back End      | APIs          |      Testing  |
| ------------- | ------------- | ------------- | ------------- |
| React         | Express       | Google Maps   |   Jest |
| Tailwind      | Socket.IO     |  MovieDB      |   Cypress |
|          |      |               |   Mock Service Workers |

### Contributors:

- Alex Kubbinga

- Simon Roope 

- Ben Stimpson
