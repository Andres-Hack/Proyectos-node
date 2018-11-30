FROM node:8.12.0-jessie

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]