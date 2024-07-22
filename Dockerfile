# Use an official Node runtime as a parent image
FROM node:18.20.0

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Serve the application
CMD [ "npm", "start" ]
