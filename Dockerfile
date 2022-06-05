FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN apk add --upgrade --no-cache vips-dev build-base --repository https://alpine.global.ssl.fastly.net/alpine/v3.10/community/

RUN yarn install

RUN yarn add sharp

COPY . .

RUN yarn build

EXPOSE 2300

CMD yarn start 
