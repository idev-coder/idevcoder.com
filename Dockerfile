FROM node:18

WORKDIR /ro-saga-app

RUN npm install -g serve

COPY ./package.json ./

# RUN npm i
# COPY ./ ./

CMD [ "npm", "start" ]