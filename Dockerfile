FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm install react-scripts@3.4.1 -g 

USER node

WORKDIR /home/node/app
