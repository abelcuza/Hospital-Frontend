FROM node:16.16.0-alpine
COPY . /app/
WORKDIR /app
RUN npm install -g npm && npm install