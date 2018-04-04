FROM node:6.11.1

WORKDIR /server

COPY . /server
RUN npm install

CMD [ "npm", "start" ]