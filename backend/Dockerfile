FROM node:18

WORKDIR /app

COPY package.json .
COPY server.js .

# Install dependencies
RUN npm install

CMD ["node", "server.js"]
