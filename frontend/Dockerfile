FROM node:18

# Create app directory
WORKDIR /app

# Copy files
COPY index.html .
COPY server.js .

# Install dependencies
RUN npm init -y && npm install express request

# Start server
CMD ["node", "server.js"]
