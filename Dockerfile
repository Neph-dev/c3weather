FROM node:14.21.3-buster

WORKDIR /app

COPY package*.json package.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]