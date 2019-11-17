#FROM node:12 as build
#
## Create app directory
#WORKDIR /workspace
#
## A wildcard is used to ensure both package.json AND package-lock.json are copied
#COPY package.json yarn.lock /workspace/
#
## Install app dependencies
#RUN yarn
#
## Copy source files
#COPY . .
#
## Build the app
#RUN yarn build

#FROM node:12
#
#RUN npm install -g serve
#
## Create app directory
#WORKDIR /workspace
#
#COPY ./dist /workspace/dist
#
#EXPOSE 8080
#
#CMD [ "serve", "-l", "tcp://0.0.0.0:8080", "-s", "/workspace/dist/graphql-angular" ]

FROM nginx:latest
COPY dist/graphql-angular /usr/share/nginx/html
