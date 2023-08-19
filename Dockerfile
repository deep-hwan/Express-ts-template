# Use an official lightweight Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:14-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# Copying this first prevents re-running npm install on every code change.
COPY package*.json ./

# Install all dependencies. If there are devDependencies, this will install those too.
RUN npm install

# Copy local code to the container image.
COPY . ./

# Build the source code
RUN npm run build

# Remove devDependencies
RUN npm prune --production

# Run the web service on container startup.
CMD [ "npm", "start" ]
