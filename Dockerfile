# Stage 1: Build
FROM node:18 AS build

WORKDIR /app

# Copy package.json files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# (Optional) Run build if you have a build step (e.g. React, TypeScript)
# RUN npm run build


# Stage 2: Production image
FROM node:18-alpine

WORKDIR /app

# Copy only node_modules and app files from build stage
COPY --from=build /app /app

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
