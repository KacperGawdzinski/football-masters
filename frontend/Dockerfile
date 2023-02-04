FROM node:18.13-alpine3.17

WORKDIR /app
COPY ./package*.json tsconfig.json .
COPY ./public ./public

ENTRYPOINT npm start
