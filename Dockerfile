FROM node:14.17.5-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install -s

COPY . ./

CMD ["npm", "start"]