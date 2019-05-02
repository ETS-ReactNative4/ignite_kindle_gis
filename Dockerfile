FROM node:8
WORKDIR /src
COPY *.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD [ "npm", "start" ]
