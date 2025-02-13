# Use the official Node.js image as a base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install the dependencies inside the container
RUN npm install

# Copy the rest of your app to the container
COPY . .

# Build the Svelte app (this will generate the production-ready files)
RUN npm run build

# Install serve globally to serve the static files
RUN npm install -g serve

# Expose the port that your app will run on
EXPOSE 3000

# Run the app with the serve command
CMD ["serve", "build", "-s", "-l", "3000"]
