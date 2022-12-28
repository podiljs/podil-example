FROM node:18-alpine3.17
WORKDIR /app
COPY package*.json ./
COPY migrations ./migrations
COPY main.js ./
RUN npm ci
CMD npm start
