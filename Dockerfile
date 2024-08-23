FROM node:22-alpine as build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:22-alpine as production

WORKDIR /app

COPY --from=build /app/dist/ /app/dist/

COPY package*.json .
COPY vite.config.ts .

RUN npm install typescript

EXPOSE 3000

CMD [ "npm", "run", "preview" ]