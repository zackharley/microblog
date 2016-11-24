FROM node:6.9.1
EXPOSE 8000
COPY . .
RUN npm i -g yarn
RUN yarn install
CMD npm start
