FROM node:22
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 
COPY .env ./
EXPOSE 3030
CMD [ "node","server.js" ]