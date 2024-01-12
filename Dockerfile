
# FROM node:18-alpine3.14 as angular 
FROM node:alpine

# ENV NODE_VERSION 18.13.0


WORKDIR /app

COPY . .
RUN npm install --force
RUN npm install -g @angular/cli@17.0.10


EXPOSE  4200

CMD ["ng", "serve", "--host", "0.0.0.0"]

