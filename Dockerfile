FROM node:alpine

WORKDIR /frontend

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

RUN npm run dev
